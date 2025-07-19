import Link from "next/link";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-auto items-center md:justify-end bg-custom-black text-custom-white px-5 md:px-10 py-4 md:py-4 ">
      {/* copywrite text  */}
      <p className="text-xs md:text-sm font-body font-normal text-custom-white">
        © 2025 DiviAI. All rights reserved.
      </p>
      {/* Logo */}{" "}
      <div className=" flex flex-1 justify-center">
        <Image
          src="/Logo.svg"
          width={50}
          height={50}
          alt="Divi AI logo"
          className="text-custom-white "
        />{" "}
      </div>
      {/* important pages link*/}
      <div className="flex flex-row items-center gap-8 ">
        <ul className="flex flex-row gap-6 font-body font-normal text-custom-white text-xs md:text-sm">
          <li>
            <Link href="/privacy-policy" className="hover:opacity-80 ">
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
          {/* only for medium and big screen  */}
          <Link
            href="https://www.instagram.com/diviai_official/"
            target="/"
            className="hidden md:flex flex-row  hover:opacity-80"
          >
            <Image
              className="bg-custom-white rounded-full "
              src="/instagram.svg"
              alt="instagram logo"
              width={25}
              height={25}
            />
          </Link>
          {/* only for samll screen  */}
          <Link
            href="https://www.instagram.com/diviai_official/"
            target="/"
            className="flex md:hidden flex-row  hover:opacity-80"
          >
            <Image
              className="bg-custom-white rounded-full "
              src="/instagram.svg"
              alt="instagram logo"
              width={20}
              height={20}
            />
          </Link>

          {/* <Link
            href="#facebook link"
            className="bg-custom-black hover:opacity-80"
          >
            <Image
              src="/facebook.svg"
              alt="facebook logo"
              width={25}
              height={25}
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
