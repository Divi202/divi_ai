import { Hourglass, Smartphone, TrendingUp } from "lucide-react";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    //   feature section container
    <div
      id="benefits"
      className="flex flex-row justify-center items-center max-w-screen px-5 py-10 md:px-10 md:py-20 bg-custom-black text-custom-white"
    >
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-auto justify center items-center">
        {/* text  */}
        <div className=" flex flex-col items-center justify-center gap-2 md:gap-4 lg:w-4/5">
          {/* header  */}
          <div className="flex flex-col items-center justify-center gap-2 md:gap-4 ">
            {" "}
            <h2 className="text-center lg:text-start text-xl md:text-3xl lg:text-5xl  lg:w-3/5 font-heading font-bold ">
              Experience the Styling Revolution: Effortless Style at Your
              Fingertips
            </h2>
            <p className="text-center lg:text-start lg:w-3/5 font-body font-light text-sm md:text-lg lg:text-xl">
              Experience a personalized fashion journey that saves you time and
              enhances your style. Our AI-stylist curates outfits tailored just
              for you, ensuring you always look your best.
            </p>
          </div>

          {/* body  */}
          <div className=" flex flex-col items-center lg:items-start lg:w-3/5 gap-2 md:gap-4 ">
            {" "}
            <div className="flex gap-2 md:gap-4 font-body font-normal text-xs md:text-base ">
              {" "}
              <div className="hidden md:flex">
                {" "}
                <Hourglass></Hourglass>
              </div>
              <div className="md:hidden">
                {" "}
                <Hourglass size={16}></Hourglass>
              </div>
              <p> Save time with curated outfit suggestions.</p>
            </div>
            <div className="flex gap-2 md:gap-4 lg:w-4/5 font-body font-normal text-xs md:text-base  ">
              {" "}
              <div className="hidden md:flex">
                {" "}
                <Smartphone></Smartphone>
              </div>
              <div className="md:hidden">
                {" "}
                <Smartphone size={16}></Smartphone>
              </div>
              <p> Receive personalized fashion advice tailored to you.</p>
            </div>
            <div className="flex gap-2 md:gap-4 font-body font-normal text-xs md:text-base">
              {" "}
              <div className="hidden md:flex">
                {" "}
                <TrendingUp></TrendingUp>
              </div>
              <div className="md:hidden">
                {" "}
                <TrendingUp size={16}></TrendingUp>
              </div>
              <p>Stay trendy with the latest fashion insights.</p>
            </div>
          </div>
        </div>
        {/* image  */}
        <div className="flex justify-center items-center">
          <Image
            src="/benefits.svg"
            alt="benefits image"
            width={800}
            height={800}
            className="rounded-4xl border-3 border-custom-white shadow-lg shadow-custom-white"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
