// Site Service - Handles all user site operations
import { supabase } from '../supabase/client';
import { Database, SiteLayout, SiteTheme, SitePage } from '../supabase/types';

type UserSite = Database['public']['Tables']['user_sites']['Row'];
type UserSiteInsert = Database['public']['Tables']['user_sites']['Insert'];
type UserSiteUpdate = Database['public']['Tables']['user_sites']['Update'];

export class SiteService {
  /**
   * Get all sites for current user
   */
  static async getUserSites(userId: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .select(`
        *,
        template:templates(name, thumbnail_url)
      `)
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  /**
   * Get site by ID
   */
  static async getSiteById(siteId: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .select(`
        *,
        template:templates(*),
        versions:site_versions(*)
      `)
      .eq('id', siteId)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Get site by subdomain
   */
  static async getSiteBySubdomain(subdomain: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .select('*')
      .eq('subdomain', subdomain)
      .eq('is_published', true)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Get site by custom domain
   */
  static async getSiteByDomain(domain: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .select('*')
      .eq('custom_domain', domain)
      .eq('is_published', true)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Create a new site from template
   */
  static async createSiteFromTemplate(
    userId: string,
    templateId: string,
    siteName: string,
    slug: string
  ) {
    // First, get the template
    const { data: template, error: templateError } = await supabase
      .from('templates')
      .select('layout, theme')
      .eq('id', templateId)
      .single();

    if (templateError) throw templateError;

    // Create the site with template data
    const { data, error } = await supabase
      .from('user_sites')
      .insert({
        user_id: userId,
        template_id: templateId,
        name: siteName,
        slug: slug,
        layout: template.layout,
        theme: template.theme,
        subdomain: slug, // Use slug as default subdomain
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Create a blank site
   */
  static async createBlankSite(
    userId: string,
    siteName: string,
    slug: string
  ) {
    const defaultLayout: SiteLayout = {
      sections: [],
      pages: [
        {
          id: 'home',
          path: '/',
          name: 'Home',
          sections: []
        }
      ]
    };

    const defaultTheme: SiteTheme = {
      colors: {
        primary: '#4169E1',
        secondary: '#6B46C1',
        background: '#000000',
        text: '#FFFFFF',
        accent: '#22C55E'
      },
      fonts: {
        heading: 'Inter',
        body: 'Inter'
      }
    };

    const { data, error } = await supabase
      .from('user_sites')
      .insert({
        user_id: userId,
        name: siteName,
        slug: slug,
        layout: defaultLayout as any,
        theme: defaultTheme as any,
        subdomain: slug,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update site layout
   */
  static async updateSiteLayout(siteId: string, layout: SiteLayout) {
    const { data, error } = await supabase
      .from('user_sites')
      .update({
        layout: layout as any,
        last_edited_at: new Date().toISOString()
      })
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update site theme
   */
  static async updateSiteTheme(siteId: string, theme: SiteTheme) {
    const { data, error } = await supabase
      .from('user_sites')
      .update({
        theme: theme as any,
        last_edited_at: new Date().toISOString()
      })
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update site metadata
   */
  static async updateSiteMetadata(
    siteId: string,
    metadata: {
      name?: string;
      description?: string;
      meta_title?: string;
      meta_description?: string;
      meta_keywords?: string[];
      favicon_url?: string;
    }
  ) {
    const { data, error } = await supabase
      .from('user_sites')
      .update(metadata)
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Publish site
   */
  static async publishSite(siteId: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .update({
        is_published: true,
        published_at: new Date().toISOString()
      })
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Unpublish site
   */
  static async unpublishSite(siteId: string) {
    const { data, error } = await supabase
      .from('user_sites')
      .update({
        is_published: false
      })
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Delete site
   */
  static async deleteSite(siteId: string) {
    const { error } = await supabase
      .from('user_sites')
      .delete()
      .eq('id', siteId);

    if (error) throw error;
  }

  /**
   * Get site versions (for undo/redo)
   */
  static async getSiteVersions(siteId: string, limit: number = 10) {
    const { data, error } = await supabase
      .from('site_versions')
      .select('*')
      .eq('site_id', siteId)
      .order('version_number', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  }

  /**
   * Restore site to a specific version
   */
  static async restoreSiteVersion(siteId: string, versionId: string) {
    // Get the version
    const { data: version, error: versionError } = await supabase
      .from('site_versions')
      .select('layout, theme')
      .eq('id', versionId)
      .single();

    if (versionError) throw versionError;

    // Update the site
    const { data, error } = await supabase
      .from('user_sites')
      .update({
        layout: version.layout,
        theme: version.theme,
        last_edited_at: new Date().toISOString()
      })
      .eq('id', siteId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Increment view count
   */
  static async incrementViewCount(siteId: string) {
    const { error } = await supabase.rpc('increment', {
      row_id: siteId,
      table_name: 'user_sites',
      column_name: 'view_count'
    });

    // If RPC doesn't exist, fallback to manual increment
    if (error) {
      const { data: site } = await supabase
        .from('user_sites')
        .select('view_count')
        .eq('id', siteId)
        .single();

      if (site) {
        await supabase
          .from('user_sites')
          .update({ view_count: (site.view_count || 0) + 1 })
          .eq('id', siteId);
      }
    }
  }

  /**
   * Check if subdomain is available
   */
  static async isSubdomainAvailable(subdomain: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('user_sites')
      .select('id')
      .eq('subdomain', subdomain)
      .maybeSingle();

    if (error) throw error;
    return data === null;
  }

  /**
   * Check if custom domain is available
   */
  static async isDomainAvailable(domain: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('user_sites')
      .select('id')
      .eq('custom_domain', domain)
      .maybeSingle();

    if (error) throw error;
    return data === null;
  }
}

  /**
   * Add a new page to a site
   */
  static async addPage(
    siteId: string,
    page: SitePage
  ) {
    // Get current site
    const site = await this.getSiteById(siteId);
    const layout = site.layout as SiteLayout;

    // Initialize pages array if it doesn't exist
    if (!layout.pages) {
      layout.pages = [];
    }

    // Add the new page
    layout.pages.push(page);

    // Update the site
    return await this.updateSiteLayout(siteId, layout);
  }

  /**
   * Update a specific page in a site
   */
  static async updatePage(
    siteId: string,
    pageId: string,
    updatedPage: Partial<SitePage>
  ) {
    // Get current site
    const site = await this.getSiteById(siteId);
    const layout = site.layout as SiteLayout;

    if (!layout.pages) {
      throw new Error('Site does not have multi-page support');
    }

    // Find and update the page
    const pageIndex = layout.pages.findIndex(p => p.id === pageId);
    if (pageIndex === -1) {
      throw new Error('Page not found');
    }

    layout.pages[pageIndex] = {
      ...layout.pages[pageIndex],
      ...updatedPage
    };

    // Update the site
    return await this.updateSiteLayout(siteId, layout);
  }

  /**
   * Delete a page from a site
   */
  static async deletePage(siteId: string, pageId: string) {
    // Get current site
    const site = await this.getSiteById(siteId);
    const layout = site.layout as SiteLayout;

    if (!layout.pages) {
      throw new Error('Site does not have multi-page support');
    }

    // Don't allow deleting the home page
    const page = layout.pages.find(p => p.id === pageId);
    if (page?.path === '/') {
      throw new Error('Cannot delete the home page');
    }

    // Remove the page
    layout.pages = layout.pages.filter(p => p.id !== pageId);

    // Update the site
    return await this.updateSiteLayout(siteId, layout);
  }

  /**
   * Get all pages from a site
   */
  static async getPages(siteId: string): Promise<SitePage[]> {
    const site = await this.getSiteById(siteId);
    const layout = site.layout as SiteLayout;

    if (layout.pages && layout.pages.length > 0) {
      return layout.pages;
    }

    // Legacy single-page layout - return as single page
    return [
      {
        id: 'home',
        path: '/',
        name: 'Home',
        sections: layout.sections || []
      }
    ];
  }

  /**
   * Get a specific page by path
   */
  static async getPageByPath(siteId: string, path: string): Promise<SitePage | null> {
    const pages = await this.getPages(siteId);
    return pages.find(page => page.path === path) || null;
  }

  /**
   * Convert legacy single-page site to multi-page
   */
  static async convertToMultiPage(siteId: string) {
    const site = await this.getSiteById(siteId);
    const layout = site.layout as SiteLayout;

    // Check if already multi-page
    if (layout.pages && layout.pages.length > 0) {
      return site;
    }

    // Convert to multi-page format
    const newLayout: SiteLayout = {
      sections: [], // Keep for backward compatibility
      pages: [
        {
          id: 'home',
          path: '/',
          name: 'Home',
          sections: layout.sections || []
        }
      ]
    };

    return await this.updateSiteLayout(siteId, newLayout);
  }
}
