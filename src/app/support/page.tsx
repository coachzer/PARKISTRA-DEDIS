"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import en from "../../../locales/en.json";
import sl from "../../../locales/sl.json";

type Language = "en" | "sl";

const translations: Record<Language, typeof en> = { en, sl };

const SupportUs: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en";
    setLanguage(storedLang);
  }, []);

  return (
    <main className="bg-[#ECE3CE]">
      <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-6xl mx-auto p-8 mt-11 mb-11">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {translations[language].support_p_1}
          </h1>
          <p className="text-gray-700 mb-6">
            {translations[language].support_p_2}
          </p>
          <p className="text-gray-700 mb-6">
            <Link
              className="link link-primary"
              href="https://parkistra.com/wp-content/uploads/2023/03/AJPES-LP-2022.pdf"
            >
              {translations[language].support_p_3}
            </Link>
            . {translations[language].support_p_4}
          </p>
          <p>
            {translations[language].support_p_5}{" "}
            <Link href="mailto:info@parkistra.com">info@parkistra.com</Link>
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {translations[language].support_p_6}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-700">
                {translations[language].support_p_7}
              </h2>
              <p className="text-gray-700 mb-4">
                {translations[language].support_p_8}
              </p>
              <p className="text-gray-700 mb-4">
                {translations[language].support_p_9}{" "}
                <Link
                  className="link link-primary"
                  href="https://www.cnvos.si/pdf/genPDFfromPOST/?template=dobrodelen_pdf&amp;filename=obrazec_enprocent&amp;source_domain=Widget v1: parkistra.com&amp;selected_orgs=Park Istra|=|41963571|=|1.0&amp;name=&amp;address=&amp;postalCode=&amp;city=&amp;taxNumber="
                  download="zahteva_za_namenitev_dela_dohodnine.pdf"
                  target="_blank"
                >
                  {translations[language].support_p_10}
                </Link>{" "}
                {translations[language].support_p_11}{" "}
                <Link
                  className="link link-primary"
                  href="https://www.cnvos.si/enprocent/"
                >
                  {translations[language].support_p_12}
                </Link>
                . {translations[language].support_p_13}
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-700">
                {translations[language].support_p_14}
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>{translations[language].support_p_15}:</strong> Park
                Istra
                <br />
                <strong>{translations[language].support_p_16}:</strong> Kastelec
                21, 6275 Črni Kal
                <br />
                <strong>IBAN:</strong> SI56 6100 0001 3661 536 <br />
                (Delavska hranilnica d.d., Ljubljana)
                <br />
                <strong>SWIFT/BIC:</strong> HDELSI22
                <br />
                <strong>{translations[language].support_p_17}:</strong> CHAR
                <br />
                <strong>{translations[language].support_p_18}:</strong>{" "}
                {translations[language].support_p_19}
              </p>
              <Link
                className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                href="https://www.paypal.com/donate/?token=KqJjBanE4sefclXYIaVT_65jTALCLkrhwEpGfom7rseA4VuqcRqEZ410_hkD2ZLumE-tCCWuiOgK6E2p"
                target="_blank"
              >
                {translations[language].support_p_20}
              </Link>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {translations[language].support_p_21}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default SupportUs;
