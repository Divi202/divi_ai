import Image from "next/image";

const FeatureSection = () => {
  return (
    <div className="flex-row justify-center items-center max-w-screen px-5 py-10 md:px-10 md:py-20 bg-custom-black text-custom-white ">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-auto justify center items-center">
        <div className="flex justify-center items-center ">
          <Image
            src="/feature.svg"
            alt="hero image"
            width={800}
            height={800}
            className="rounded-4xl object-cover border-3 border-custom-white shadow-lg shadow-custom-white"
          ></Image>
        </div>
        <div className=" flex flex-col items-center justify-center gap-2 md:gap-4 w-4/5">
          <h2 className="text-xl md:text-3xl lg:text-5xl w-4/5 font-heading font-bold text-center">
            Personalized Outfits Tailored Just for You
          </h2>
          <p className="text-sm md:text-lg lg:text-xl md:w-4/5 font-body font-light text-center">
            Our AI technology analyzes your unique preferences and style choices
            to create outfits that resonate with your personality. Experience a
            new way to dress, where every outfit feels like it was made just for
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
