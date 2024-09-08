"use client";

import { useState, useEffect } from "react";

// Define a type for the supported languages
type Language = "en" | "sl";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");
  // Load language from localStorage on initial load
  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en"; // Cast to Language
    setLanguage(storedLang);
  }, []);

  const changeLanguage = (lang: "en" | "sl") => {
    setLanguage(lang);
    document.cookie = `lang=${lang}; path=/`; // Set the language in the cookie
    localStorage.setItem("lang", lang);
    window.location.reload(); // Reload to reflect the language change
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 text-sm ${
          language === "en" ? "text-green-500" : "text-gray-500"
        } hover:text-green-500`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("sl")}
        className={`px-2 py-1 text-sm ${
          language === "sl" ? "text-green-500" : "text-gray-500"
        } hover:text-green-500`}
      >
        SL
      </button>
    </div>
  );
}
