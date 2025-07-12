import { Clock, Shirt, Smartphone } from "lucide-react";

const FeaturesList = () => {
  return (
    <div className="bg-custom-white text-custom-black px-10 py-20 flex flex-col itmes-center justify-center gap-20">
      {" "}
      {/* section-heading  */}
      <div className=" flex flex-col items-center justify-center gap-4.5">
        <h2 className="text-5xl w-3/5 font-heading font-bold text-center">
          Transform Your Wardrobe with AI Styling
        </h2>
        <p className="w-3/5 font-body font-light text-xl text-center">
          Discover how our AI technology can revolutionize your fashion choices.
          Get personalized outfit recommendations tailored just for you.
        </p>
      </div>
      {/* features-list  */}
      <div className="flex flex-row gap-30 justify-center ">
        {/* feature-1  */}
        <div className="flex flex-col text-center gap-2 items-center w-1/6">
          <Shirt />
          <h3 className="font-heading text-2xl font-bold">
            AI-Powered Outfit Styling at Your Fingertips
          </h3>
          <p className="font-body font-light">
            Experience the future of fashion with our innovative AI.
          </p>
        </div>
        {/* feature-2 */}
        <div className="flex flex-col text-center gap-2 items-center  w-70 ">
          <Clock />
          <h3 className="font-heading text-2xl font-bold">
            Get Real-Time Fashion Advice from Our AI Stylist Anytime, Anywhere
          </h3>
          <p className="font-body font-light">
            Receive instant feedback on your outfit choices with our smart AI
            tool.
          </p>
        </div>
        {/* feature-3  */}
        <div className="flex flex-col text-center gap-2 items-center  w-1/6 ">
          <Smartphone />
          <h3 className="font-heading text-2xl font-bold">
            Personalized Recommendations Just for You
          </h3>
          <p className="font-body font-light">
            Get outfits that match your unique style preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
