// Site Service - Handles all user site operations
import { supabase } from '../supabase/client';
import { Database, SiteLayout, SiteTheme } from '../supabase/types';

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
      sections: []
    };

    const defaultTheme: SiteTheme = {
      colors: {
        primary: '#4169E1',
        secondary: '#6B46C1',
        background: '#000000',
        text: '#FFFFFF'
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
