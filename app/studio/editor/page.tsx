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
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [currentPage, setCurrentPage] = useState(TEMPLATE_PAGES[0]);

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
    <div className="h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Minimal Top Bar */}
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
                if (page) setCurrentPage(page);
              }}
              className="px-4 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-xs font-light text-white bg-black appearance-none cursor-pointer outline-none"
            >
              {TEMPLATE_PAGES.map(page => (
                <option key={page.id} value={page.id} className="bg-black">
                  {page.name}
                </option>
              ))}
            </select>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all text-xs font-light tracking-wide"
            >
              Save Draft
            </button>
            <button
              className="px-6 py-2 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-xs font-medium tracking-wide hover:opacity-90 transition-all duration-300"
            >
              Publish
            </button>
          </div>
        </div>
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

      {/* Minimal Footer Info */}
      <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-2">
        <div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-wider">
          <span>Click any element to edit</span>
          <span>Changes save automatically</span>
        </div>
      </div>
    </div>
  );
}
