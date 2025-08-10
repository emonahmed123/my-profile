"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbarall = () => {
  const menuItems = ["/blog", "#Service", "#Contact"];

  const pathname = usePathname();

  return (
    <Navbar disableAnimation isBordered className="font-poppe">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-inherit text-white">
            EMON <span className="AHEMD">AHEMD</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-inherit text-white">
            EMON <span className="AHEMD">AHEMD</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="end">
        <NavbarItem>
          <Link className="text-white font-medium" href="/">
            Home
          </Link>
        </NavbarItem>
        {pathname !== "/blog" && (
          <>
            {" "}
            <NavbarItem isActive>
              <Link
                href="#projects"
                className="text-white font-medium"
                aria-current="page"
              >
                Project
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                className="text-white font-medium"
                href="#Service"
              >
                Service
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                className="text-white font-medium"
                href="#Contact"
              >
                Contact
              </Link>
            </NavbarItem>
          </>
        )}
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-medium"
            href="/blog"
          >
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-wlhite" href={item}>
              {item.replace(/^[/#]/, "")}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbarall;
