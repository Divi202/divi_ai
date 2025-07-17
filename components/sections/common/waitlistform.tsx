"use client";
import { useState } from "react";
import { toast } from "sonner"; // import from Sonner
import { ctaSchema } from "@/zod_schema/CTA";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WaitlistForm = ({ variant }) => {
  // State to manage email input and loading state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle joining the waitlist
  const handleJoinWaitlist = async () => {
    // Validate email using Zod schema
    const result = ctaSchema.safeParse({ email });
    if (!result.success) {
      toast.error("Please enter a valid email address."); // show validation error
      return;
    }

    setLoading(true);
    // Send email data to the server
    try {
      const res = await fetch("/api/join-waitlist", {
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
    <>
      <Input
        type="email"
        placeholder="Enter you Email"
        className={`w-4/5 md:w-2/5 rounded-4xl font-body font-semibold ${
          variant === "light"
            ? "bg-custom-white text-custom-black px-8"
            : "px-8 bg-custom-black text-custom-white "
        }`}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* CTA button  */}
      <Button
        onClick={handleJoinWaitlist}
        disabled={loading}
        className={`w-4/10 md:w-2/10 rounded-4xl font-body font-semibold hover:opacity-80 transition-colors duration-300 ${
          variant === "light"
            ? "bg-custom-white text-custom-black hover:bg-custom-white"
            : "bg-custom-black text-custom-white hover: bg-custom-black "
        }`}
        size="sm"
      >
        {" "}
        {loading ? "Joining..." : "Join the waitlist"}
      </Button>
    </>
  );
};

export default WaitlistForm;
