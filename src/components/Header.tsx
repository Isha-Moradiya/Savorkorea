import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-czto1guskq";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f4e8ac]/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="flex items-center justify-between h-20 lg:h-[94px]">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
              <div className="relative size-[50px] lg:size-[78px]">
                <div className="absolute inset-[-32%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.307 78.4292">
                    <g>
                      <path d={svgPaths.p2f7be200} fill="#111111" stroke="#C59D5F" strokeWidth="0.463716" />
                      <path d={svgPaths.p3562eb00} fill="#111111" stroke="#C59D5F" strokeWidth="16.2301" />
                    </g>
                  </svg>
                </div>
              </div>
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15.49deg] skew-x-[-0.08deg]"
              >
                <p className="capitalize font-bold text-[#f9f4d3] text-xs lg:text-sm text-center whitespace-nowrap select-none">
                  SavorKorea
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-[55px]">
            {[
              { label: "Home", id: "home" },
              { label: "Menu", id: "menu" },
              { label: "Gallery", id: "gallery" },
              { label: "Catering", id: "catering" },
              { label: "About Us", id: "about" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="capitalize font-normal text-[#111] text-base hover:text-[#c59d5f] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c59d5f] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => {/* Mobile menu toggle */}}>
            <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
