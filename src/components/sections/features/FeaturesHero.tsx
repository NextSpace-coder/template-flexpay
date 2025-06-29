const FeaturesHero = () => {
  return (
    <section 
      className="text-white py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(58, 77, 58, 0.25) 0%,
            rgba(74, 93, 58, 0.20) 20%,
            rgba(107, 125, 74, 0.18) 35%,
            rgba(139, 157, 106, 0.15) 50%,
            rgba(171, 184, 138, 0.18) 65%,
            rgba(203, 184, 186, 0.22) 80%,
            rgba(232, 200, 216, 0.28) 90%,
            rgba(240, 216, 232, 0.32) 100%
          ),
          linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              Multiple Card Management
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Recurring billing for your{" "}
              <span className="text-yellow-400">businesses</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              Simple recurring billing to usage-based billing and sales-negotiated contracts. 
              Collect and retain more revenue, automate revenue management workflows, and accept payments globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Mobile App Mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Mobile Interface */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">F</span>
                    </div>
                    <span className="text-gray-800 font-semibold">FlexPay</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">July Wallet</div>
                    <div className="text-2xl font-bold text-gray-800">$56,476.00 <span className="text-sm">USD</span></div>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="text-sm text-gray-500 mb-1">Balance</div>
                  <div className="text-xl font-bold text-gray-800">$56,476.00</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                    Send Money
                  </button>
                  
                  {/* Transaction Cards */}
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm opacity-90">Development</div>
                          <div className="font-semibold">**** **** **** 2810</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">$2,500.00</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm opacity-90">Development</div>
                          <div className="font-semibold">**** **** **** 2810</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">$1,200.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero; 