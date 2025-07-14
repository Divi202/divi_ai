"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner"; // import from Sonner
import { ctaSchema } from "@/zod_schema/CTA";

const CTA = () => {
  // State to manage email input and loading state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle joining the waitlist
  const handleJoinWaitlist = async () => {
    const result = ctaSchema.safeParse({ email });
    if (!result.success) {
      toast.error("Please enter a valid email address."); // show validation error
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();

      toast.success("You're on the list! We'll keep you updated.");
      setEmail("");
    } catch {
      toast.error("Failed to join waitlist. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="CTA" className="bg-custom-white w-full px-10 py-20">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* CTA button  */}

          <Button
            onClick={handleJoinWaitlist}
            disabled={loading}
            className=" w-2/10 rounded-4xl bg-custom-white text-custom-black font-body font-semibold hover:bg-custom-white hover:opacity-80 transition-colors duration-300"
          >
            {" "}
            {loading ? "Joining..." : "Join the waitlist"}
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
