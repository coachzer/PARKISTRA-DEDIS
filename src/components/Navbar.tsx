"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/images/logoGreen.png";
import en from "../../locales/en.json";
import sl from "../../locales/sl.json";
import LanguageSwitcher from "./LanguageSwitcher";

// Define a type for the supported languages
type Language = "en" | "sl";

// Define the structure of the translations object
const translations: Record<Language, typeof en> = { en, sl };

// Bottom Navbar
export default function Navbar() {
  const [nav, setNav] = useState(false);

  const { data: session, status } = useSession();
  const [language, setLanguage] = useState<Language>("en"); // Ensure that language is typed

  // Load language from localStorage on initial load
  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en"; // Cast to Language
    setLanguage(storedLang);
  }, []);

  // Define translations
  const translations = { en, sl };

  const links = [
    {
      id: 1,
      link: translations[language].home || "HOME",
      href: "/",
    },
    {
      id: 2,
      link: translations[language].projects || "PROJECTS",
      href: "/projects",
    },
    {
      id: 3,
      link: translations[language].gallery || "GALLERY",
      href: "/gallery",
    },
    {
      id: 4,
      link: translations[language].about || "ABOUT",
      href: "/about",
    },
    {
      id: 5,
      link: translations[language].support || "SUPPORT",
      href: "/support",
    },
    {
      id: 6,
      link: translations[language].contact || "CONTACT",
      href: "/contact",
    },
    {
      id: 7,
      link: translations[language]["add-project"] || "ADD PROJECT",
      href: "/add-project",
      requiresAuth: true, // Links that require authentication
    },
    {
      id: 8,
      link: session
        ? translations[language].logout || "LOGOUT"
        : translations[language].login || "LOGIN",
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
    <nav className={`relative z-50 w-full ${nav ? "h-screen" : "h-20"}`}>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-[#ECE3CE] to-[#dad2c1] nav">
        {
          <h1 className="text-5xl font-signature ml-2">
            <a
              className="link-underline link-underline-black"
              href="/"
              rel="noreferrer"
            >
              <Image
                priority={true}
                src={Logo}
                alt={"Logo"}
                width={100}
                height={100}
              />
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
          className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#ECE3CE] to-[#dad2c1] ">
            {links.map(
              (link) =>
                (!link.requiresAuth || session) && (
                  <li
                    key={link.id}
                    className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-2xl hover:scale-105 hover:text-white duration-200 link-underline"
                  >
                    <Link onClick={() => setNav(!nav)} href={link.href}>
                      {link.link}
                    </Link>
                  </li>
                )
            )}
          </ul>
        )}
        {/* Language Switch */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
