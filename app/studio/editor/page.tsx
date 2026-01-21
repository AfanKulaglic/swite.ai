'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

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
  const [isSaving, setIsSaving] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [currentPage, setCurrentPage] = useState(TEMPLATE_PAGES[0]);
  const [selectedElement, setSelectedElement] = useState<{
    selector: string;
    content: string;
    type: 'text' | 'heading' | 'button' | 'link' | 'gradient-text' | 'image';
    href?: string;
    src?: string;
    alt?: string;
    isGradient?: boolean;
  } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [editHref, setEditHref] = useState('');
  const [editSrc, setEditSrc] = useState('');
  const [editAlt, setEditAlt] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showSectionManager, setShowSectionManager] = useState(false);
  const [sections, setSections] = useState<Array<{
    id: string;
    name: string;
    html: string;
    page: string;
  }>>([]);
  const [draggedSection, setDraggedSection] = useState<number | null>(null);
  const [sectionPreviews, setSectionPreviews] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleIframeLoad = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      console.log('Iframe loaded for page:', currentPage.id);

      // Load saved edits from localStorage for current page FIRST
      const savedEdits = JSON.parse(localStorage.getItem('template-edits') || '{}');
      const pageEdits = savedEdits[currentPage.id] || {};
      console.log('Loading saved edits:', pageEdits);

      // Apply saved edits BEFORE making elements editable
      Object.keys(pageEdits).forEach(selector => {
        console.log('Applying edit for selector:', selector);
        const element = iframeDoc.querySelector(selector);
        if (element) {
          const edit = pageEdits[selector];
          console.log('Found element, applying:', edit);
          if (edit.content !== undefined && edit.type !== 'image') {
            element.textContent = edit.content;
            console.log('Applied text content:', element.textContent);
          }
          if (edit.href !== undefined && (element as HTMLAnchorElement).href) {
            (element as HTMLAnchorElement).href = edit.href;
          }
          if (edit.src !== undefined && (element as HTMLImageElement).src) {
            (element as HTMLImageElement).src = edit.src;
          }
          if (edit.alt !== undefined && (element as HTMLImageElement).alt !== undefined) {
            (element as HTMLImageElement).alt = edit.alt;
          }
        } else {
          console.warn('Could not find element for selector:', selector);
        }
      });

      // Extract sections from the page
      extractSections(iframeDoc);

      // Load saved section order
      const savedOrder = JSON.parse(localStorage.getItem('section-order') || '{}');
      const pageOrder = savedOrder[currentPage.id];
      
      if (pageOrder && pageOrder.length > 0) {
        reorderSections(iframeDoc, pageOrder);
      }

      // Make elements editable on click
      const makeEditable = () => {
        // Images
        const images = iframeDoc.querySelectorAll('img');
        images.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            handleElementClick(el as HTMLElement, 'image');
          });
          addHoverEffect(el as HTMLElement);
        });

        // Gradient text (spans with gradient classes)
        const gradientTexts = iframeDoc.querySelectorAll('span.bg-gradient-to-r, span.bg-clip-text, .text-transparent');
        gradientTexts.forEach((el) => {
          if (el.textContent && el.textContent.trim()) {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              handleElementClick(el as HTMLElement, 'gradient-text');
            });
            addHoverEffect(el as HTMLElement);
          }
        });

        // Headings
        const headings = iframeDoc.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((el) => {
          const hasGradient = el.querySelector('span.bg-gradient-to-r, span.bg-clip-text');
          if (!hasGradient) {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              handleElementClick(el as HTMLElement, 'heading');
            });
            addHoverEffect(el as HTMLElement);
          } else {
            // Make the non-gradient parts editable
            const textNodes = getTextNodes(el as HTMLElement);
            textNodes.forEach(node => {
              if (node.textContent && node.textContent.trim()) {
                const span = iframeDoc.createElement('span');
                span.textContent = node.textContent;
                span.className = 'editable-text';
                node.parentNode?.replaceChild(span, node);
                span.addEventListener('click', (e) => {
                  e.stopPropagation();
                  handleElementClick(span, 'text');
                });
                addHoverEffect(span);
              }
            });
          }
        });

        // Paragraphs
        const paragraphs = iframeDoc.querySelectorAll('p');
        paragraphs.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            handleElementClick(el as HTMLElement, 'text');
          });
          addHoverEffect(el as HTMLElement);
        });

        // Links (a tags)
        const links = iframeDoc.querySelectorAll('a');
        links.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleElementClick(el as HTMLElement, 'link');
          });
          addHoverEffect(el as HTMLElement);
        });

        // Buttons
        const buttons = iframeDoc.querySelectorAll('button');
        buttons.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleElementClick(el as HTMLElement, 'button');
          });
          addHoverEffect(el as HTMLElement);
        });

        // All text spans (badges, labels, etc.)
        const spans = iframeDoc.querySelectorAll('span');
        spans.forEach((el) => {
          // Skip if already handled (gradient text or editable-text)
          if (el.classList.contains('bg-gradient-to-r') || 
              el.classList.contains('bg-clip-text') || 
              el.classList.contains('editable-text')) {
            return;
          }
          
          if (el.textContent && el.textContent.trim() && !el.querySelector('span')) {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              handleElementClick(el as HTMLElement, 'text');
            });
            addHoverEffect(el as HTMLElement);
          }
        });

        // Divs with text content (stats, labels, etc.)
        const divs = iframeDoc.querySelectorAll('div');
        divs.forEach((el) => {
          // Only make divs editable if they have direct text content and no complex children
          const hasOnlyText = Array.from(el.childNodes).every(
            node => node.nodeType === Node.TEXT_NODE || 
                   (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === 'BR')
          );
          
          if (hasOnlyText && el.textContent && el.textContent.trim()) {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              handleElementClick(el as HTMLElement, 'text');
            });
            addHoverEffect(el as HTMLElement);
          }
        });

        // List items
        const listItems = iframeDoc.querySelectorAll('li');
        listItems.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            handleElementClick(el as HTMLElement, 'text');
          });
          addHoverEffect(el as HTMLElement);
        });
      };

      const addHoverEffect = (element: HTMLElement) => {
        element.style.cursor = 'pointer';
        element.style.outline = '2px solid transparent';
        element.style.transition = 'outline 0.2s';
        element.style.outlineOffset = '2px';
        
        element.addEventListener('mouseenter', () => {
          element.style.outline = '2px solid rgba(255, 255, 255, 0.6)';
        });
        element.addEventListener('mouseleave', () => {
          element.style.outline = '2px solid transparent';
        });
      };

      const getTextNodes = (element: HTMLElement): Node[] => {
        const textNodes: Node[] = [];
        const walker = iframeDoc.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null
        );
        
        let node;
        while (node = walker.nextNode()) {
          if (node.textContent && node.textContent.trim() && 
              node.parentElement?.tagName !== 'SPAN' ||
              !node.parentElement?.className.includes('gradient')) {
            textNodes.push(node);
          }
        }
        return textNodes;
      };

      const handleElementClick = (element: HTMLElement, type: 'text' | 'heading' | 'button' | 'link' | 'gradient-text' | 'image') => {
        const content = element.textContent || '';
        const selector = getElementSelector(element);
        const href = (element as HTMLAnchorElement).href || '';
        const src = (element as HTMLImageElement).src || '';
        const alt = (element as HTMLImageElement).alt || '';
        const isGradient = element.classList.contains('bg-gradient-to-r') || 
                          element.classList.contains('bg-clip-text') ||
                          element.classList.contains('text-transparent');
        
        // Close section manager when editing content
        setShowSectionManager(false);
        
        setSelectedElement({ 
          selector, 
          content, 
          type: type === 'image' ? 'image' : (isGradient ? 'gradient-text' : type),
          href: href ? new URL(href).pathname : '',
          src: src,
          alt: alt,
          isGradient 
        });
        setEditValue(content);
        setEditHref(href ? new URL(href).pathname : '');
        setEditSrc(src);
        setEditAlt(alt);
        
        // Highlight selected element
        const allElements = iframeDoc.querySelectorAll('[style*="outline"]');
        allElements.forEach((el) => {
          (el as HTMLElement).style.outline = '2px solid transparent';
        });
        element.style.outline = '3px solid rgba(255, 255, 255, 0.8)';
        element.style.outlineOffset = '2px';
      };

      const getElementSelector = (element: HTMLElement): string => {
        if (element.id) return `#${element.id}`;
        
        // For images, use src as unique identifier
        if (element.tagName === 'IMG') {
          const src = (element as HTMLImageElement).src;
          return `img[src="${src}"]`;
        }
        
        // For gradient text spans
        if (element.classList.contains('bg-gradient-to-r') || 
            element.classList.contains('bg-clip-text')) {
          const parent = element.parentElement;
          if (parent) {
            const spans = Array.from(parent.querySelectorAll('span.bg-gradient-to-r, span.bg-clip-text'));
            const index = spans.indexOf(element);
            return `${getElementSelector(parent)} > span.bg-gradient-to-r:nth-of-type(${index + 1})`;
          }
        }
        
        // Build a more reliable selector using data attributes or position
        let path = element.tagName.toLowerCase();
        const parent = element.parentElement;
        
        if (parent) {
          // Get all siblings of the same tag
          const siblings = Array.from(parent.children).filter(
            (child) => child.tagName === element.tagName
          );
          const index = siblings.indexOf(element) + 1;
          
          // Use tag name and nth-child for reliability
          if (parent.tagName === 'BODY') {
            return `body > ${path}:nth-child(${index})`;
          }
          
          // Build parent path
          let parentPath = parent.tagName.toLowerCase();
          if (parent.id) {
            parentPath = `#${parent.id}`;
          } else if (parent.className) {
            // Only use first class and escape special characters
            const firstClass = parent.className.split(' ')[0].replace(/[:\[\]]/g, '\\$&');
            if (firstClass && !firstClass.includes('hover') && !firstClass.includes('focus')) {
              parentPath = `${parentPath}.${firstClass}`;
            }
          }
          
          return `${parentPath} > ${path}:nth-child(${index})`;
        }
        
        return path;
      };

      makeEditable();
      
      console.log('Iframe setup complete');
    };

    // Remove any existing listener first
    iframe.removeEventListener('load', handleIframeLoad);
    
    // Add the listener
    iframe.addEventListener('load', handleIframeLoad);
    
    // If iframe is already loaded, trigger manually
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      console.log('Iframe already loaded, triggering handleIframeLoad');
      handleIframeLoad();
    }

    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, [currentPage.id]);

  const handleUpdateContent = () => {
    const iframe = iframeRef.current;
    if (!iframe || !selectedElement) {
      console.log('No iframe or selected element');
      return;
    }

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      console.log('No iframe document');
      return;
    }

    console.log('Trying to find element with selector:', selectedElement.selector);
    const element = iframeDoc.querySelector(selectedElement.selector);
    
    if (element) {
      console.log('Element found:', element);
      console.log('Current content:', element.textContent);
      console.log('New content:', editValue);
      
      // Update text content
      if (selectedElement.type !== 'image') {
        element.textContent = editValue;
        // Force DOM update
        if (element.parentElement) {
          element.parentElement.style.display = 'block';
        }
        console.log('Text updated. Verify:', element.textContent);
      }
      
      // Update href if it's a link or button with href
      if ((selectedElement.type === 'link' || selectedElement.type === 'button') && editHref) {
        (element as HTMLAnchorElement).href = editHref;
        console.log('Href updated to:', (element as HTMLAnchorElement).href);
      }
      
      // Update image src and alt
      if (selectedElement.type === 'image') {
        if (editSrc) {
          (element as HTMLImageElement).src = editSrc;
          console.log('Image src updated');
        }
        if (editAlt !== undefined) {
          (element as HTMLImageElement).alt = editAlt;
          console.log('Image alt updated');
        }
      }
      
      // Save to localStorage with page context
      const savedEdits = JSON.parse(localStorage.getItem('template-edits') || '{}');
      const pageKey = currentPage.id;
      if (!savedEdits[pageKey]) {
        savedEdits[pageKey] = {};
      }
      savedEdits[pageKey][selectedElement.selector] = {
        content: editValue,
        href: editHref || undefined,
        src: editSrc || undefined,
        alt: editAlt || undefined,
        type: selectedElement.type
      };
      localStorage.setItem('template-edits', JSON.stringify(savedEdits));
      console.log('Saved to localStorage:', savedEdits);
      
      // Show success message
      showSuccessMessage('Updated successfully!');
      
      // Clear selection outline
      element.style.outline = '2px solid transparent';
    } else {
      console.error('Element not found with selector:', selectedElement.selector);
      console.log('Available elements in iframe:', iframeDoc.body.innerHTML.substring(0, 500));
      showSuccessMessage('Error: Element not found');
    }

    setSelectedElement(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setEditSrc(base64);
      
      // Auto-update the image in the iframe
      const iframe = iframeRef.current;
      if (iframe && selectedElement) {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const element = iframeDoc.querySelector(selectedElement.selector);
          if (element) {
            (element as HTMLImageElement).src = base64;
          }
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const showSuccessMessage = (message: string) => {
    const msg = document.createElement('div');
    msg.className = 'fixed top-24 right-6 bg-brand text-black px-6 py-3 rounded-lg font-bold shadow-lg z-50 animate-slide-in-right';
    msg.textContent = `✓ ${message}`;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showSuccessMessage('Draft saved locally');
    }, 1000);
  };

  const handlePublish = () => {
    setShowPublishModal(true);
  };

  const handlePageChange = (page: typeof TEMPLATE_PAGES[0]) => {
    setCurrentPage(page);
    setSelectedElement(null);
  };

  const extractSections = (iframeDoc: Document) => {
    const body = iframeDoc.body;
    const mainSections: Array<{id: string; name: string; html: string; page: string}> = [];
    
    const sectionElements = body.querySelectorAll('section, .section, [class*="section"], header:not(nav header), footer, main > div, body > div[class]');
    
    sectionElements.forEach((section, index) => {
      const element = section as HTMLElement;
      
      if (element.querySelector('nav') || element.offsetHeight < 100) return;
      
      if (!element.id) {
        element.id = `section-${currentPage.id}-${index}`;
      }
      
      let sectionName = 'Section';
      const heading = element.querySelector('h1, h2, h3');
      if (heading?.textContent) {
        sectionName = heading.textContent.trim().substring(0, 30);
      } else if (element.className) {
        const classes = element.className.split(' ');
        const meaningfulClass = classes.find(c => 
          c.includes('hero') || c.includes('feature') || c.includes('pricing') || 
          c.includes('testimonial') || c.includes('contact') || c.includes('cta') ||
          c.includes('about') || c.includes('service') || c.includes('footer')
        );
        if (meaningfulClass) {
          sectionName = meaningfulClass.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
      }
      
      mainSections.push({
        id: element.id,
        name: sectionName,
        html: element.outerHTML,
        page: currentPage.id
      });
      
      element.style.position = 'relative';
      element.style.transition = 'all 0.3s ease';
      element.setAttribute('data-section-id', element.id);
    });
    
    setSections(mainSections);
    
    // Generate previews for sections
    generateSectionPreviews(mainSections, iframeDoc);
  };

  const generateSectionPreviews = (sectionsToPreview: typeof sections, iframeDoc: Document) => {
    const previews = new Map<string, string>();
    
    sectionsToPreview.forEach(section => {
      const element = iframeDoc.getElementById(section.id);
      if (element) {
        // Create a canvas to capture the section as an image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size (thumbnail size)
        canvas.width = 300;
        canvas.height = 200;
        
        if (ctx) {
          // Get computed styles
          const styles = window.getComputedStyle(element);
          const bgColor = styles.backgroundColor || '#000000';
          
          // Fill background
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Try to capture text content as preview
          const textContent = element.textContent?.substring(0, 100) || '';
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px Arial';
          ctx.fillText(textContent.substring(0, 40), 10, 30);
          
          previews.set(section.id, canvas.toDataURL());
        }
      }
    });
    
    setSectionPreviews(previews);
  };

  const reorderSections = (iframeDoc: Document, order: string[]) => {
    const body = iframeDoc.body;
    const sectionsMap = new Map<string, HTMLElement>();
    
    order.forEach(id => {
      const element = iframeDoc.getElementById(id);
      if (element) {
        sectionsMap.set(id, element);
      }
    });
    
    order.forEach(id => {
      const element = sectionsMap.get(id);
      if (element) {
        body.appendChild(element);
      }
    });
  };

  const handleSectionDragStart = (index: number) => {
    setDraggedSection(index);
  };

  const handleSectionDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedSection === null || draggedSection === index) return;
    
    const newSections = [...sections];
    const draggedItem = newSections[draggedSection];
    newSections.splice(draggedSection, 1);
    newSections.splice(index, 0, draggedItem);
    
    setSections(newSections);
    setDraggedSection(index);
  };

  const handleSectionDragEnd = () => {
    setDraggedSection(null);
    
    const order = sections.map(s => s.id);
    const savedOrder = JSON.parse(localStorage.getItem('section-order') || '{}');
    savedOrder[currentPage.id] = order;
    localStorage.setItem('section-order', JSON.stringify(savedOrder));
    
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        reorderSections(iframeDoc, order);
      }
    }
    
    showSuccessMessage('Section order updated!');
  };

  const handleInsertSection = (sectionHtml: string, targetIndex: number) => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;
    
    const temp = iframeDoc.createElement('div');
    temp.innerHTML = sectionHtml;
    const newSection = temp.firstElementChild as HTMLElement;
    
    if (!newSection) return;
    
    const newId = `section-${currentPage.id}-inserted-${Date.now()}`;
    newSection.id = newId;
    
    const targetSection = iframeDoc.getElementById(sections[targetIndex]?.id);
    if (targetSection) {
      targetSection.parentNode?.insertBefore(newSection, targetSection);
    } else {
      iframeDoc.body.appendChild(newSection);
    }
    
    extractSections(iframeDoc);
    showSuccessMessage('Section inserted!');
  };

  const handleDeleteSection = (sectionId: string, index: number) => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;
    
    const section = iframeDoc.getElementById(sectionId);
    if (section && confirm('Are you sure you want to delete this section?')) {
      section.remove();
      
      const newSections = sections.filter((_, i) => i !== index);
      setSections(newSections);
      
      const order = newSections.map(s => s.id);
      const savedOrder = JSON.parse(localStorage.getItem('section-order') || '{}');
      savedOrder[currentPage.id] = order;
      localStorage.setItem('section-order', JSON.stringify(savedOrder));
      
      showSuccessMessage('Section deleted!');
    }
  };

  const handleDuplicateSection = (sectionId: string, index: number) => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;
    
    const section = iframeDoc.getElementById(sectionId);
    if (section) {
      const clone = section.cloneNode(true) as HTMLElement;
      const newId = `section-${currentPage.id}-duplicate-${Date.now()}`;
      clone.id = newId;
      
      section.parentNode?.insertBefore(clone, section.nextSibling);
      
      extractSections(iframeDoc);
      showSuccessMessage('Section duplicated!');
    }
  };

  const handlePreview = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Get the full HTML with all modifications
    const modifiedHTML = `<!DOCTYPE html>${iframeDoc.documentElement.outerHTML}`;
    
    // Create a blob URL for the modified HTML
    const blob = new Blob([modifiedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Open in new tab
    const newWindow = window.open(url, '_blank');
    
    // Clean up the blob URL after a delay
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
    
    if (newWindow) {
      showSuccessMessage('Preview opened in new tab!');
    } else {
      showSuccessMessage('Please allow popups to preview');
    }
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
    <div className="min-h-screen bg-black">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/studio')}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="h-6 w-px bg-white/10"></div>
            <div>
              <h1 className="text-sm font-semibold text-white">Visual Editor</h1>
              <p className="text-xs text-white/40">WebSphere Template</p>
            </div>
          </div>

          {/* Center - Device Switcher & Page Selector */}
          <div className="hidden md:flex items-center gap-3">
            {/* Device Switcher */}
            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <button
                onClick={() => setDevice('desktop')}
                className={`px-3 py-1.5 rounded-md transition-all text-xs font-medium ${
                  device === 'desktop'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Desktop"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`px-3 py-1.5 rounded-md transition-all text-xs font-medium ${
                  device === 'tablet'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Tablet"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`px-3 py-1.5 rounded-md transition-all text-xs font-medium ${
                  device === 'mobile'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Mobile"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Page Selector */}
            <div className="relative">
              <select
                value={currentPage.id}
                onChange={(e) => {
                  const page = TEMPLATE_PAGES.find(p => p.id === e.target.value);
                  if (page) handlePageChange(page);
                }}
                className="px-4 py-2 pr-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white appearance-none cursor-pointer outline-none"
              >
                {TEMPLATE_PAGES.map(page => (
                  <option key={page.id} value={page.id} className="bg-black">
                    {page.name}
                  </option>
                ))}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setShowSectionManager(!showSectionManager);
                // Close edit panel when opening section manager
                if (!showSectionManager) {
                  setSelectedElement(null);
                }
              }}
              className={`px-4 py-2 rounded-lg border transition-all flex items-center gap-2 text-sm font-medium ${
                showSectionManager
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Sections
            </button>
            <button
              onClick={handlePreview}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium"
              title="Preview in new tab"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-30 flex items-center gap-2 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handlePublish}
              className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all text-sm"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[73px] flex h-screen">
        {/* Section Manager Sidebar */}
        {showSectionManager && (
          <div className="w-80 border-r border-white/10 bg-black/40 backdrop-blur-xl overflow-y-auto custom-scrollbar flex-shrink-0">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-semibold text-white mb-1">Section Manager</h2>
                  <p className="text-xs text-white/40">Drag to reorder sections</p>
                </div>
                <button
                  onClick={() => setShowSectionManager(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Current Page Sections */}
              <div className="mb-6">
                <h3 className="text-xs font-medium text-white/60 mb-3 uppercase tracking-wider">Current Page</h3>
                <div className="space-y-3">
                  {sections.filter(s => s.page === currentPage.id).map((section, index) => (
                    <div
                      key={section.id}
                      draggable
                      onDragStart={() => handleSectionDragStart(index)}
                      onDragOver={(e) => handleSectionDragOver(e, index)}
                      onDragEnd={handleSectionDragEnd}
                      className={`group rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-move overflow-hidden ${
                        draggedSection === index ? 'opacity-50' : ''
                      }`}
                    >
                      {/* Preview Thumbnail */}
                      <div className="relative aspect-video bg-white border-b border-white/10 overflow-hidden">
                        <iframe
                          srcDoc={`
                            <!DOCTYPE html>
                            <html>
                              <head>
                                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                                <style>
                                  body { margin: 0; padding: 0; overflow: hidden; }
                                  * { pointer-events: none; }
                                </style>
                              </head>
                              <body>
                                ${section.html}
                              </body>
                            </html>
                          `}
                          className="w-full h-full scale-[0.25] origin-top-left pointer-events-none"
                          style={{ width: '400%', height: '400%' }}
                          sandbox="allow-same-origin"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/20">
                          <span className="text-xs font-medium text-white">#{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Section Info */}
                      <div className="p-3">
                        <div className="flex items-start gap-3 mb-3">
                          <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{section.name}</p>
                            <p className="text-xs text-white/40 mt-0.5">Drag to reorder</p>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDuplicateSection(section.id, index)}
                            className="flex-1 px-2 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-all text-xs font-medium flex items-center justify-center gap-1"
                            title="Duplicate"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                          </button>
                          <button
                            onClick={() => handleDeleteSection(section.id, index)}
                            className="flex-1 px-2 py-1.5 rounded-md bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/30 transition-all text-xs font-medium text-red-400 flex items-center justify-center gap-1"
                            title="Delete"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Available Sections */}
              <div>
                <h3 className="text-xs font-medium text-white/60 mb-3 uppercase tracking-wider">Insert from All Pages</h3>
                <div className="space-y-4">
                  {TEMPLATE_PAGES.map(page => {
                    const pageSections = sections.filter(s => s.page === page.id);
                    if (pageSections.length === 0) return null;
                    
                    return (
                      <div key={page.id} className="mb-4">
                        <p className="text-xs text-white/40 mb-2 font-medium">{page.name}</p>
                        <div className="space-y-2">
                          {pageSections.map((section, idx) => (
                            <div
                              key={`${section.id}-${idx}`}
                              className="group rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all overflow-hidden"
                            >
                              {/* Preview Thumbnail */}
                              <div className="relative aspect-video bg-white border-b border-white/10 overflow-hidden">
                                <iframe
                                  srcDoc={`
                                    <!DOCTYPE html>
                                    <html>
                                      <head>
                                        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                                        <style>
                                          body { margin: 0; padding: 0; overflow: hidden; }
                                          * { pointer-events: none; }
                                        </style>
                                      </head>
                                      <body>
                                        ${section.html}
                                      </body>
                                    </html>
                                  `}
                                  className="w-full h-full scale-[0.25] origin-top-left pointer-events-none"
                                  style={{ width: '400%', height: '400%' }}
                                  sandbox="allow-same-origin"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                              </div>
                              
                              {/* Section Info */}
                              <div className="p-3">
                                <div className="flex items-start gap-2 mb-2">
                                  <svg className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                  </svg>
                                  <p className="text-xs text-white/70 flex-1">{section.name}</p>
                                </div>
                                <button
                                  onClick={() => handleInsertSection(section.html, sections.filter(s => s.page === currentPage.id).length)}
                                  className="w-full px-2 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-xs font-medium flex items-center justify-center gap-1"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                  Insert to Current Page
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-medium text-white/40 mb-3">Tips</div>
                <ul className="text-xs text-white/30 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Drag sections to reorder them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Insert sections from any page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Duplicate or delete sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Changes save automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Left Sidebar - Edit Panel */}
        {selectedElement && (
          <div className="w-80 border-r border-white/10 bg-black/40 backdrop-blur-xl overflow-y-auto custom-scrollbar flex-shrink-0">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-semibold text-white mb-1">Edit Element</h2>
                  <p className="text-xs text-white/40 capitalize">{selectedElement.type}</p>
                </div>
                <button
                  onClick={() => setSelectedElement(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4">
                {selectedElement.type === 'image' ? (
                  <>
                    {/* Image Preview */}
                    <div>
                      <label className="text-xs font-medium text-white/60 block mb-2">Current Image</label>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10">
                        <img 
                          src={editSrc} 
                          alt={editAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Upload Button */}
                    <div>
                      <label className="text-xs font-medium text-white/60 block mb-2">Upload New Image</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Choose Image
                      </button>
                      <p className="text-xs text-white/40 mt-2">Max 5MB • JPG, PNG, GIF, WebP</p>
                    </div>

                    {/* Alt Text */}
                    <div>
                      <label className="text-xs font-medium text-white/60 block mb-2">Alt Text</label>
                      <input
                        type="text"
                        value={editAlt}
                        onChange={(e) => setEditAlt(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white text-sm transition-all"
                        placeholder="Describe the image..."
                      />
                      <p className="text-xs text-white/40 mt-2">Improves accessibility and SEO</p>
                    </div>

                    {/* Image URL (optional) */}
                    <div>
                      <label className="text-xs font-medium text-white/60 block mb-2">Or paste image URL</label>
                      <input
                        type="text"
                        value={editSrc}
                        onChange={(e) => setEditSrc(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white text-sm transition-all"
                        placeholder="https://..."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-xs font-medium text-white/60 block mb-2">
                        {selectedElement.isGradient ? 'Gradient Text' : 'Content'}
                      </label>
                      {selectedElement.type === 'text' ? (
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          rows={6}
                          className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white text-sm resize-none transition-all"
                          placeholder="Enter your text..."
                        />
                      ) : (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white text-sm transition-all"
                          placeholder="Enter your text..."
                        />
                      )}
                    </div>

                    {(selectedElement.type === 'link' || selectedElement.type === 'button') && (
                      <div>
                        <label className="text-xs font-medium text-white/60 block mb-2">Link URL</label>
                        <input
                          type="text"
                          value={editHref}
                          onChange={(e) => setEditHref(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white text-sm transition-all"
                          placeholder="/page or https://..."
                        />
                      </div>
                    )}
                  </>
                )}

                <button
                  onClick={handleUpdateContent}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all text-sm"
                >
                  Update
                </button>
              </div>

              {/* Tips */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-medium text-white/40 mb-3">Tips</div>
                <ul className="text-xs text-white/30 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Click any text or image to edit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>Upload images or paste URLs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>All changes save automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Right Side - Template Preview */}
        <div className="flex-1 overflow-hidden bg-zinc-950">
          <div className="h-full flex flex-col items-center justify-center p-6">
            {/* Preview Frame with Device Sizing */}
            <div 
              className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-out"
              style={{
                width: getDeviceWidth(),
                height: device === 'desktop' ? 'calc(100% - 20px)' : '95%',
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
        </div>
      </div>

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 animate-scale-in">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Ready to publish?</h3>
              <p className="text-sm text-white/50">Create a free account to make your website live</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'Free custom domain',
                'Free SSL & hosting',
                'Your edits preserved',
                'No credit card needed'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-white/70">
                  <svg className="w-4 h-4 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPublishModal(false)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm"
              >
                Continue Editing
              </button>
              <button
                onClick={() => router.push('/signup?redirect=/studio/editor')}
                className="flex-1 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-white/90 transition-all font-medium text-sm"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}
