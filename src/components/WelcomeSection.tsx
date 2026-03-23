export function WelcomeSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="max-w-[1043px] mx-auto text-center space-y-8 lg:space-y-10 animate-fade-in">
          <h2 className="capitalize font-normal text-destructive text-3xl lg:text-[50px] leading-normal">
            Welcome To SavorKorea!
          </h2>
          <p className="font-normal text-foreground text-sm lg:text-base leading-relaxed max-w-[900px] mx-auto">
            We invite you to explore our menu, where every dish reflects the vibrant flavors of Korea. Enjoy a culinary journey that's as delightful as it is authentic.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
