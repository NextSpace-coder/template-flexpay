const EndToEndSoftware = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Statistics */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Statistics</h3>
                <div className="text-sm text-gray-500">Year 2023</div>
              </div>
              
              {/* Donut Chart */}
              <div className="relative flex items-center justify-center mb-8">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="8"
                  />
                  
                  {/* Progress circles */}
                  {/* First segment - 45% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="8"
                    strokeDasharray="113 251"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  
                  {/* Second segment - 30% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="8"
                    strokeDasharray="75 251"
                    strokeDashoffset="-113"
                    strokeLinecap="round"
                  />
                  
                  {/* Third segment - 25% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="8"
                    strokeDasharray="63 251"
                    strokeDashoffset="-188"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Paid out</span>
                  </div>
                  <span className="text-gray-900 font-semibold">$78k</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Earned</span>
                  </div>
                  <span className="text-gray-900 font-semibold">$52k</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Pending</span>
                  </div>
                  <span className="text-gray-900 font-semibold">$43k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-cyan-400 text-sm font-medium">Web Developer</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                End-to-end billing software
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
        </div>
      </div>
    </section>
  );
};

export default EndToEndSoftware; 