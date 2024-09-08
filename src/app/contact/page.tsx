// components/Contact.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactImage from "../../../public/images/contact.jpg";
import en from "../../../locales/en.json";
import sl from "../../../locales/sl.json";

type Language = "en" | "sl";

const translations: Record<Language, typeof en> = { en, sl };

const Contact: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en";
    setLanguage(storedLang);
  }, []);
  return (
    <main className="bg-[#ECE3CE]">
      <div className="contact-container bg-gray-100 p-8 rounded-md shadow-md max-w-4xl mx-auto flex items-center mt-11">
        <div className="text-center pr-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {translations[language].contact_p_1}
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
              {translations[language].contact_p_2}
            </h2>
            <p className="text-gray-700">
              {translations[language].contact_p_3}{" "}
              <a
                href="mailto:info@parkistra.com"
                className="text-blue-500 hover:underline"
              >
                info@parkistra.com
              </a>
              .
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
              {translations[language].contact_p_4}
            </h2>
            <p className="text-gray-700">
              {translations[language].contact_p_5}{" "}
              <a
                href="mailto:volunteers@parkistra.com"
                className="text-blue-500 hover:underline"
              >
                volunteers@parkistra.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
              {translations[language].contact_p_6}
            </h2>
            <p className="text-gray-700">
              {translations[language].contact_p_7}{" "}
              <a
                href="tel:0038651212921"
                className="text-blue-500 hover:underline"
              >
                00 386 51 212 921
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            priority={true}
            src={ContactImage}
            alt="Contact Image"
            className="rounded-full w-52 h-52 object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
