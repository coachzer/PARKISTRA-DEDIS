// components/Header.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchBox from './SearchBox'; // Assuming you have this component

const Header = () => {
  const { locale, asPath } = useRouter();

  // Define the navigation items with labels for each language
  const navItems = {
    home: { sl: 'Domov', en: 'Home' },
    projects: { sl: 'Projekti', en: 'Projects' },
    gallery: { sl: 'Galerija', en: 'Gallery' },
    about: { sl: 'O Nas', en: 'About us' },
    support: { sl: 'Podprite Nas', en: 'Support us' },
    contact: { sl: 'Kontakt', en: 'Contact' },
  };

  // Function to switch the locale
  const switchLocale = (newLocale) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link href="/" locale={locale}>
          <a>
            <img src="/logo.png" alt="Logo" className="h-10" />
          </a>
        </Link>
        <nav className="ml-4">
          {Object.entries(navItems).map(([key, value]) => (
            <Link key={key} href={`/${key === 'home' ? '' : key}`} locale={locale}>
              <a className="text-lg mx-2">{value[locale]}</a>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <SearchBox />
        <button onClick={() => switchLocale('sl')} className="ml-2">SI</button>
        <button onClick={() => switchLocale('en')} className="ml-2">EN</button>
      </div>
    </header>
  );
};

export default Header;
