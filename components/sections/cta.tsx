import WaitlistForm from "./common/waitlistform";

const CTA = () => {
  return (
    <div id="CTA" className="bg-custom-white w-full px-10 py-20">
      <div className="flex flex-col border-2 border-custom-white rounded-4xl bg-custom-black text-custom-white px-10 py-10 items-start ">
        {/* section-heading  */}
        <div className=" flex flex-col gap-4.5">
          <h2 className="text-5xl font-heading font-bold ">
            Your Personal AI Stylist is Coming
          </h2>
          <p className="font-body font-light text-xl">
            Join hundreds of early users waiting to try it first.
          </p>
          {/* Waitlist form */}
          <WaitlistForm variant="light"></WaitlistForm>
          {/* Note message  */}
          <p className=" text-sm font-body font-normal">
            We’ll only email you about the launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
