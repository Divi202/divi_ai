"use client";
import { useState } from "react";
import { toast } from "sonner"; // import from Sonner
import { ctaSchema } from "@/zod_schema/CTA";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the type for the variant prop
interface WaitlistFormProps {
  variant: "light" | "dark"; // Or "primary" | "secondary" etc., depending on your variants
}

const WaitlistForm = ({ variant }: WaitlistFormProps) => {
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
      <Input //text-base
        type="email"
        placeholder="Enter you Email"
        className={`h-7 md:h-9 w-4/5 md:w-3/5 lg:w-2/5 placeholder:text-center md:placeholder:text-start placeholder:text-xs md:placeholder:text-sm rounded-4xl font-body font-semibold ${
          variant === "light"
            ? "bg-custom-white text-custom-black md:pl-5 lg:px-6"
            : "bg-custom-black text-custom-white md:pl-40 lg:px-10"
        }`}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* CTA button  */}
      <Button //text-sm
        onClick={handleJoinWaitlist}
        disabled={loading}
        className={`h-7 md:h-9 w-4/10 md:w-3/10 lg:w-2/10 rounded-4xl text-xs md:text-sm font-body font-semibold hover:opacity-80 transition-colors duration-300 ${
          variant === "light"
            ? "bg-custom-white text-custom-black hover:bg-custom-white"
            : "bg-custom-black text-custom-white hover:bg-custom-black"
        }`}
      >
        {" "}
        {loading ? "Joining..." : "Join the waitlist"}
      </Button>
    </>
  );
};

export default WaitlistForm;
