import { useState } from "react";
import imgRectangle34 from "figma:asset/ab1e810d5e66b4300eee5288f8efd59af234f04f.png";
import imgRectangle36 from "figma:asset/72cd6f11f89e299d7f8a3b0a1932424ef4da4b28.png";
import imgRectangle40 from "figma:asset/b04ee60bebec71298279c5455ea48f94fda2e79b.png";
import imgRectangle41 from "figma:asset/5ae38566e403a49792d5251b10e4be618304b45a.png";
import imgRectangle43 from "figma:asset/477cce3c7f817b6d82e71a6f66c3c8de2ba44b2f.png";
import imgRectangle44 from "figma:asset/ce2dc18560a586dbd77ec060b859ed417a5b0026.png";

const cateringImages = [
  imgRectangle34,
  imgRectangle36,
  imgRectangle40,
  imgRectangle41,
  imgRectangle43,
  imgRectangle44
];

export function CateringSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cateringImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cateringImages.length) % cateringImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="catering" className="bg-background py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="space-y-8 lg:space-y-12">
          {/* Title */}
          <h2 className="capitalize font-normal text-destructive text-3xl lg:text-[50px] text-center leading-normal">
            Catering
          </h2>

          {/* Carousel Container with rounded background */}
          <div className="relative bg-secondary rounded-2xl p-6 lg:p-10 overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cateringImages.map((img, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full px-2 lg:px-4"
                  >
                    <div className="w-full h-[300px] lg:h-[555px] relative group overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`Catering service ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-[#c59d5f] hover:bg-[#d4ae70] rounded-full w-10 h-10 lg:w-[42px] lg:h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#262525]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-[#c59d5f] hover:bg-[#d4ae70] rounded-full w-10 h-10 lg:w-[42px] lg:h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#262525]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 lg:gap-4 mt-8 lg:mt-10">
              {cateringImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-3 h-3 lg:w-[10px] lg:h-[10px] bg-destructive' 
                      : 'w-3 h-3 lg:w-[10px] lg:h-[10px] border border-[#c59d5f] hover:bg-[#c59d5f]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
