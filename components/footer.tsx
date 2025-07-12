import Link from "next/link";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-end bg-custom-black text-custom-white px-10 ">
      {/* copywrite text  */}
      <p className="font-body flex-1 font-normal text-custom-white">
        © 2025 DiviAI. All rights reserved.
      </p>
      {/* Logo */}{" "}
      <div className=" flex px-90 justify-center">
        <Image
          src="/Logo.svg"
          width={70}
          height={70}
          alt="Divi AI logo"
          className="text-custom-white "
        />{" "}
      </div>
      {/* important pages link*/}
      <div className="flex flex-row items-center gap-8 ">
        <ul className="flex flex-row gap-6 font-body font-normal text-custom-white">
          <li>
            <Link href="/privacy-policy" className="hover:opacity-80">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:opacity-80">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* social media links */}
        <div className="flex flex-row gap-4 items-center ">
          <Link
            href="#instagram link"
            className=" flex flex-row  hover:opacity-80"
          >
            <Image
              src="/instagram.svg"
              alt="instagram logo"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="#facebook link"
            className="bg-custom-black hover:opacity-80"
          >
            <Image
              src="/facebook.svg"
              alt="facebook logo"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
