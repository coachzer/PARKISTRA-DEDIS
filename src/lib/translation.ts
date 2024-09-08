import { cookies } from "next/headers"; // Access cookies in Next.js 13+ for server-side
import en from "../../locales/en.json";
import sl from "../../locales/sl.json";

type Language = "en" | "sl";

// Define a structure for the translations
const translations: Record<Language, typeof en> = { en, sl };

// Utility function to detect language and return both language and translations
export function getTranslation() {
  // Get the "lang" cookie from the request
  const cookieStore = cookies();
  const language = (cookieStore.get("lang")?.value as Language) || "en";

  console.log("Language detected:", language);

  // Return both the current language and the corresponding translations
  return {
    language,
    translation: translations[language],
  };
}
