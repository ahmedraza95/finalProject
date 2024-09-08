import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, User } from "@nextui-org/react";
import { React, useState } from "react";
import { Link as Mylink } from "react-router-dom";
import { signOut, auth } from "../firebase/firebase.js";
import { onAuthStateChanged } from "../firebase/firebase.js";
export default function HeaderUser() {
    const [loader, setloader] = useState(false)
    const [email, setEmail] = useState(false)
    async function signout() {
        try {
            setloader(true)
            await signOut(auth)
            setloader(false)
        } catch (error) {

        }
    }
    onAuthStateChanged(auth, (user) => {
        setEmail(user.email)
    })

    const menuItems = [
        "Logout",
    ];

    return (
        <Navbar disableAnimation isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <div className="Email">{email}</div>
                    <Avatar src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
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

            {/* <NavbarContent justify="end">
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
            </NavbarContent> */}

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link onLoad={loader} onPress={signout}
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
