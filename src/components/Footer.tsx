import svgPaths from "../../imports/svg-czto1guskq";

export function Footer() {
  return (
    <footer className="bg-[#111] py-12 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 xl:gap-[255px] items-start justify-center max-w-[1206px] mx-auto">
          {/* Addresses */}
          <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
            <h3 className="capitalize font-bold text-[#c59d5f] text-xl lg:text-[25px] leading-normal">
              Addresses
            </h3>
            <div className="space-y-4 lg:space-y-6 font-normal text-[#c59d5f] text-xs leading-relaxed">
              <p>
                Shop No-14-15, Aagam Emporio, Near Harley Davidson Showroom Udhna, Udhana - Magdalla Rd, Vesu, Surat, Gujarat 395007
              </p>
              <p>
                Shop No-14-15, Aagam Emporio, Near Harley Davidson Showroom Udhna, Udhana - Magdalla Rd, Vesu, Surat, Gujarat 395007
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-8">
            <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
              <div className="relative size-[80px] lg:size-[103px]">
                <div className="absolute inset-[-32%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 169">
                    <g>
                      <path d={svgPaths.p21f7c7f0} fill="#111111" />
                      <circle cx="84.5" cy="84.5" r="67" stroke="#C59D5F" strokeWidth="35" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15.45deg]">
                <p className="capitalize font-bold text-[#f9f4d3] text-xl lg:text-[30px] text-center whitespace-nowrap select-none">
                  SavorKorea
                </p>
              </div>
            </div>

            <p className="capitalize font-normal text-[#c59d5f] text-2xl lg:text-[37px] text-center leading-normal">
              SavorKorea
            </p>

            {/* Facebook Icon */}
            <div className="w-12 lg:w-[63px] h-5 lg:h-6">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.7407 23.9775">
                <g>
                  <path d={svgPaths.p1d355df0} fill="#C59D5F" />
                  <path d={svgPaths.p22291900} stroke="#C59D5F" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* Hours & Order Online */}
          <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
            {/* Hours */}
            <div className="space-y-4 lg:space-y-8">
              <h3 className="capitalize font-bold text-[#c59d5f] text-xl lg:text-[25px] leading-normal">
                Hours
              </h3>
              <div className="capitalize font-normal text-[#c59d5f] text-xs leading-relaxed">
                <p>mon-fri 7am-3am</p>
                <p>sat-sun 8am-2pm</p>
              </div>
            </div>

            {/* Order Online */}
            <div className="space-y-4 lg:space-y-8">
              <h3 className="capitalize font-bold text-[#c59d5f] text-xl lg:text-[25px] leading-normal">
                Order Online
              </h3>
              <a 
                href="tel:+916579876543" 
                className="capitalize font-normal text-[#c59d5f] text-xs leading-normal hover:text-[#d4ae70] transition-colors duration-300 block"
              >
                +91-657-987-654
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
