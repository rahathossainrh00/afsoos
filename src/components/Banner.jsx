import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = ({ onExplore }) => {
  return (
    <section className="bg-white min-h-[760px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 py-[60px] flex items-center gap-[60px] w-full flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex">
            <span className="rounded-full bg-[#e1e7ff] text-violet-700 text-sm font-medium px-4 py-2 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              New: AI-Powered Tools Available
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
              className="rounded-full h-[52px] px-6 text-white font-bold text-base hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #4F39F6, #9514FA)' }}
            >
              Explore Products
            </button>
            <button className="rounded-full h-[52px] px-6 border-2 border-[#e2e8f0] font-bold text-base flex gap-2 items-center text-[#101727] hover:border-violet-600 hover:text-violet-600 transition-all duration-200 cursor-pointer">
              <img src={playImg} alt="Play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src={bannerImg}
            alt="DigiTools dashboard"
            className="w-[500px] h-[590px] rounded-[8px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
