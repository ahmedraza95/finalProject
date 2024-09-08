import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar } from "@nextui-org/react";
import React from "react";
import { onAuthStateChanged } from "../firebase/firebase";
import { Link as Mylink } from "react-router-dom";
export default function Headerloginsignup() {
    const menuItems = [
        "Login",
        "Signup",
    ];

    return (




        <Navbar disableAnimation isBordered>
            {/* <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent> */}

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Avatar />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="warning">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="warning" href="#" variant="flat">
                        <Mylink to={'/signup'}>
                            Sign Up
                        </Mylink>
                    </Button>
                    <Button className="ml-2" color="warning" href="#" variant="flat">
                        <Mylink to={'/login'}>
                            Login
                        </Mylink>
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
