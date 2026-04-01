const NavBar = ({ carts, onCartClick }) => {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav className="bg-white border-b border-[#f2f2f2] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto h-[92px] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-violet-600 tracking-tight select-none">
          DigiTools
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-semibold text-base text-[#101727] opacity-90 hover:text-violet-600 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-violet-50 transition-colors duration-200 cursor-pointer"
            aria-label="View cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#101727]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {carts.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {carts.length}
              </span>
            )}
          </button>

          {/* Get Started */}
          <button className="rounded-full px-5 py-3 bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition-colors duration-200 shadow-sm cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
