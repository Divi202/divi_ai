import Image from "next/image";

import WaitlistForm from "./common/waitlistform";
const HeroSection = () => {
  return (
    <div className="flex-row justify-center items-center w-full px-10 py-20 bg-custom-white text-custom-black">
      <div className="flex gap-16.5 justify center items-center">
        <div className=" flex flex-col items-start justify-center gap-4.5 w-4/5">
          <h1 className="text-7xl w-4/5 font-heading font-extrabold drop-shadow-lg drop-shadow-custom-black ">
            Never Worry About What To Wear Again
          </h1>
          {/* subheading */}
          <p className=" text-xl w-3/5 font-body font-light">
            Discover the future of fashion with our AI stylist. Effortlessly
            create stunning outfits tailored to your unique taste and
            personality.
          </p>
          {/* Waitlist form  */}
          <WaitlistForm variant="dark"></WaitlistForm>
          <p className=" text-sm w-2/5 font-body font-normal">
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
