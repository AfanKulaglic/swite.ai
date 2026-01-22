'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedSpider from '@/components/ui/AnimatedSpider';

type SpiderState = 'idle' | 'listening' | 'thinking' | 'building' | 'celebrating';

export default function StudioPage() {
  const router = useRouter();
  const [step, setStep] = useState<'chat' | 'template'>('chat');
  const [userInput, setUserInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState("Hello. I'm here to help you build your website. What type of site are you looking to create?");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [spiderState, setSpiderState] = useState<SpiderState>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Show user's answer with fade-in animation
    setCurrentAnswer(userInput);
    setShowAnswer(true);
    const savedInput = userInput;
    setUserInput('');
    
    setSpiderState('thinking');
    setIsTyping(true);

    setTimeout(() => {
      setSpiderState('building');
    }, 1000);

    setTimeout(() => {
      const responses = [
        "I've analyzed your requirements and prepared a professional template. Let me show you what I've created.",
        "Based on your description, I've selected an optimal template for your needs.",
        "I've prepared a template that aligns with your objectives. Review it below.",
        "Your template is ready. I've configured it according to your specifications."
      ];
      
      const response = responses[Math.floor(Math.random() * responses.length)];
      
      // Fade out old conversation
      setShowAnswer(false);
      
      setTimeout(() => {
        // Update to new question after fade out
        setCurrentQuestion(response);
        setCurrentAnswer("");
        setIsTyping(false);
        setSpiderState('celebrating');
        
        setTimeout(() => {
          setStep('template');
          setSpiderState('idle');
        }, 1200);
      }, 500);
    }, 2500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (userInput.trim() && spiderState === 'idle') {
      setSpiderState('listening');
    } else if (!userInput.trim() && spiderState === 'listening' && !isTyping) {
      setSpiderState('idle');
    }
  }, [userInput, spiderState, isTyping]);

  const handleSelectTemplate = () => {
    router.push('/studio/editor');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
      
      {/* Animated gradient orbs with pink/purple theme */}
      <div className="fixed top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-pink-500/20 via-rose-500/8 to-transparent rounded-full blur-3xl animate-float-orb" />
      <div className="fixed bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500/18 via-purple-500/6 to-transparent rounded-full blur-3xl animate-float-orb-2" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/15 to-pink-500/8 rounded-full blur-3xl animate-float-orb-3" />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 text-sm font-light group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6 py-8">
        {step === 'chat' && (
          <div className="w-full max-w-6xl h-full flex flex-col">
            {/* Header - Compact */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-[#4169E1]/20 bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5 animate-fade-in">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">AI Studio</span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-tight leading-[0.95] mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="block text-white/40">Build websites</span>
                <span className="block font-medium text-white">in seconds</span>
              </h1>
              <p className="text-base text-white/40 max-w-xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Describe your vision in natural language.
              </p>
            </div>

            {/* Single Conversation Display - Compact */}
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-full max-w-4xl">
                {/* AI Question - Morphs position when answer appears */}
                <div 
                  className={`flex gap-4 items-start transition-all duration-700 ease-out ${
                    showAnswer ? 'opacity-60 scale-95 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'
                  }`}
                  key={`question-${currentQuestion}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 rounded-full blur opacity-60 transition-opacity duration-700" />
                    <AnimatedSpider state={spiderState} className="relative w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">AI Assistant</div>
                    <p className="text-lg text-white/80 font-light leading-relaxed transition-all duration-700">
                      {currentQuestion}
                    </p>
                  </div>
                </div>

                {/* User Answer - Slides up and scales in */}
                <div className="relative h-0">
                  <div 
                    className={`absolute top-8 left-0 right-0 transition-all duration-700 ease-out ${
                      showAnswer 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
                    }`}
                    key={`answer-${currentAnswer}`}
                  >
                    {currentAnswer && (
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-[#4169E1]/10 to-[#6B46C1]/10 border border-[#4169E1]/20 flex items-center justify-center transition-all duration-700">
                          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">You</div>
                          <p className="text-lg text-white font-light leading-relaxed">{currentAnswer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Typing Indicator - Appears below */}
                {isTyping && (
                  <div 
                    className={`flex gap-4 items-start animate-fade-in transition-all duration-700 ${
                      showAnswer ? 'mt-24' : 'mt-8'
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4169E1]/20 to-[#6B46C1]/20 rounded-full blur opacity-60 animate-pulse" />
                      <AnimatedSpider state={spiderState} className="relative w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">AI Assistant</div>
                      <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded-full animate-bounce" />
                        <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                        <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Section - Compact */}
            <div className="border-t border-[#4169E1]/10 pt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="max-w-3xl mx-auto">
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your website..."
                    className="flex-1 px-5 py-3 bg-white/5 border border-white/10 focus:border-[#4169E1]/40 focus:bg-white/[0.07] outline-none text-white placeholder:text-white/30 transition-all duration-300 text-sm font-light"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isTyping || !userInput.trim()}
                    className="px-8 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Generate
                  </button>
                </div>
                
                {/* Quick Prompts - Compact */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    'Corporate website',
                    'Portfolio',
                    'E-commerce store',
                    'SaaS landing page'
                  ].map((prompt, index) => (
                    <button
                      key={prompt}
                      onClick={() => setUserInput(prompt)}
                      className="px-3 py-1.5 border border-[#4169E1]/20 text-[11px] text-white/40 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 font-light tracking-wide animate-fade-in"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Note - Compact */}
            <div className="mt-4 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <p className="text-xs text-white/20 font-light tracking-wide">
                No account required • Sign up only when ready to publish
              </p>
            </div>
          </div>
        )}

        {step === 'template' && (
          <div className="w-full max-w-7xl h-full flex flex-col">
            {/* Header - Compact */}
            <div className="text-center mb-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-[#4169E1]/20 bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Template Ready</span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-tight leading-[0.95] mb-3">
                <span className="block text-white/40">Your perfect</span>
                <span className="block font-medium text-white">template</span>
              </h1>
              <p className="text-sm text-white/40 font-light">
                Production-ready. Fully customizable. Deploy in seconds.
              </p>
            </div>

            {/* Template Card - Compact, fits on screen */}
            <div className="flex-1 min-h-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div
                className="group cursor-pointer relative h-full"
                onClick={handleSelectTemplate}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4169E1]/10 to-[#6B46C1]/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative h-full flex flex-col overflow-hidden border border-white/10 group-hover:border-[#4169E1]/40 transition-all duration-500 bg-white/[0.02] backdrop-blur-xl">
                  {/* Preview - Takes available space */}
                  <div className="flex-1 min-h-0 bg-black relative overflow-hidden">
                    <iframe
                      src="/templates/websphere/index.html"
                      className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                      style={{ width: '200%', height: '200%' }}
                      title="Template Preview"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover overlay - Minimal */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/90 to-[#6B46C1]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center transform scale-95 group-hover:scale-100 transition-transform duration-500">
                        <div className="w-16 h-16 border border-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        <div className="text-white font-medium text-xl mb-1">Open Editor</div>
                        <div className="text-white/60 text-xs font-light">Start customizing</div>
                      </div>
                    </div>
                  </div>

                  {/* Info - Compact */}
                  <div className="p-6 border-t border-white/10 flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-white mb-1">WebSphere Hosting</h3>
                      <p className="text-xs text-white/40 font-light">Professional cloud hosting template</p>
                    </div>
                    
                    {/* Features - Inline */}
                    <div className="flex gap-2 items-center">
                      {['Hero', 'Features', 'Pricing', 'Reviews', 'Contact'].map((item, index) => (
                        <div 
                          key={item} 
                          className="px-2 py-1 border border-white/10 text-[10px] text-white/40 font-light tracking-wide animate-fade-in"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* CTA - Compact */}
                    <button className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white font-medium hover:opacity-90 transition-all duration-300 text-xs tracking-wide flex items-center gap-2 group/btn whitespace-nowrap">
                      <span>Open Editor</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button - Minimal */}
            <div className="mt-4 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setStep('chat')}
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 text-sm font-light group/back"
              >
                <svg className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
