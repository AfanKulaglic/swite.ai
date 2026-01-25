import { SiteLayout, SitePage, SectionComponent } from '../supabase/types';

/**
 * Utility functions for working with multi-page layouts
 */

/**
 * Check if a layout is multi-page
 */
export function isMultiPageLayout(layout: SiteLayout): boolean {
  return !!(layout.pages && layout.pages.length > 0);
}

/**
 * Get all pages from a layout (handles both legacy and multi-page)
 */
export function getAllPages(layout: SiteLayout): SitePage[] {
  if (isMultiPageLayout(layout)) {
    return layout.pages!;
  }

  // Legacy single-page layout
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
 * Get a page by path
 */
export function getPageByPath(layout: SiteLayout, path: string): SitePage | null {
  const pages = getAllPages(layout);
  return pages.find(page => page.path === path) || null;
}

/**
 * Get a page by ID
 */
export function getPageById(layout: SiteLayout, pageId: string): SitePage | null {
  const pages = getAllPages(layout);
  return pages.find(page => page.id === pageId) || null;
}

/**
 * Add a new page to a layout
 */
export function addPage(layout: SiteLayout, page: SitePage): SiteLayout {
  if (!layout.pages) {
    layout.pages = [];
  }

  return {
    ...layout,
    pages: [...layout.pages, page]
  };
}

/**
 * Update a page in a layout
 */
export function updatePage(
  layout: SiteLayout,
  pageId: string,
  updates: Partial<SitePage>
): SiteLayout {
  if (!layout.pages) {
    throw new Error('Layout does not have multi-page support');
  }

  return {
    ...layout,
    pages: layout.pages.map(page =>
      page.id === pageId ? { ...page, ...updates } : page
    )
  };
}

/**
 * Delete a page from a layout
 */
export function deletePage(layout: SiteLayout, pageId: string): SiteLayout {
  if (!layout.pages) {
    throw new Error('Layout does not have multi-page support');
  }

  const page = layout.pages.find(p => p.id === pageId);
  if (page?.path === '/') {
    throw new Error('Cannot delete the home page');
  }

  return {
    ...layout,
    pages: layout.pages.filter(page => page.id !== pageId)
  };
}

/**
 * Add a section to a specific page
 */
export function addSectionToPage(
  layout: SiteLayout,
  pageId: string,
  section: SectionComponent
): SiteLayout {
  if (!layout.pages) {
    throw new Error('Layout does not have multi-page support');
  }

  return {
    ...layout,
    pages: layout.pages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          sections: [...page.sections, section]
        };
      }
      return page;
    })
  };
}

/**
 * Update a section in a specific page
 */
export function updateSectionInPage(
  layout: SiteLayout,
  pageId: string,
  sectionId: string,
  updates: Partial<SectionComponent>
): SiteLayout {
  if (!layout.pages) {
    throw new Error('Layout does not have multi-page support');
  }

  return {
    ...layout,
    pages: layout.pages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          sections: page.sections.map(section =>
            section.id === sectionId ? { ...section, ...updates } : section
          )
        };
      }
      return page;
    })
  };
}

/**
 * Delete a section from a specific page
 */
export function deleteSectionFromPage(
  layout: SiteLayout,
  pageId: string,
  sectionId: string
): SiteLayout {
  if (!layout.pages) {
    throw new Error('Layout does not have multi-page support');
  }

  return {
    ...layout,
    pages: layout.pages.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          sections: page.sections.filter(section => section.id !== sectionId)
        };
      }
      return page;
    })
  };
}

/**
 * Convert legacy single-page layout to multi-page
 */
export function convertToMultiPage(layout: SiteLayout): SiteLayout {
  if (isMultiPageLayout(layout)) {
    return layout; // Already multi-page
  }

  return {
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
}

/**
 * Convert multi-page layout to legacy single-page (home page only)
 */
export function convertToSinglePage(layout: SiteLayout): SiteLayout {
  if (!isMultiPageLayout(layout)) {
    return layout; // Already single-page
  }

  const homePage = layout.pages!.find(page => page.path === '/');
  
  return {
    sections: homePage?.sections || []
  };
}

/**
 * Generate a unique page ID
 */
export function generatePageId(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const timestamp = Date.now();
  return `${slug}-${timestamp}`;
}

/**
 * Validate page path format
 */
export function isValidPagePath(path: string): boolean {
  // Must start with /
  if (!path.startsWith('/')) return false;
  
  // Must not end with / (except for root)
  if (path !== '/' && path.endsWith('/')) return false;
  
  // Must only contain valid URL characters
  const validPathRegex = /^\/[a-z0-9\-\/]*$/;
  return validPathRegex.test(path);
}

/**
 * Check if a path already exists in the layout
 */
export function pathExists(layout: SiteLayout, path: string): boolean {
  const pages = getAllPages(layout);
  return pages.some(page => page.path === path);
}
