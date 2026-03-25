import { useState } from "react";
import imgRectangle39 from "figma:asset/7aaf4f5809cea9485409c62d9ea418af650122c0.png";
import imgRectangle38 from "figma:asset/7bbf570fb2de044641e5d0dcd49531c4e05003fb.png";
import imgRectangle31 from "figma:asset/f35da501b58fd202710458b525a8ffd8de4c7b6b.png";
import imgRectangle32 from "figma:asset/1cb95d5112c9fa0195bbf0dcf9c95211509c50f6.png";
import imgRectangle33 from "figma:asset/11dccfae97f0ecef8ce5dba5d6e3fbac7acd55c4.png";
import imgRectangle37 from "figma:asset/aa3759f34867873f6cacdbe746e239bb04a88788.png";
import imgRectangle35 from "figma:asset/a9115cfc12dedd652b7b018bafb2a90a02a00906.png";

const menuImages = [
  imgRectangle38,
  imgRectangle31,
  imgRectangle32,
  imgRectangle33,
  imgRectangle37,
  imgRectangle35,
  imgRectangle39
];

export function MenuSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="menu" className="bg-secondary py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="space-y-8 lg:space-y-12">
          {/* Title */}
          <h2 className="capitalize font-normal text-destructive text-3xl lg:text-[50px] text-center leading-normal">
            Our Menu
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-out gap-4 lg:gap-8"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {menuImages.map((img, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-[280px] lg:w-[370px] h-[250px] lg:h-[370px] relative group"
                  >
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      Math.abs(index - currentSlide) > 1 ? 'blur-sm opacity-50' : 'blur-0 opacity-100'
                    }`}>
                      <img 
                        src={img} 
                        alt={`Menu item ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-[#e8e8ea] hover:bg-[#c59d5f] rounded-full w-10 h-10 lg:w-[42px] lg:h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#111] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-[#e8e8ea] hover:bg-[#c59d5f] rounded-full w-10 h-10 lg:w-[42px] lg:h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#111] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-4 lg:gap-6 mt-8 lg:mt-12">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-4 h-4 lg:w-5 lg:h-5 bg-destructive' 
                      : 'w-4 h-4 lg:w-5 lg:h-5 border border-[#c59d5f] hover:bg-[#c59d5f]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 lg:mt-12">
            <button className="bg-[#f8911b] px-6 lg:px-8 py-3 lg:py-3.5 rounded-lg hover:bg-[#e08016] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <span className="capitalize font-bold text-white text-base lg:text-lg">
                See All Menu
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
