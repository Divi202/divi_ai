"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative w-full max-h-16 flex flex-row items-center justify-end bg-custom-black text-custom-white px-5 md:px-10 fixed py-2 md:py-4">
      {/* Logo */}
      <div className="hidden md:flex flex-1 justify-self-start">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={70}
            height={70}
            alt="Divi AI logo"
            className="text-custom-white hover:opacity-80"
          />
        </Link>
      </div>
      {/* Logo  -> mobile screen*/}
      <div className="md:hidden flex flex-1 justify-self-start">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={50}
            height={50}
            alt="Divi AI logo"
            className="text-custom-white hover:opacity-80"
          />
        </Link>
      </div>

      {/* navlinks  + join btn*/}
      {isHomePage && (
        <div className="flex flex-row items-center gap-8 ">
          <ul className="hidden md:flex flex-row gap-6 font-body font-normal text-custom-white">
            <li>
              <Link href="#features-list" className=" hover:opacity-80">
                Features
              </Link>
            </li>
            <li>
              <Link href="#benefits" className="hover:opacity-80">
                Benefits
              </Link>
            </li>
          </ul>

          <Button
            variant="outline"
            // size="sm"
            className="h-6 md:h-9 font-body font-semibold rounded-4xl px-4 md:px-6 drop-shadow-custom-white-md bg-custom-white text-custom-black hover:bg-custom-white hover:opacity-80"
          >
            <Link href="#CTA">Join</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
