import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CTA = () => {
  return (
    <div className="bg-custom-white w-full px-10 py-20">
      <div className="flex flex-col border-2 border-custom-white rounded-4xl bg-custom-black text-custom-white px-10 py-10 items-start ">
        {/* section-heading  */}
        <div className=" flex flex-col gap-4.5">
          <h2 className="text-5xl font-heading font-bold ">
            Your Personal AI Stylist is Coming
          </h2>
          <p className="font-body font-light text-xl r">
            Join hundreds of early users waiting to try it first.
          </p>
          {/* input field  */}

          <Input
            type="email"
            placeholder="Enter you Email"
            className="w-2/5 bg-custom-white text-custom-black px-6 rounded-4xl font-body font-semibold"
          />
          {/* CTA button  */}

          <Button className=" w-2/10 rounded-4xl bg-custom-white text-custom-black font-body font-semibold hover:bg-custom-white hover:opacity-80 transition-colors duration-300">
            {" "}
            Join the waitlist
          </Button>
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
