"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import p1Photo from "../../../public/images/project1ParkIstra.jpeg";
import p2Photo from "../../../public/images/project2ParkIstra.jpeg";
import p3Photo from "../../../public/images/project3ParkIstra.jpeg";
import Image from "next/image";
import en from "../../../locales/en.json";
import sl from "../../../locales/sl.json";

type Language = "en" | "sl";

const translations: Record<Language, typeof en> = { en, sl };

const About: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en";
    setLanguage(storedLang);
  }, []);
  return (
    <main className="bg-[#ECE3CE]">
      <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-4xl mx-auto p-8 mt-11 mb-11">
        <h1 className="text-5xl text-center font-bold mb-6 text-gray-800">
          {translations[language].about_p_1}
        </h1>
        <p className="text-gray-700 mb-6">{translations[language].about_p_2}</p>

        <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
          {translations[language].about_p_3}
        </h2>
        <p className="text-gray-700 mb-6">{translations[language].about_p_4}</p>

        <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
          {translations[language].about_p_5}
        </h2>
        <p className="text-gray-700 mb-6">{translations[language].about_p_6}</p>

        <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
          {translations[language].about_p_7}
        </h2>
        <p className="text-gray-700 mb-6">{translations[language].about_p_8}</p>

        <p className="text-gray-700 mb-6">{translations[language].about_p_9}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            priority={true}
            src={p1Photo}
            alt="Image 1"
            className="w-full h-full object-cover rounded-md"
          />
          <Image
            priority={true}
            src={p2Photo}
            alt="Image 2"
            className="w-full h-full object-cover rounded-md"
          />
          <Image
            priority={true}
            src={p3Photo}
            alt="Image 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
