import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    // Check if language is already in localStorage
    const storedLang = localStorage.getItem("lang");
    if (!storedLang) {
      // Set default language if not found
      localStorage.setItem("lang", "en"); // Default to English
    }
  }, []);
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;