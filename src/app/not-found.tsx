"use client";
import React, { useEffect, useState } from "react";
import en from "../../locales/en.json";
import sl from "../../locales/sl.json";

type Language = "en" | "sl";

const translations: Record<Language, typeof en> = { en, sl };

export default function NotFoundPage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en";
    setLanguage(storedLang);
  }, []);
  return (
    <div>
      <h1>{translations[language].not_found_message}</h1>
    </div>
  );
}
