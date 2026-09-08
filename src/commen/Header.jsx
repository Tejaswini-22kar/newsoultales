import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "The Valley",
    "The Six Days",
    "What You Take Back",
    "What You Take Back",
    "What This Is Not",
  ];

  return (
   <header className="fixed top-0 left-0 z-50 w-full bg-black/20 px-4 py-5 backdrop-blur-md sm:px-8 md:px-12 lg:absolute lg:bg-transparent lg:px-20 lg:py-4 lg:backdrop-blur-none">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 lg:gap-10">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="logo.png"
            alt="Logo"
            className="w-32 sm:w-40 lg:w-52"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center rounded-full border border-white/80 px-4 py-3 lg:flex lg:px-7 lg:py-5">
          {navItems.map((item, index) => {
            const isFirst = index === 0;

            const linkClass = isFirst
              ? "whitespace-nowrap px-3 font-[inter] text-sm font-bold text-white transition-opacity hover:opacity-70 xl:px-4 xl:text-base"
              : "whitespace-nowrap px-3 font-[Inter] text-sm font-light text-white transition-opacity hover:opacity-70 xl:px-4 xl:text-base";

            return (
              <a
                key={item + "-" + index}
                href="#"
                className={linkClass}
              >
                {item}
              </a>
            );
          })}

          {/* Founder */}
          <a
            href="#"
            className="ml-2 whitespace-nowrap px-3 font-[Inter] text-sm font-normal text-white transition-opacity hover:opacity-70 xl:ml-3 xl:px-4 xl:text-base"
          >
            Preeti - Founder
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={
              "block h-0.5 w-7 bg-white transition-transform duration-300 " +
              (menuOpen ? "translate-y-2 rotate-45" : "")
            }
          />

          <span
            className={
              "block h-0.5 w-7 bg-white transition-opacity duration-300 " +
              (menuOpen ? "opacity-0" : "opacity-100")
            }
          />

          <span
            className={
              "block h-0.5 w-7 bg-white transition-transform duration-300 " +
              (menuOpen ? "-translate-y-2 -rotate-45" : "")
            }
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden " +
          (menuOpen
            ? "mt-6 max-h-[500px] opacity-100"
            : "max-h-0 opacity-0")
        }
      >
        <nav className="flex flex-col items-start gap-1 rounded-2xl border border-white/80 bg-black/30 px-6 py-6 backdrop-blur-sm">
          {navItems.map((item, index) => {
            const isFirst = index === 0;

            const linkClass = isFirst
              ? "w-full py-2 font-[Poppins] text-base font-bold text-white transition-opacity hover:opacity-70"
              : "w-full py-2 font-[Inter] text-base font-light text-white transition-opacity hover:opacity-70";

            return (
              <a
                key={item + "-mobile-" + index}
                href="#"
                className={linkClass}
              >
                {item}
              </a>
            );
          })}

          {/* Founder */}
          <a
            href="#"
            className="w-full border-t border-white/20 py-3 pt-4 font-[Inter] text-base font-normal text-white transition-opacity hover:opacity-70"
          >
            Preeti - Founder
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;