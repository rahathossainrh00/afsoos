const plans = [
  {
    name: "Starter",
    tagline: "Perfect for individuals just getting started",
    price: 0,
    period: "mo",
    features: [
      "5 digital tools",
      "Basic templates",
      "Community support",
      "1GB cloud storage",
    ],
    cta: "Get Started Free",
    variant: "light",
  },
  {
    name: "Pro",
    tagline: "Best for professionals and freelancers",
    price: 29,
    period: "mo",
    features: [
      "All 200+ digital tools",
      "Premium templates",
      "Priority support",
      "50GB cloud storage",
    ],
    cta: "Start Pro Trial",
    variant: "dark",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    tagline: "Scaled solutions for growing teams",
    price: 99,
    period: "mo",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "Unlimited cloud storage",
    ],
    cta: "Contact Sales",
    variant: "light",
  },
];

const Pricing = () => {
  return (
    <section className="py-[120px] bg-white" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#101727] text-center leading-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base text-[#627382] text-center mt-4 max-w-[520px] mx-auto leading-relaxed">
          Choose the plan that works best for you. Upgrade or downgrade anytime with no hidden fees.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-[30px] mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-full md:w-[380px] rounded-[16px] p-8 flex flex-col gap-6 relative ${
                plan.variant === "dark"
                  ? "text-white shadow-2xl scale-105"
                  : "bg-[#f9fafc] border-2 border-[#f2f2f2]"
              }`}
              style={plan.variant === "dark" ? { background: 'linear-gradient(135deg, #4F39F6, #9514FA)' } : {}}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fef3c6] text-[#bb4d00] text-sm font-medium px-4 py-1.5 shadow-sm">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name & Tagline */}
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    plan.variant === "dark" ? "text-white" : "text-[#101727]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-base mt-1 ${
                    plan.variant === "dark"
                      ? "text-white opacity-80"
                      : "text-[#627382]"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-[40px] font-extrabold ${
                    plan.variant === "dark" ? "text-white" : "text-[#101727]"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-base ${
                    plan.variant === "dark"
                      ? "text-white opacity-80"
                      : "text-[#627382]"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px ${
                  plan.variant === "dark" ? "bg-white opacity-20" : "bg-[#f2f2f2]"
                }`}
              ></div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-base font-medium ${
                      plan.variant === "dark" ? "text-white opacity-90" : "text-[#627382]"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        plan.variant === "dark" ? "text-green-300" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`rounded-full h-[52px] w-full font-bold text-base transition-all duration-200 cursor-pointer ${
                  plan.variant === "dark"
                    ? "bg-white text-violet-700 hover:bg-violet-50 shadow-md"
                    : "text-white hover:opacity-90 shadow-md hover:shadow-lg"
                }`}
                style={plan.variant === "dark" ? {} : { background: 'linear-gradient(135deg, #4F39F6, #9514FA)' }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
