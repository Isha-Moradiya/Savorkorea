import imgImage2 from "figma:asset/15353a432bd0883851d56590315b5ff94c172a5b.png";
import imgImage3 from "figma:asset/e20194601c9bce7d9dbbd4c3ab388daa36cadd86.png";
import imgImage4 from "figma:asset/742dd4b53623b70e4ad0cdbf000d3070d75c09ab.png";
import imgImage5 from "figma:asset/b88a27fa547cd3378b5008681ebfc13b2ee89b2e.png";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[#f4e8ac] min-h-screen overflow-hidden">
      {/* Animated Food Images Background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[1200px] max-h-[900px]">
            {/* Image 2 - Top Left */}
            <div 
              className="absolute top-[5%] lg:top-[10%] right-[60%] lg:right-[50%] w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] animate-float"
              style={{ 
                animationDelay: "0s",
                animationDuration: "6s"
              }}
            >
              <div className="relative w-full h-full rotate-[15deg] hover:rotate-[20deg] transition-transform duration-500 shadow-[0px_8px_15px_rgba(0,0,0,0.27)]">
                <img 
                  src={imgImage2} 
                  alt="Korean food" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Image 3 - Bottom Center */}
            <div 
              className="absolute bottom-[5%] lg:bottom-[10%] right-[35%] lg:right-[30%] w-[250px] lg:w-[400px] h-[180px] lg:h-[280px] animate-float"
              style={{ 
                animationDelay: "1s",
                animationDuration: "7s"
              }}
            >
              <div className="relative w-full h-full -rotate-[5deg] hover:rotate-0 transition-transform duration-500 shadow-[4px_12px_14px_rgba(0,0,0,0.39)]">
                <img 
                  src={imgImage3} 
                  alt="Korean food" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Image 4 - Bottom Right */}
            <div 
              className="absolute bottom-[15%] lg:bottom-[20%] right-[5%] lg:right-[10%] w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] animate-float"
              style={{ 
                animationDelay: "2s",
                animationDuration: "8s"
              }}
            >
              <div className="relative w-full h-full rotate-[10deg] hover:rotate-[15deg] transition-transform duration-500 shadow-[0px_10px_12px_rgba(0,0,0,0.36)]">
                <img 
                  src={imgImage4} 
                  alt="Korean food" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Image 5 - Top Right */}
            <div 
              className="absolute top-[15%] lg:top-[20%] right-[10%] lg:right-[15%] w-[160px] lg:w-[240px] h-[220px] lg:h-[320px] animate-float"
              style={{ 
                animationDelay: "1.5s",
                animationDuration: "7.5s"
              }}
            >
              <div className="relative w-full h-full rotate-[25deg] hover:rotate-[30deg] transition-transform duration-500 shadow-[0px_20px_20px_rgba(0,0,0,0.15)]">
                <img 
                  src={imgImage5} 
                  alt="Korean food" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-[571px]">
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            {/* Title */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="capitalize font-normal text-[#c59d5f] text-4xl lg:text-[50px] leading-normal">
                Gimbas
              </h1>
              <p className="capitalize font-normal text-[#111] text-sm lg:text-base leading-relaxed">
                Savor the artistry of sushi, where fresh ingredients meet precise craftsmanship. Each bite offers a harmonious blend of flavors, from tender fish to perfectly seasoned rice, celebrating the essence of traditional Japanese cuisine
              </p>
              
              {/* Dots Indicator */}
              <div className="flex gap-3 lg:gap-4">
                <div className="w-3 h-3 lg:w-[15px] lg:h-[15px] rounded-full bg-[#c59d5f]" />
                <div className="w-3 h-3 lg:w-[15px] lg:h-[15px] rounded-full border border-[#c59d5f]" />
                <div className="w-3 h-3 lg:w-[15px] lg:h-[15px] rounded-full border border-[#c59d5f]" />
                <div className="w-3 h-3 lg:w-[15px] lg:h-[15px] rounded-full border border-[#c59d5f]" />
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#f8911b] px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-[#e08016] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group">
              <span className="capitalize font-bold text-[#e8e8ea] text-lg lg:text-2xl whitespace-nowrap">
                Order Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}
