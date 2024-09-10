import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar } from "@nextui-org/react";
import { React, useState, useContext } from "react";
import { Link as Mylink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createuserContext } from "../context/headerContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { auth } from "../firebase/firebase";
import { div } from "framer-motion/client";
export default function Headerloginsignup() {

    const { User } = useContext(createuserContext)

    const menuItems = [
        "Login",
        "Signup",
    ];
    console.log(User);

    return (




        <Navbar disableAnimation isBordered>
            {/* <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent> */}

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Avatar src={
                        User.isLogin ? (
                            User.userInfo.photoUrl
                        ) : null
                    } />
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
                {User.isLogin ? (
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                            >
                                See More
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">{User.userInfo.email}</DropdownItem>
                            {
                                User.userInfo.name ? (
                                    <DropdownItem key="new">
                                        {User.userInfo.name}
                                    </DropdownItem>

                                ) : null
                            }

                            <DropdownItem onClick={async () => {
                                await signOut(auth)
                            }} key="edit">Log Out</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                )
                    : (
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
                        </NavbarItem >
                        // console.log('hello');

                    )
                }
            </NavbarContent >

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
        </Navbar >
    );
}
