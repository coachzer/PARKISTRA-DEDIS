"use client";
// components/Carousel.tsx
import { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Carousel.module.css"; // Import your CSS module
import Image from "next/image";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [setActiveIndex, images]);

    const prevImage = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeIndex, nextImage]);

    return (
        <div className="flex overflow-hidden w-full h-full relative">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    height={1280}
                    width={1920}
                    alt={`Image ${index + 1}`}
                    className={`w-full h-[32rem] object-cover ${
                        index === activeIndex ? styles.active : styles.inactive
                    }`}
                />
            ))}
            <h1 className="absolute bottom-5 left-5 text-[#ECE3CE] text-4xl font-bold bg-black p-2 bg-opacity-30">
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
