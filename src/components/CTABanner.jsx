const CTABanner = ({ onExplore }) => {
  return (
    <section className="py-[120px]" style={{ background: 'linear-gradient(135deg, #4F39F6, #9514FA)' }}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-8">
        {/* Heading */}
        <h2 className="text-[40px] font-extrabold text-white text-center leading-tight max-w-[640px]">
          Ready to Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="text-base text-white opacity-90 text-center max-w-[500px] leading-relaxed">
          Join over 50,000 professionals who use DigiTools every day to supercharge their digital work.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button
            onClick={onExplore}
            className="w-[163px] h-[52px] rounded-full bg-white text-violet-700 font-semibold text-base hover:bg-violet-50 transition-colors duration-200 shadow-lg cursor-pointer"
          >
            Explore Products
          </button>
          <button className="w-[163px] h-[52px] rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200 cursor-pointer">
            View Pricing
          </button>
        </div>

        {/* Fine Print */}
        <p className="text-base text-white opacity-80 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
