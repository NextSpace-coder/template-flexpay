const BuildingBlocks = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-yellow-400 text-sm font-medium">Frontend Developer</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Building blocks for recurring billing
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Incentivize filling open shifts, reduce last-minute callouts, and build optimized 
              schedules for individual caregivers.
            </p>
            
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Content - Chart */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Money Flow</h3>
                <div className="h-px bg-gray-200"></div>
              </div>
              
              {/* Chart Area */}
              <div className="relative h-64 flex items-end justify-center">
                {/* Simple line chart representation */}
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Chart line */}
                  <path
                    d="M 20 160 Q 80 140 120 100 T 200 80 Q 240 70 280 60"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="20" cy="160" r="4" fill="#8b5cf6" />
                  <circle cx="80" cy="120" r="4" fill="#8b5cf6" />
                  <circle cx="140" cy="90" r="4" fill="#8b5cf6" />
                  <circle cx="200" cy="80" r="4" fill="#8b5cf6" />
                  <circle cx="280" cy="60" r="4" fill="#8b5cf6" />
                </svg>
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>$8k</span>
                  <span>$6k</span>
                  <span>$4k</span>
                  <span>$2k</span>
                  <span>$0</span>
                </div>
                
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-8 right-8 flex justify-between text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingBlocks; 