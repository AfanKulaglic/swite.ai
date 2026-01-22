'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

interface SelectedElement {
  selector: string;
  content: string;
  type: 'heading' | 'text' | 'button' | 'link' | 'gradient-text' | 'span' | 'div' | 'li';
  href?: string;
  src?: string;
}

interface Section {
  id: string;
  name: string;
  selector: string;
}

const TEMPLATE_PAGES = [
  { id: 'index', name: 'Home', path: '/templates/websphere/index.html' },
  { id: 'hosting', name: 'Hosting', path: '/templates/websphere/hosting.html' },
  { id: 'domains', name: 'Domains', path: '/templates/websphere/domains.html' },
  { id: 'pricing', name: 'Pricing', path: '/templates/websphere/pricing.html' },
  { id: 'blog', name: 'Blog', path: '/templates/websphere/blog.html' },
  { id: 'contact', name: 'Contact', path: '/templates/websphere/contact.html' },
];

export default function EditorPage() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [currentPage, setCurrentPage] = useState(TEMPLATE_PAGES[0]);
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [editValue, setEditValue] = useState('');
  const [editHref, setEditHref] = useState('');
  const [editSrc, setEditSrc] = useState('');
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [showSectionManager, setShowSectionManager] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [savedEdits, setSavedEdits] = useState<Record<string, any>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);

  // Load saved edits from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`template-edits-${currentPage.id}`);
    if (saved) {
      setSavedEdits(JSON.parse(saved));
    }
  }, [currentPage.id]);

  // Initialize iframe with click-to-edit functionality
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleIframeLoad = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      // Apply saved edits
      Object.entries(savedEdits).forEach(([selector, data]: [string, any]) => {
        const element = iframeDoc.querySelector(selector);
        if (element) {
          if (data.content !== undefined) {
            element.textContent = data.content;
          }
          if (data.href !== undefined && 'href' in element) {
            (element as HTMLAnchorElement).href = data.href;
          }
          if (data.src !== undefined && 'src' in element) {
            (element as HTMLImageElement).src = data.src;
          }
        }
      });

      // Make elements editable
      const editableSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'button', 'a',
        'span.bg-gradient-to-r',
        'span.bg-clip-text',
        'span:not(.bg-gradient-to-r):not(.bg-clip-text)',
        'div.text-4xl', 'div.text-sm',
        'li'
      ];

      editableSelectors.forEach(selector => {
        const elements = iframeDoc.querySelectorAll(selector);
        elements.forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          
          // Skip if already has handler
          if (htmlEl.dataset.editable) return;
          htmlEl.dataset.editable = 'true';

          // Add hover effect
          htmlEl.style.cursor = 'pointer';
          htmlEl.style.transition = 'outline 0.2s';
          
          htmlEl.addEventListener('mouseenter', () => {
            htmlEl.style.outline = '2px solid #4169E1';
            htmlEl.style.outlineOffset = '2px';
          });
          
          htmlEl.addEventListener('mouseleave', () => {
            if (!selectedElement || getElementSelector(htmlEl, iframeDoc) !== selectedElement.selector) {
              htmlEl.style.outline = 'none';
            }
          });

          // Add click handler
          htmlEl.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleElementClick(htmlEl, iframeDoc);
          });
        });
      });

      // Detect sections
      detectSections(iframeDoc);
    };

    iframe.addEventListener('load', handleIframeLoad);
    return () => iframe.removeEventListener('load', handleIframeLoad);
  }, [savedEdits, currentPage.id]);

  const getElementSelector = (element: HTMLElement, doc: Document): string => {
    // Use ID if available
    if (element.id) return `#${element.id}`;

    // For gradient text
    if (element.classList.contains('bg-gradient-to-r') || element.classList.contains('bg-clip-text')) {
      const parent = element.parentElement;
      if (parent) {
        const spans = parent.querySelectorAll('span.bg-gradient-to-r, span.bg-clip-text');
        const index = Array.from(spans).indexOf(element);
        return `${getElementSelector(parent, doc)} > span.bg-gradient-to-r:nth-of-type(${index + 1})`;
      }
    }

    // Build selector with tag and classes
    const tag = element.tagName.toLowerCase();
    const classes = Array.from(element.classList).slice(0, 2).join('.');
    const parent = element.parentElement;
    
    if (parent) {
      const siblings = Array.from(parent.children).filter(
        child => child.tagName === element.tagName
      );
      const index = siblings.indexOf(element) + 1;
      
      if (classes) {
        return `${tag}.${classes}:nth-of-type(${index})`;
      }
      return `${tag}:nth-of-type(${index})`;
    }

    return tag;
  };

  const handleElementClick = (element: HTMLElement, doc: Document) => {
    const selector = getElementSelector(element, doc);
    const tagName = element.tagName.toLowerCase();
    
    let type: SelectedElement['type'] = 'text';
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
      type = 'heading';
    } else if (tagName === 'button') {
      type = 'button';
    } else if (tagName === 'a') {
      type = 'link';
    } else if (element.classList.contains('bg-gradient-to-r') || element.classList.contains('bg-clip-text')) {
      type = 'gradient-text';
    } else if (tagName === 'span') {
      type = 'span';
    } else if (tagName === 'div') {
      type = 'div';
    } else if (tagName === 'li') {
      type = 'li';
    }

    const content = element.textContent || '';
    const href = (element as HTMLAnchorElement).href || '';
    const src = (element as HTMLImageElement).src || '';

    setSelectedElement({ selector, content, type, href, src });
    setEditValue(content);
    setEditHref(href ? new URL(href).pathname : '');
    setEditSrc(src);
    setShowEditPanel(true);

    // Highlight selected element
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDoc = iframe.contentDocument;
      if (iframeDoc) {
        // Remove previous highlights
        iframeDoc.querySelectorAll('[data-editable]').forEach((el: Element) => {
          (el as HTMLElement).style.outline = 'none';
        });
        // Highlight current
        element.style.outline = '3px solid #4169E1';
        element.style.outlineOffset = '2px';
      }
    }
  };

  const handleUpdate = () => {
    if (!selectedElement) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeDoc = iframe.contentDocument;
    if (!iframeDoc) return;

    const element = iframeDoc.querySelector(selectedElement.selector);
    if (!element) return;

    // Update content
    if (editValue !== selectedElement.content) {
      element.textContent = editValue;
    }

    // Update href for links
    if (selectedElement.type === 'link' && editHref) {
      (element as HTMLAnchorElement).href = editHref;
    }

    // Update src for images
    if (editSrc && 'src' in element) {
      (element as HTMLImageElement).src = editSrc;
    }

    // Save to state and localStorage
    const newEdits = {
      ...savedEdits,
      [selectedElement.selector]: {
        content: editValue,
        href: editHref || undefined,
        src: editSrc || undefined,
        type: selectedElement.type,
      },
    };

    setSavedEdits(newEdits);
    localStorage.setItem(`template-edits-${currentPage.id}`, JSON.stringify(newEdits));

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    // Close panel
    setShowEditPanel(false);
    setSelectedElement(null);

    // Remove highlight
    (element as HTMLElement).style.outline = 'none';
  };

  const detectSections = (doc: Document) => {
    const sectionElements = doc.querySelectorAll('section, .section, [class*="section"]');
    const detectedSections: Section[] = [];

    sectionElements.forEach((section, index) => {
      const id = section.id || `section-${index}`;
      const name = section.getAttribute('data-section-name') || 
                   section.querySelector('h1, h2, h3')?.textContent || 
                   `Section ${index + 1}`;
      
      detectedSections.push({
        id,
        name: name.substring(0, 30),
        selector: section.id ? `#${section.id}` : `section:nth-of-type(${index + 1})`,
      });
    });

    setSections(detectedSections);
  };

  const handleSaveAll = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handlePublish = () => {
    setShowPublishModal(true);
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <div className="h-screen bg-black text-white overflow-hidden flex">
      {/* Left Edit Panel */}
      <div
        className={`border-r border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-y-auto ${
          showEditPanel ? 'w-80' : 'w-0'
        }`}
      >
        {showEditPanel && selectedElement && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-light uppercase tracking-wider">Edit Content</h2>
              <button
                onClick={() => {
                  setShowEditPanel(false);
                  setSelectedElement(null);
                  // Remove highlight
                  const iframe = iframeRef.current;
                  if (iframe) {
                    const iframeDoc = iframe.contentDocument;
                    if (iframeDoc) {
                      iframeDoc.querySelectorAll('[data-editable]').forEach((el: Element) => {
                        (el as HTMLElement).style.outline = 'none';
                      });
                    }
                  }
                }}
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Element Type */}
            <div className="mb-4">
              <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                Element Type
              </label>
              <div className="px-3 py-2 border border-white/10 text-xs font-light capitalize">
                {selectedElement.type.replace('-', ' ')}
              </div>
            </div>

            {/* Content Editor */}
            <div className="mb-4">
              <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                {selectedElement.type === 'gradient-text' ? 'Gradient Text' : 'Content'}
              </label>
              {selectedElement.type === 'heading' || selectedElement.type === 'button' || 
               selectedElement.type === 'link' || selectedElement.type === 'span' || 
               selectedElement.type === 'gradient-text' ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-sm font-light focus:border-[#4169E1]/40 focus:outline-none transition-colors"
                  placeholder="Enter text..."
                />
              ) : (
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-sm font-light focus:border-[#4169E1]/40 focus:outline-none transition-colors resize-none"
                  placeholder="Enter text..."
                />
              )}
            </div>

            {/* Link URL Editor */}
            {(selectedElement.type === 'link' || selectedElement.type === 'button') && (
              <div className="mb-4">
                <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                  Link URL
                </label>
                <input
                  type="text"
                  value={editHref}
                  onChange={(e) => setEditHref(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-sm font-light focus:border-[#4169E1]/40 focus:outline-none transition-colors"
                  placeholder="/path or https://..."
                />
                <p className="mt-2 text-[10px] text-white/30">
                  💡 Use relative paths (/pricing) or full URLs
                </p>
              </div>
            )}

            {/* Update Button */}
            <button
              onClick={handleUpdate}
              className="w-full px-4 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-all duration-300"
            >
              Update Content
            </button>

            {/* Tips */}
            <div className="mt-6 p-4 border border-white/10 bg-white/5">
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">💡 Tips</p>
              <ul className="text-xs text-white/60 space-y-1 font-light">
                <li>• Click any text to edit</li>
                <li>• Changes save automatically</li>
                <li>• Gradient text editable separately</li>
                <li>• Links have custom URLs</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left - Back & Title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/studio')}
                className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 text-sm font-light"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <div className="h-4 w-px bg-white/10"></div>
              <div>
                <h1 className="text-sm font-light text-white">Visual Editor</h1>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">WebSphere Template</p>
              </div>
            </div>

            {/* Center - Device Switcher & Page Selector */}
            <div className="flex items-center gap-3">
              {/* Device Switcher */}
              <div className="flex items-center gap-1 px-1 py-1 border border-white/10">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`px-3 py-1.5 transition-all text-xs font-light ${
                    device === 'desktop'
                      ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white'
                      : 'text-white/40 hover:text-white'
                  }`}
                  title="Desktop"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setDevice('tablet')}
                  className={`px-3 py-1.5 transition-all text-xs font-light ${
                    device === 'tablet'
                      ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white'
                      : 'text-white/40 hover:text-white'
                  }`}
                  title="Tablet"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`px-3 py-1.5 transition-all text-xs font-light ${
                    device === 'mobile'
                      ? 'bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white'
                      : 'text-white/40 hover:text-white'
                  }`}
                  title="Mobile"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* Page Selector */}
              <select
                value={currentPage.id}
                onChange={(e) => {
                  const page = TEMPLATE_PAGES.find(p => p.id === e.target.value);
                  if (page) {
                    setCurrentPage(page);
                    setShowEditPanel(false);
                    setSelectedElement(null);
                  }
                }}
                className="px-4 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-xs font-light text-white bg-black appearance-none cursor-pointer outline-none"
              >
                {TEMPLATE_PAGES.map(page => (
                  <option key={page.id} value={page.id} className="bg-black">
                    {page.name}
                  </option>
                ))}
              </select>

              {/* Section Manager Toggle */}
              <button
                onClick={() => setShowSectionManager(!showSectionManager)}
                className={`px-3 py-2 border transition-all text-xs font-light ${
                  showSectionManager
                    ? 'border-[#4169E1]/40 bg-[#4169E1]/10 text-white'
                    : 'border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 text-white/60'
                }`}
                title="Section Manager"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveAll}
                className="px-4 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-xs font-light tracking-wide"
              >
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                className="px-6 py-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-xs font-medium tracking-wide hover:opacity-90 transition-all duration-300"
              >
                Publish
              </button>
            </div>
          </div>

          {/* Section Manager */}
          {showSectionManager && sections.length > 0 && (
            <div className="border-t border-white/10 px-6 py-4 bg-black/50">
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Sections ({sections.length})</p>
              <div className="grid grid-cols-4 gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className="px-3 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-xs font-light text-left truncate"
                    title={section.name}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Preview Area */}
        <div className="flex-1 overflow-hidden bg-black flex items-center justify-center p-6">
          <div 
            className="bg-white overflow-hidden border border-white/10 transition-all duration-500 ease-out"
            style={{
              width: getDeviceWidth(),
              height: device === 'desktop' ? '100%' : '95%',
              maxWidth: '100%',
            }}
          >
            <iframe
              key={currentPage.id}
              ref={iframeRef}
              src={currentPage.path}
              className="w-full h-full"
              title="Template Preview"
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-2">
          <div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-wider">
            <span>Click any element to edit • Hover to see editable elements</span>
            <span>{Object.keys(savedEdits).length} edits saved</span>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-6 right-6 px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-light border border-white/10 animate-fade-in-up z-50">
          ✓ Changes saved successfully
        </div>
      )}

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black border border-white/10 p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-light mb-4">Publish Your Website</h2>
            <p className="text-white/60 font-light mb-6">
              Your website is ready to go live! Sign up to publish your professionally designed website.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/signup')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-all duration-300"
              >
                Sign Up to Publish
              </button>
              <button
                onClick={() => setShowPublishModal(false)}
                className="px-6 py-3 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-sm font-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
