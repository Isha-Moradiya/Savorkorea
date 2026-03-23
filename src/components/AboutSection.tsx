import imgRectangle45 from "figma:asset/0d34b9352c70559ec933d1c2567bbbcb5230ef18.png";

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-7">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[350px] lg:h-[525px] overflow-hidden rounded-lg group">
            <img 
              src={imgRectangle45} 
              alt="Korean restaurant interior"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-10">
            <h2 className="capitalize font-normal text-[#c59d5f] text-3xl lg:text-[50px] leading-normal">
              About Us
            </h2>
            
            <div className="space-y-6 font-normal text-[#f4efe4] text-sm lg:text-base leading-relaxed">
              <p>
                SavorKorea is dedicated to bringing the rich and diverse flavors of Korean cuisine to food enthusiasts everywhere. We started with a simple goal: to create an authentic dining experience that captures the heart of Korea's culinary traditions. Our dishes, from savory ramyun to refreshing bingsu, are crafted with the finest ingredients and a passion for excellence.
              </p>
              
              <p>
                At SavorKorea, we believe in the power of food to connect people and cultures. Whether you're discovering Korean food for the first time or indulging in your favorite dishes, we aim to make every visit a delightful and memorable experience. Join us in exploring the vibrant world of Korean cuisine, where each bite tells a story of heritage, taste, and innovation.
              </p>
              
              <p>
                We invite you to savor the flavors of Korea in a warm and welcoming atmosphere. Whether you're dining with friends or exploring new tastes, SavorKorea is here to make your experience exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
