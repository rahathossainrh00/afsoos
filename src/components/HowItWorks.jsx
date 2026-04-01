const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    description:
      "Sign up in seconds with your email. No credit card required to get started with our free plan.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Choose Products",
    description:
      "Browse our curated collection of premium digital tools and select the ones that fit your workflow.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Start Creating",
    description:
      "Instantly access your tools and start boosting your productivity and creating amazing work.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-[120px] bg-[#f9fafc]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#101727] text-center leading-tight">
          How It Works
        </h2>
        <p className="text-base text-[#627382] text-center mt-4 max-w-[520px] mx-auto leading-relaxed">
          Get up and running in minutes. Our platform is designed to be simple, fast, and powerful.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[16px] p-8 flex flex-col items-center gap-5 border-2 border-[#f1f1f1] bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Badge */}
              <div className="w-10 h-10 rounded-full bg-violet-600 text-white font-bold text-sm flex items-center justify-center self-start">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-violet-600 opacity-10"></div>
                <span className="text-4xl z-10">{step.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#101727] text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#627382] text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
