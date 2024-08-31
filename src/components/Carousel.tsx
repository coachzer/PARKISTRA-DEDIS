import React, { useState } from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
    const images = [
        "http://parkistra.com/en/wp-content/uploads/2014/05/62RujCveti-x.jpg",
        "http://parkistra.com/en/wp-content/uploads/2014/05/Panorama2-x.jpg",
        "http://parkistra.com/en/wp-content/uploads/2014/05/100_9575-cut2.jpg",
        "http://parkistra.com/en/wp-content/uploads/2014/05/IMG_7899-x2.jpg",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="carousel mx-auto max-w-screen-xl flex justify-items-center rounded-lg">
            <div className="carousel-item relative w-full h-[300px]">
                <Image
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    priority={currentSlide === 0}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button onClick={goToPrevSlide} className="btn btn-square">
                        ❮
                    </button>
                    <button onClick={goToNextSlide} className="btn btn-square">
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
