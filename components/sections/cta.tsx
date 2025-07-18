import WaitlistForm from "./common/waitlistform";

const CTA = () => {
  return (
    <div
      id="CTA"
      className="bg-custom-white w-full px-5 py-10 md:px-10 md:py-20"
    >
      <div className="flex flex-col border-2 border-custom-white rounded-4xl bg-custom-black text-custom-white py-5 md:px-8 md:py-10 items-center md:items-start ">
        {/* section-heading  */}
        <div className=" flex flex-col items-center md:items-start gap-2 md:gap-4 ">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-center md:text-start ">
            Your Personal AI Stylist is Coming
          </h2>
          <p className="text-sm md:text-lg lg:text-xl font-body font-light text-center md:text-start">
            Join hundreds of early users waiting to try it first.
          </p>
          {/* Waitlist form */}
          <WaitlistForm variant="light"></WaitlistForm>
          {/* Note message  */}
          <p className=" text-xs md:text-sm font-body font-normal  ">
            We’ll only email you about the launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
