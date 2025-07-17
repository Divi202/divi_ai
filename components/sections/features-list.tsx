import { Clock, Shirt, Smartphone } from "lucide-react";

const FeaturesList = () => {
  return (
    <div
      id="features-list"
      className=" flex flex-col bg-custom-white text-custom-black px-5 py-10 md:px-10 md:py-20 itmes-center justify-center gap-15 lg:gap-20"
    >
      {" "}
      {/* section-heading  */}
      <div className=" flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-auto ">
        <h2 className="text-xl md:text-3xl lg:text-5xl lg:w-3/5 font-heading font-bold text-center">
          Transform Your Wardrobe with AI Styling
        </h2>
        <p className="text-sm md:text-lg lg:text-xl lg:w-3/5 font-body font-light text-center">
          Discover how our AI technology can revolutionize your fashion choices.
          Get personalized outfit recommendations tailored just for you.
        </p>
      </div>
      {/* features-list  */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-30 items-center lg:justify-center ">
        {/* feature-1  */}
        <div className="flex flex-col text-center gap-1 md:gap-2 items-center  lg:w-1/6">
          <Shirt />
          <h3 className="font-heading text-md md:text-xl lg:text-2xl font-bold">
            AI-Powered Outfit Styling at Your Fingertips
          </h3>
          <p className=" text-sm md:text-base lg:text-md font-body font-light">
            Experience the future of fashion with our innovative AI.
          </p>
        </div>
        {/* feature-2 */}
        <div className="flex flex-col text-center gap-1 md:gap-2 items-center  lg:w-70 ">
          <Clock />
          <h3 className="font-heading font-heading text-md md:text-xl lg:text-2xl font-bold">
            Get Real-Time Fashion Advice from Our AI Stylist Anytime, Anywhere
          </h3>
          <p className="text-sm md:text-base lg:text-md font-body font-light">
            Receive instant feedback on your outfit choices with our smart AI
            tool.
          </p>
        </div>
        {/* feature-3  */}
        <div className="flex flex-col text-center gap-1 md:gap-2 items-center  lg:w-1/6 ">
          <Smartphone />
          <h3 className="font-heading font-heading text-md md:text-xl lg:text-2xl font-bold">
            Personalized Recommendations Just for You
          </h3>
          <p className="text-sm md:text-base lg:text-md font-body font-light">
            Get outfits that match your unique style preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
