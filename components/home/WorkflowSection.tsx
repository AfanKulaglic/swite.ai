export default function WorkflowSection() {
  return (
    <div className="w-full px-6 relative">
      {/* Spider Web Accent - Top Right */}
      <div className="absolute top-10 right-20 w-24 h-24 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="70" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-xl mb-6">
            <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              PROVEN DEPLOYMENT PROCESS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="block">Production-Ready</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              in Under 15 Minutes
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Our enterprise workflow has been refined through 2 million+ deployments. 
            From concept to live site with zero DevOps overhead. Trusted by teams at Google, Microsoft, and Amazon.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 via-emerald-500/50 to-transparent opacity-0 animate-fade-in delay-500" />

          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right opacity-0 animate-slide-in-left delay-600">
                <div className="inline-block md:block">
                  <div className="flex md:justify-end items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold">
                      Step 01
                    </span>
                    <h3 className="text-2xl font-black">Describe Your Vision</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Simply tell us what you want to build. Our AI understands natural language and interprets your requirements with human-like comprehension.
                  </p>
                  <div className="flex md:justify-end flex-wrap gap-2">
                    {["Natural Language", "Context Aware", "Smart Suggestions"].map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative opacity-0 animate-slide-in-right delay-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/40 mb-2">Example Input:</div>
                      <div className="text-sm text-white/80 italic">"Create a modern portfolio site for a photographer with a dark theme and gallery showcase"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-black opacity-0 animate-scale-in delay-800" />
            </div>

            {/* Step 2 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:col-start-2 opacity-0 animate-slide-in-right delay-900">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold">
                    Step 02
                  </span>
                  <h3 className="text-2xl font-black">AI Generates</h3>
                </div>
                <p className="text-white/60 leading-relaxed mb-4">
                  Watch in real-time as our neural networks create a complete professional website with optimized layouts, color schemes, and content.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Neural Design", "Auto-Layout", "Smart Content"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:col-start-1 md:row-start-1 relative opacity-0 animate-slide-in-left delay-[1000ms]">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white/60">Analyzing requirements...</span>
                      <span className="ml-auto text-green-400 font-bold">100%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white/60">Generating layout...</span>
                      <span className="ml-auto text-green-400 font-bold">100%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                      <span className="text-white/60">Creating content...</span>
                      <span className="ml-auto text-yellow-400 font-bold">87%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black opacity-0 animate-scale-in delay-[1100ms]" />
            </div>

            {/* Step 3 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right opacity-0 animate-slide-in-left delay-[1200ms]">
                <div className="inline-block md:block">
                  <div className="flex md:justify-end items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold">
                      Step 03
                    </span>
                    <h3 className="text-2xl font-black">Customize Everything</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Fine-tune every detail with our intuitive visual editor. Drag, drop, and see changes instantly with real-time preview.
                  </p>
                  <div className="flex md:justify-end flex-wrap gap-2">
                    {["Visual Editor", "Live Preview", "Undo/Redo"].map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative opacity-0 animate-slide-in-right delay-[1300ms]">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl blur-xl" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-4 border-black opacity-0 animate-scale-in delay-[1400ms]" />
            </div>

            {/* Step 4 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:col-start-2 opacity-0 animate-slide-in-right delay-[1500ms]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm font-bold">
                    Step 04
                  </span>
                  <h3 className="text-2xl font-black">Deploy Instantly</h3>
                </div>
                <p className="text-white/60 leading-relaxed mb-4">
                  Launch your site on our global edge network with one click. Automatic SSL, CDN, and lightning-fast performance included.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Global CDN", "Auto SSL", "99.99% Uptime"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:col-start-1 md:row-start-1 relative opacity-0 animate-slide-in-left delay-[1600ms]">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold">Deployment Status</span>
                    <span className="px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Load Time:</span>
                      <span className="text-green-400 font-bold">0.3s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">SSL Status:</span>
                      <span className="text-green-400 font-bold">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">CDN Nodes:</span>
                      <span className="text-green-400 font-bold">200+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-4 border-black opacity-0 animate-scale-in delay-[1700ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
