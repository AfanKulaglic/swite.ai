'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedSpider from '@/components/ui/AnimatedSpider';

type SpiderState = 'idle' | 'listening' | 'thinking' | 'building' | 'celebrating';

export default function StudioPage() {
  const router = useRouter();
  const [step, setStep] = useState<'chat' | 'template'>('chat');
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: "Hello. I'm here to help you build your website. What type of site are you looking to create?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [spiderState, setSpiderState] = useState<SpiderState>('idle');
  const [spiderMessage, setSpiderMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    
    // Spider thinking state
    setSpiderState('thinking');
    setSpiderMessage('Analyzing your requirements...');
    setIsTyping(true);

    // After 1 second, switch to building
    setTimeout(() => {
      setSpiderState('building');
      setSpiderMessage('Weaving your website...');
    }, 1000);

    setTimeout(() => {
      const responses = [
        "I've analyzed your requirements and prepared a professional template. Let me show you what I've created.",
        "Based on your description, I've selected an optimal template for your needs.",
        "I've prepared a template that aligns with your objectives. Review it below.",
        "Your template is ready. I've configured it according to your specifications."
      ];
      
      const response = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages([...newMessages, { role: 'assistant', content: response }]);
      setIsTyping(false);
      
      // Spider celebrating
      setSpiderState('celebrating');
      setSpiderMessage('Your website is ready!');
      
      setTimeout(() => {
        setStep('template');
        setSpiderState('idle');
        setSpiderMessage('');
      }, 1200);
    }, 2500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Update spider state when user is typing
  useEffect(() => {
    if (userInput.trim() && spiderState === 'idle') {
      setSpiderState('listening');
      setSpiderMessage('Listening...');
    } else if (!userInput.trim() && spiderState === 'listening' && !isTyping) {
      setSpiderState('idle');
      setSpiderMessage('');
    }
  }, [userInput, spiderState, isTyping]);

  const handleSelectTemplate = () => {
    router.push('/studio/editor');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Spider Web Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] spider-web-bg z-0"></div>
      
      {/* Subtle Grid Background */}
      {/* Single Large Spider Web Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(50%, 50%)">
            {/* Radial lines */}
            <line x1="0" y1="0" x2="0" y2="-800" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="565" y2="-565" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="800" y2="0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="565" y2="565" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="800" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-565" y2="565" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-800" y2="0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-565" y2="-565" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="400" y2="-693" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="693" y2="-400" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="693" y2="400" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="400" y2="693" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-400" y2="693" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-693" y2="400" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-693" y2="-400" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            <line x1="0" y1="0" x2="-400" y2="-693" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            
            {/* Circular rings */}
            <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="240" fill="none" stroke="rgba(255, 255, 255, 0.26)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="320" fill="none" stroke="rgba(255, 255, 255, 0.24)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="400" fill="none" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="500" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="600" fill="none" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="700" fill="none" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white/80 hover:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* Removed gradient accent for pure black/white */}

      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        {step === 'chat' && (
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="mb-16 opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">AI Studio</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Build your website
              </h1>
              <p className="text-xl text-white/50 max-w-2xl">
                Describe your project and I'll prepare a professional template for you to customize.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden opacity-0 animate-fade-in-up delay-200">
              {/* Messages */}
              <div className="h-[420px] overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-4 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${
                        message.role === 'user' 
                          ? 'w-10 h-10 rounded-full bg-white/10 flex items-center justify-center' 
                          : ''
                      }`}>
                        {message.role === 'user' ? (
                          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        ) : (
                          <AnimatedSpider state={spiderState} className="w-10 h-10" />
                        )}
                      </div>
                      {/* Message */}
                      <div className={`${
                        message.role === 'user'
                          ? 'bg-white/5 text-white'
                          : 'text-white/80'
                      } px-5 py-3.5 rounded-xl`}>
                        <p className="text-[15px] leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-4 max-w-[85%]">
                      <div className="flex-shrink-0">
                        <AnimatedSpider state={spiderState} className="w-10 h-10" />
                      </div>
                      <div className="px-5 py-3.5 rounded-xl">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-white/10 p-6 bg-white/[0.01]">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your website..."
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 outline-none text-white placeholder:text-white/30 transition-all text-[15px]"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isTyping || !userInput.trim()}
                    className="px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-[15px]"
                  >
                    Send
                  </button>
                </div>
                
                {/* Quick Prompts */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Corporate website',
                    'Portfolio',
                    'E-commerce',
                    'SaaS landing page'
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => setUserInput(prompt)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/20 transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/40">
                No account required to start building • Sign up only when ready to publish
              </p>
            </div>
          </div>
        )}

        {step === 'template' && (
          <div className="h-screen flex items-center justify-center px-6 py-8">
            <div className="max-w-6xl mx-auto w-full">
              {/* Header - Beautiful gradient text */}
              <div className="mb-8 text-center opacity-0 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                  <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-wider">Template Ready</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200">
                  Your Perfect Template
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  AI-crafted template ready to launch. Click to customize and make it yours.
                </p>
              </div>

              {/* Template Card - Beautiful with glow effects */}
              <div className="opacity-0 animate-fade-in-up delay-200">
                <div
                  className="group cursor-pointer relative"
                  onClick={handleSelectTemplate}
                >
                  {/* Glow effect behind card */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl z-30">
                    {/* Preview with overlay gradient */}
                    <div className="aspect-[16/8] bg-black relative overflow-hidden z-30">
                      <iframe
                        src="/templates/websphere/index.html"
                        className="w-full h-full pointer-events-none scale-[0.5] origin-top-left relative z-30"
                        style={{ width: '200%', height: '200%' }}
                        title="Template Preview"
                      />
                      
                      {/* Gradient overlay on preview */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Hover overlay with beautiful animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-pink-500/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="text-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <div className="text-white font-bold text-xl mb-2">Open Editor</div>
                          <div className="text-white/80 text-sm">Start customizing your template</div>
                        </div>
                      </div>
                    </div>

                    {/* Info section with gradient accents */}
                    <div className="p-6 border-t border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
                      <div className="flex items-start justify-between mb-5">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            WebSphere Hosting
                            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300">Pro</span>
                          </h3>
                          <p className="text-sm text-white/60">Professional cloud hosting & infrastructure website</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                          <span className="text-xs font-bold text-green-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            Ready
                          </span>
                        </div>
                      </div>
                      
                      {/* Features with icons and gradients */}
                      <div className="grid grid-cols-5 gap-2 mb-5">
                        {[
                          { icon: '🏠', label: 'Hero', color: 'from-blue-500/10 to-blue-600/10 border-blue-500/20' },
                          { icon: '⚡', label: 'Features', color: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20' },
                          { icon: '💰', label: 'Pricing', color: 'from-green-500/10 to-emerald-500/10 border-green-500/20' },
                          { icon: '💬', label: 'Reviews', color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20' },
                          { icon: '📧', label: 'Contact', color: 'from-red-500/10 to-rose-500/10 border-red-500/20' }
                        ].map((item) => (
                          <div key={item.label} className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg bg-gradient-to-br ${item.color} border backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                            <span className="text-base">{item.icon}</span>
                            <span className="text-xs text-white/70 font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button with gradient */}
                      <button className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm flex items-center justify-center gap-2 group/btn hover:scale-[1.02]">
                        <span>Open in Editor</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Button - Elegant */}
              <div className="mt-6 flex justify-center opacity-0 animate-fade-in-up delay-300">
                <button
                  onClick={() => setStep('chat')}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all inline-flex items-center gap-2 text-sm text-white/60 hover:text-white backdrop-blur-sm group/back"
                >
                  <svg className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

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
