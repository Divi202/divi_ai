import { Hourglass, Smartphone, TrendingUp } from "lucide-react";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    //   feature section container
    <div className="flex flex-row justify-center items-center max-w-screen px-10 py-20 bg-custom-black text-custom-white">
      <div className="flex gap-16.5 justify center items-center">
        {/* text  */}
        <div className=" flex flex-col items-center justify-center gap-4.5 w-4/5">
          {/* header  */}
          <div className="flex flex-col items-center justify-center gap-4.5">
            {" "}
            <h2 className="text-5xl w-3/5 font-heading font-bold ">
              Experience the Styling Revolution: Effortless Style at Your
              Fingertips
            </h2>
            <p className="w-3/5 font-body font-light text-xl ">
              Experience a personalized fashion journey that saves you time and
              enhances your style. Our AI-stylist curates outfits tailored just
              for you, ensuring you always look your best.
            </p>
          </div>

          {/* body  */}
          <div className=" flex flex-col w-3/5 gap-4">
            {" "}
            <div className="flex gap-4 font-body font-normal ">
              {" "}
              <Hourglass></Hourglass>
              <p> Save time with curated outfit suggestions.</p>
            </div>
            <div className="flex gap-4 w-4/5 font-body font-normal  ">
              {" "}
              <Smartphone></Smartphone>
              <p> Receive personalized fashion advice tailored to you.</p>
            </div>
            <div className="flex gap-4 font-body font-normal ">
              {" "}
              <TrendingUp></TrendingUp>
              <p>Stay trendy with the latest fashion insights.</p>
            </div>
          </div>
        </div>
        {/* image  */}
        <div className="flex justify-center items-center  ">
          <Image
            src="/benefits.svg"
            alt="benefits image"
            width={800}
            height={800}
            className="rounded-4xl object-cover border-2 border-custom-white"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
