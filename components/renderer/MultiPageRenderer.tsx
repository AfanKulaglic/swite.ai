'use client';

import { usePathname } from 'next/navigation';
import { DynamicRenderer } from './DynamicRenderer';
import { SiteLayout, SiteTheme, SitePage } from '@/lib/supabase/types';

interface MultiPageRendererProps {
  layout: SiteLayout;
  theme?: SiteTheme;
  editable?: boolean;
  onSectionClick?: (sectionId: string) => void;
  currentPath?: string;
}

/**
 * MultiPageRenderer - Renders multi-page sites from JSON layout data
 * Supports both legacy single-page layouts and new multi-page layouts
 */
export function MultiPageRenderer({
  layout,
  theme,
  editable = false,
  onSectionClick,
  currentPath
}: MultiPageRendererProps) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;

  // Check if this is a multi-page layout
  const isMultiPage = layout.pages && layout.pages.length > 0;

  if (!isMultiPage) {
    // Legacy single-page layout - render all sections
    return (
      <DynamicRenderer
        layout={layout}
        theme={theme}
        editable={editable}
        onSectionClick={onSectionClick}
      />
    );
  }

  // Multi-page layout - find the current page
  const currentPage = layout.pages!.find(page => page.path === activePath);

  if (!currentPage) {
    // Page not found - show 404 or fallback to home
    const homePage = layout.pages!.find(page => page.path === '/');
    
    if (!homePage) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl text-white/60">Page not found</p>
          </div>
        </div>
      );
    }

    // Render home page as fallback
    return (
      <DynamicRenderer
        layout={{ sections: homePage.sections }}
        theme={theme}
        editable={editable}
        onSectionClick={onSectionClick}
      />
    );
  }

  // Render the current page
  return (
    <DynamicRenderer
      layout={{ sections: currentPage.sections }}
      theme={theme}
      editable={editable}
      onSectionClick={onSectionClick}
    />
  );
}

/**
 * Helper function to get all pages from a layout
 */
export function getPages(layout: SiteLayout): SitePage[] {
  if (layout.pages && layout.pages.length > 0) {
    return layout.pages;
  }
  
  // Legacy single-page layout - return as single page
  return [
    {
      id: 'home',
      path: '/',
      name: 'Home',
      sections: layout.sections
    }
  ];
}

/**
 * Helper function to get a specific page by path
 */
export function getPageByPath(layout: SiteLayout, path: string): SitePage | null {
  const pages = getPages(layout);
  return pages.find(page => page.path === path) || null;
}

/**
 * Helper function to validate multi-page layout
 */
export function validateMultiPageLayout(layout: any): boolean {
  if (!layout || typeof layout !== 'object') return false;
  
  // Check if it's a legacy single-page layout
  if (Array.isArray(layout.sections)) {
    return layout.sections.every((section: any) => {
      return (
        typeof section.id === 'string' &&
        typeof section.type === 'string' &&
        typeof section.props === 'object'
      );
    });
  }
  
  // Check if it's a multi-page layout
  if (Array.isArray(layout.pages)) {
    return layout.pages.every((page: any) => {
      return (
        typeof page.id === 'string' &&
        typeof page.path === 'string' &&
        typeof page.name === 'string' &&
        Array.isArray(page.sections) &&
        page.sections.every((section: any) => {
          return (
            typeof section.id === 'string' &&
            typeof section.type === 'string' &&
            typeof section.props === 'object'
          );
        })
      );
    });
  }
  
  return false;
}
