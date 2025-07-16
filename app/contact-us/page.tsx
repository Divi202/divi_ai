"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ContactUs = () => {
  const email = "support@diviai.com"; // replace with your email
  return (
    <div className="flex min-h-screen flex-col bg-custom-white">
      <Navbar></Navbar>
      <div className="flex-1 w-full bg-custom-white flex justify-center py-20">
        <Card className="w-[500px] h-[300px] p-4 bg-custom-black text-custom-white flex flex-col items-center justify-center gap-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
            <p className="text-sm text-custom-white py-3">
              If you have any questions, feedback, or concerns, feel free to
              reach out to us.
            </p>
          </CardHeader>
          <CardContent className="w-full text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4 items-center">
                {" "}
                <p className="text-sm ">Email us at:</p>
                <Link href={`mailto:${email}`}>
                  <Button
                    variant="outline"
                    className="bg-custom-white text-custom-black "
                  >
                    {email}
                  </Button>
                </Link>
              </div>
              <p className=" text-muted-foreground text-xs text-custom-white mt-2">
                We usually respond within 2–3 business days.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
