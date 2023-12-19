"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Bottom Navbar
export default function Navbar() {
    const [nav, setNav] = useState(false);

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
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#ECE3CE] nav">
            <div>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                { <h1 className="text-5xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href="/"
                        rel="noreferrer"
                    >
                        <img src="/logoGreen.png" alt="Logo" className="w-24 h-24"/>
                    </a>
                </h1> }
            </div>
            <div className="content-center m-auto">
                <ul className="hidden md:flex">
                    {links.map(({ id, link, href }) => (
                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                            <Link href={href}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#ECE3CE] to-[#3A4D39] text-gray-500">
                    {links.map(({ id, link, href }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link onClick={() => setNav(!nav)} href={href}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}