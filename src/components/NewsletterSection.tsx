import { useState } from "react";
import imgRectangle42 from "figma:asset/c7905514e107ebe92aa6526ba9ec023f5a34dd9c.png";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="bg-[#111] py-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Content Side */}
          <div className="w-full lg:w-[64%] bg-[#c59d5f] px-6 lg:px-20 py-12 lg:py-20">
            <div className="max-w-[625px] space-y-8 lg:space-y-10">
              {/* Title */}
              <h2 className="capitalize font-normal text-[#111] text-3xl lg:text-[50px] leading-normal">
                endless Inspiration
              </h2>

              {/* Subtitle */}
              <p className="capitalize font-bold text-[#111] text-base lg:text-lg leading-relaxed">
                signup to our newsletter for fresh updates, encouragement and exclusive insights
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[61px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="flex-1 bg-[#f4efe4] px-6 lg:px-10 py-3 lg:py-4 rounded-lg text-[#111] placeholder:text-[#111] placeholder:capitalize font-bold text-lg lg:text-2xl focus:outline-none focus:ring-2 focus:ring-[#111] transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#111] border-2 border-[#111] px-6 lg:px-10 py-3 lg:py-4 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span className="capitalize font-extrabold text-[#f4efe4] text-lg lg:text-2xl whitespace-nowrap">
                      {isSubmitted ? "Subscribed!" : "Sign Up"}
                    </span>
                  </button>
                </div>

                {/* Terms */}
                <p className="capitalize font-normal text-[#111] text-xs lg:text-[13px] leading-normal">
                  by clicking sign up you're confirm that you are agree with our terms and conditions
                </p>
              </form>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-[36%] h-[300px] lg:h-[502px]">
            <img 
              src={imgRectangle42} 
              alt="Chef preparing Korean food"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
