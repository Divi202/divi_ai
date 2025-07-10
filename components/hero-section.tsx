import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
const HeroSection = () => {
  return (
    <div className="flex-row justify-center align-center w-screen px-8.5 py-16.5">
      <div className="flex gap-16.5 justify center align-center">
        <div className=" flex flex-col align-start gap-4.5 w-4/5">
          <h1 className="text-7xl w-4/5">
            Never worry about what to wear again
          </h1>
          <p className="w-3/5">
            Discover the future of fashion with our AI stylist. Effortlessly
            create stunning outfits tailored to your unique taste and
            personality.
          </p>
          {/* Email input field  */}
          <Input
            type="email"
            placeholder="Enter you Email"
            className="w-2/5 bg-custom-black text-custom-white"
          />
          <Button className="w-1/5"> Join the waitlist</Button>
          <p className="w-2/5">Be the first to try it when we launch.</p>
        </div>
        <div className="flex justify-center align-center ">
          <Image
            src="/hero.svg"
            alt="hero image"
            width={600}
            height={600}
            className="rounded-4xl object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
