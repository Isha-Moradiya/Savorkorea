import imgCheesyTokbokki1 from "figma:asset/435dfbcc71809c7ba8fb60d0c0bbdace9eda6d76.png";
import imgCheesyTokbokki2 from "figma:asset/355096574b63bca3dee6dab2158a79e689824ec8.png";
import imgNoodleSoup from "figma:asset/070dd2f7eaca11ce7ccfd1479df1bdb7298eb8b9.png";
import imgSushi from "figma:asset/00089bd0c987a86859ca3e1b833b806cb75e8352.png";
import imgBingsu from "figma:asset/50750f5e7b322ba135397dd63b37914fcf3aaa09.png";
import imgGranita from "figma:asset/19d8ba8c718c31e0ac5d731a896ac3da16244961.png";
import imgOrangeDessert from "figma:asset/c026f0475ead82e549f132ee9f273fe40aabb9a4.png";
import imgSeafoodSushi from "figma:asset/49a0a062d382e1b5509574d7e2385bce69ddfa49.png";
import imgCheesyTokbokki from "figma:asset/966b0e23f8546363563fb2662ee3c45dde2ac834.png";

const galleryImages = [
  { src: imgCheesyTokbokki1, span: "col-span-2 row-span-1", alt: "Cheesy Tokbokki 1" },
  { src: imgCheesyTokbokki2, span: "col-span-2 row-span-1", alt: "Cheesy Tokbokki 2" },
  { src: imgNoodleSoup, span: "col-span-1 row-span-1", alt: "Noodle Soup" },
  { src: imgSushi, span: "col-span-2 row-span-1", alt: "Sushi" },
  { src: imgBingsu, span: "col-span-1 row-span-1", alt: "Bingsu" },
  { src: imgGranita, span: "col-span-1 row-span-1", alt: "Granita Dessert" },
  { src: imgOrangeDessert, span: "col-span-1 row-span-1", alt: "Orange Dessert" },
  { src: imgSeafoodSushi, span: "col-span-1 row-span-1", alt: "Seafood Sushi" },
  { src: imgCheesyTokbokki, span: "col-span-1 row-span-1", alt: "Cheesy Tokbokki" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#111] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="space-y-8 lg:space-y-12">
          {/* Title */}
          <h2 className="capitalize font-normal text-[#c59d5f] text-3xl lg:text-[50px] text-center leading-normal">
            Gallery
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {/* Row 1 - Two large images */}
            <div className="col-span-2 h-[250px] lg:h-[435px] overflow-hidden rounded-lg group">
              <img 
                src={imgCheesyTokbokki1} 
                alt="Cheesy Tokbokki"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 h-[250px] lg:h-[435px] overflow-hidden rounded-lg group">
              <img 
                src={imgCheesyTokbokki2} 
                alt="Cheesy Tokbokki"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Row 2 - Three images */}
            <div className="col-span-1 md:col-span-1 h-[200px] lg:h-[434px] overflow-hidden rounded-lg group">
              <img 
                src={imgNoodleSoup} 
                alt="Noodle Soup"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 md:col-span-2 h-[200px] lg:h-[434px] overflow-hidden rounded-lg group">
              <img 
                src={imgSushi} 
                alt="Sushi"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 md:col-span-1 h-[200px] lg:h-[434px] overflow-hidden rounded-lg group">
              <img 
                src={imgBingsu} 
                alt="Bingsu"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Row 3 - Three images */}
            <div className="col-span-1 h-[200px] lg:h-[435px] overflow-hidden rounded-lg group">
              <img 
                src={imgGranita} 
                alt="Granita Dessert"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 h-[200px] lg:h-[435px] overflow-hidden rounded-lg group">
              <img 
                src={imgOrangeDessert} 
                alt="Orange Dessert"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-2 lg:space-y-2">
              <div className="h-[95px] lg:h-[230px] overflow-hidden rounded-lg group">
                <img 
                  src={imgSeafoodSushi} 
                  alt="Seafood Sushi"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-[95px] lg:h-[196px] overflow-hidden rounded-lg group">
                <img 
                  src={imgCheesyTokbokki} 
                  alt="Cheesy Tokbokki"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="hidden lg:block col-span-1 h-[200px] lg:h-[435px] overflow-hidden rounded-lg group">
              <img 
                src={imgNoodleSoup} 
                alt="Noodle Soup"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 lg:mt-12">
            <button className="bg-[#f8911b] px-6 lg:px-8 py-3 lg:py-3.5 rounded-lg hover:bg-[#e08016] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <span className="capitalize font-bold text-white text-base lg:text-lg">
                See More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
