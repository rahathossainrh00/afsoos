const Banner = ({ onExplore }) => {
  return (
    <section className="bg-white min-h-[760px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 py-[60px] flex items-center gap-[60px] w-full flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex">
            <span className="rounded-full bg-[#e1e7ff] text-violet-700 text-sm font-medium px-4 py-2">
              ✨ New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[64px] font-extrabold leading-[76px] text-[#101727]">
            Supercharge Your Digital Workflow
          </h1>

          {/* Body */}
          <p className="text-lg text-[#627382] leading-relaxed max-w-[520px]">
            Access the most powerful suite of digital tools. From AI writing to design, automation to analytics — everything you need to work smarter and faster.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={onExplore}
              className="rounded-full h-[52px] px-6 bg-violet-600 text-white font-bold text-base hover:bg-violet-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore Products
            </button>
            <button className="rounded-full h-[52px] px-6 border-2 border-[#e2e8f0] font-bold text-base flex gap-2 items-center text-[#101727] hover:border-violet-600 hover:text-violet-600 transition-all duration-200 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm text-[#627382] font-medium">4.9/5 rating</span>
            </div>
            <div className="w-px h-5 bg-[#e2e8f0]"></div>
            <span className="text-sm text-[#627382] font-medium">50K+ happy users</span>
            <div className="w-px h-5 bg-[#e2e8f0]"></div>
            <span className="text-sm text-[#627382] font-medium">No credit card required</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <div className="w-[480px] h-[560px] rounded-[20px] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 flex flex-col items-center justify-center gap-6 p-8">
              {/* Decorative floating cards */}
              <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <p className="text-white font-bold text-sm">AI Writing Pro</p>
                  <p className="text-white/70 text-xs">Just launched</p>
                </div>
              </div>
              <div className="absolute top-24 right-6 bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <p className="text-white font-bold text-sm">Automation</p>
                  <p className="text-white/70 text-xs">Save 10hrs/week</p>
                </div>
              </div>

              {/* Center dashboard mockup */}
              <div className="w-full bg-white/15 backdrop-blur-sm rounded-2xl p-5 mt-16">
                <p className="text-white/60 text-xs font-medium mb-3 uppercase tracking-wider">Your Toolkit Dashboard</p>
                {[
                  { icon: "✍️", name: "AI Writing", pct: 92 },
                  { icon: "🎨", name: "Design Pack", pct: 78 },
                  { icon: "⚙️", name: "Automation", pct: 65 },
                ].map((item) => (
                  <div key={item.name} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm font-medium flex items-center gap-1">
                        {item.icon} {item.name}
                      </span>
                      <span className="text-white/70 text-xs">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full">
                      <div
                        className="h-1.5 bg-white rounded-full"
                        style={{ width: `${item.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-white font-bold text-sm">Social Kit</p>
                  <p className="text-white/70 text-xs">Best Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
