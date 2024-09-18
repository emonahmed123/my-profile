
"use client"

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";


const Navbarall = () => {
    const menuItems = [
        "/blog",
        "#Service",
        "#Contact"
    ];

    return (

        <Navbar disableAnimation isBordered className="font-poppe">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit text-white">EMON <span className="AHEMD">AHEMD</span></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit text-white">EMON <span className="AHEMD">AHEMD</span></p>
                </NavbarBrand>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex " justify="end">
                <NavbarItem>
                    <Link className="text-white font-medium" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#projects" className="text-white font-medium" aria-current="page" >
                        Project
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="text-white font-medium" href="#Service">
                        Service
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="text-white font-medium" href="#Contact">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="text-white font-medium" href="/blog">
                        Blog
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-wlhite"

                            href={item}
                            size="lg"
                        >
                            {item.replace(/^[/#]/, '')}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}

export default Navbarall