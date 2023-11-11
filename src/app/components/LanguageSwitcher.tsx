import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={handleLocaleChange}>
      <option value="sl">SI</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
