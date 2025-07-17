import Image from "next/image";

import WaitlistForm from "./common/waitlistform";
const HeroSection = () => {
  return (
    <div className="w-full px-5 md:px-10 py-10 md:py-20 bg-custom-white text-custom-black">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-auto justify center items-center">
        <div className=" flex flex-col items-center lg:items-start gap-2 md:gap-4 text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl lg:text-7xl w-4/5 font-heading font-extrabold drop-shadow-lg drop-shadow-custom-black">
            Never Worry About What To Wear Again
          </h1>
          {/* subheading */}
          <p className="text-sm md:text-lg lg:text-xl w-4/5 font-body font-light ">
            Discover the future of fashion with our AI stylist. Effortlessly
            create stunning outfits tailored to your unique taste and
            personality.
          </p>
          {/* Waitlist form  */}
          <WaitlistForm variant="dark"></WaitlistForm>
          <p className="text-xs md:text-sm w-4/5 font-body font-normal">
            Be the first to try it when we launch.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <Image
            src="/hero.svg"
            alt="hero image"
            width={800}
            height={800}
            className="rounded-4xl border-3 border-custom-black shadow-lg shadow-custom-black "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
