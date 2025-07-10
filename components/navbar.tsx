import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" flex bg-black text-white w-screen h-16 align-items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Logo  */}
          <div className="justify-self-start">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">
                  {" "}
                  <Image
                    src="/Logo.svg"
                    alt="Divi AI logo"
                    width={70}
                    height={35}
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
          {/* Navbar navigation menu  */}
          <div className="flex justify-end">
            {/* Feature bookmark  */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#features">Features</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Benefits bookmark  */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#benefits">Benefits</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Join button - navigate to CTA section  */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button
                  variant="outline"
                  className="bg-custom-white text-custom-black"
                >
                  <Link href="#CTA">Join</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
