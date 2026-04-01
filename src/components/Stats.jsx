const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-violet-600 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center items-center">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            <div className="flex flex-col items-center px-16">
              <span className="text-[60px] font-extrabold text-white leading-none">
                {stat.value}
              </span>
              <span className="text-2xl font-medium text-white opacity-80 mt-2">
                {stat.label}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className="w-px h-20 bg-white opacity-40"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
