import { useRouter } from 'next/router';

const BilingualButton = ({ sloText, engText, onClick }) => {
  const { locale } = useRouter();
  const buttonText = locale === 'sl' ? sloText : engText;

  return (
    <button onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default BilingualButton;
