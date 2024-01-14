"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/images/logoGreen.png";

// Bottom Navbar
export default function Navbar() {
    const [nav, setNav] = useState(false);

    const { data: session, status } = useSession();

    const links = [
        {
            id: 1,
            link: "HOME",
            href: "/",
        },
        {
            id: 2,
            link: "PROJECTS",
            href: "/projects",
        },
        {
            id: 3,
            link: "GALLERY",
            href: "/gallery",
        },
        {
            id: 4,
            link: "ABOUT",
            href: "/about",
        },
        {
            id: 5,
            link: "SUPPORT",
            href: "/support",
        },
        {
            id: 6,
            link: "CONTACT",
            href: "/contact",
        },
        {
            id: 7,
            link: "ADD PROJECT",
            href: "/add-project",
            requiresAuth: true, // Add this property to links that require authentication
        },
        {
            id: 8,
            link: session ? "LOGOUT" : "LOGIN",
            href: session ? "/api/auth/signout" : "/api/auth/signin",
        },
    ];

    // const router = useRouter();

    // const logoutHandler = async () => {
    //     await signOut();
    // };

    // const loginHandler = async () => {
    //     router.push("/api/auth/signin");
    // };

    return (
        <nav className="z-1000 w-full">
            <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-[#ECE3CE] to-[#dad2c1] nav">
                {
                    <h1 className="text-5xl font-signature ml-2">
                        <a
                            className="link-underline link-underline-black"
                            href="/"
                            rel="noreferrer"
                        >
                            <Image src={Logo} alt={"Logo"} width={100} height={100} />
                        </a>
                    </h1>
                }
                <div className="content-center m-auto">
                    <ul className="hidden md:flex">
                        {links.map(
                            (link) =>
                                (!link.requiresAuth || session) && (
                                    <li
                                        key={link.id}
                                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                                    >
                                        <Link href={link.href}>{link.link}</Link>
                                    </li>
                                )
                        )}
                    </ul>
                </div>
                <div style={{ width: "100px" }} /> {/* Spacer div */}
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#ECE3CE] to-[#3A4D39] text-gray-500">
                        {links.map(
                            (link) =>
                                (!link.requiresAuth || session) && (
                                    <li
                                        key={link.id}
                                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                    >
                                        <Link onClick={() => setNav(!nav)} href={link.href}>
                                            {link.link}
                                        </Link>
                                    </li>
                                )
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
}
