"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
const ContactUs = () => {
  const email = "diviaicontact@gmail.com"; // replace with your email
  return (
    <div className="flex min-h-screen flex-col bg-custom-white">
      <Navbar></Navbar>
      <div className="flex flex-1 w-full bg-custom-white justify-center px-2 py-20">
        <Card className="w-[500px] h-[300px] p-4  bg-custom-black text-custom-white flex flex-col items-center justify-center gap-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="font-heading font-bold text-2xl md:text-3xl ">
              Contact Us
            </CardTitle>
            <p className=" font-light text-sm text-custom-white py-3 ">
              If you have any questions, feedback, or concerns, feel free to
              reach out to us.
            </p>
          </CardHeader>
          <CardContent className="w-full text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 items-center">
                {" "}
                <p className=" font-light text-sm ">Email us at:</p>
                <Link href={`mailto:${email}`}>
                  <p className="text-sm text-custom-white font-bold  ">
                    {email}
                  </p>
                </Link>
              </div>
              <p className="text-muted-foreground text-xs text-custom-white mt-2">
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
