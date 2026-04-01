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
              <img src={playImg} alt="Play" className="w-5 h-5" />
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
          <img
            src={bannerImg}
            alt="DigiTools dashboard"
            className="w-[500px] h-[590px] rounded-[8px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
