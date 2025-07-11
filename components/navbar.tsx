import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-end bg-custom-black text-custom-white px-10 ">
      {/* Logo */}{" "}
      <div className=" flex flex-1 justify-self-start">
        <Link href="/">
          {" "}
          <Image
            src="/Logo.svg"
            width={70}
            height={70}
            alt="Divi AI logo"
            className="text-custom-white hover:opacity-80"
          />{" "}
        </Link>
      </div>
      {/* navlinks  + join btn*/}
      <div className="flex flex-row items-center gap-8 ">
        <ul className="flex flex-row gap-6 font-body font-normal text-custom-white">
          <li>
            <Link href="#Features" className="hover:opacity-80">
              Features
            </Link>
          </li>
          <li>
            <Link href="#Benefits" className="hover:opacity-80">
              Benefits
            </Link>
          </li>
        </ul>
        <Button
          variant="outline"
          className="font-body font-semibold rounded-4xl px-6 drop-shadow-custom-white-md bg-custom-white text-custom-black hover:bg-custom-white hover:opacity-80 "
        >
          <Link href="#CTA">Join</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
