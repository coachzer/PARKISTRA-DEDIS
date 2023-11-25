// components/Carousel.tsx
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTransition(true);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setTransition(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 50000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    setTransition(false);
  };

  return (
    <div className="flex overflow-hidden w-full h-full">
        
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className = "w-full h-screen object-cover"
        onTransitionEnd={handleTransitionEnd}
        />
      <h1 className="absolute bottom-4 left-4 text-[#ECE3CE] drop-shadow-xl text-3xl font-bold ">
        Parkistra, brings hero in you!
      </h1>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded cursor-pointer transition-bg duration-300 hover:bg-opacity-75"
        onClick={prevImage}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded cursor-pointer transition-bg duration-300 hover:bg-opacity-75"
        onClick={nextImage}
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
