"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// replace with your app element id

type ImageData = {
    id: string;
    caption: string;
    media_url: string;
    timestamp: string;
    media_type: string;
    permalink: string;
    comment_count: number;
    children?: { data: { media_url: string }[] };
};

const Instagram: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<ImageData | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            Modal.setAppElement("body");

            const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,children{media_url},timestamp,media_type,permalink,comment_count&access_token=IGQWRPTUVKWmdyRGlldzQyRklpMTBrV25veXBQVnVsYU0zcVZAOMExoZAl9scWt5VWpGTmF5cTFlSDNXNFhCME84aUVRSFZA1ZAnc0ZA2ZApa2w0MlplcTZAtN3NnVDdPZAXdiOHJxMzZAKYmEwbWNNOXhGa3ZAXRWpCWC1GZA1UZD`; //${process.env.INSTAGRAM_KEY}
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setImages(data.data);
        };

        fetchImages();
    }, []);

    const openModal = (image: ImageData) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const displayCarousel = () => {
        if (currentImage?.children?.data && currentImage.children.data.length > 0) {
            return (
                <div className="max-w-[85%] mx-auto flex justify-content-center">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        autoPlay={true}
                        interval={1000}
                        thumbWidth={100}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        {currentImage.children.data.map((carouselImage, index) => (
                            <div key={index}>
                                <img src={carouselImage.media_url} alt={`carousel-${index}`} />
                                {currentImage.caption && (
                                    <p className="legend">{currentImage.caption}</p>
                                )}
                            </div>
                        ))}
                    </Carousel>
                </div>
            );
        }
        return null; // Handle case where carousel media is not present
    };

    const displaySingleImage = () => {
        if (currentImage) {
            return (
                <div className="max-w-[85%] mx-auto flex justify-content-center">
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                        <img src={currentImage.media_url} alt={currentImage.caption} />
                        {currentImage.caption && <p className="legend">{currentImage.caption}</p>}
                    </Carousel>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-4 justify-items-center p-4">
            {images &&
                images
                    .filter((image) => image.media_type !== "VIDEO" && image.media_type !== "IGTV")
                    .map((image) => (
                        <div key={image.id}>
                            <div onClick={() => openModal(image)}>
                                <Image
                                    src={image.media_url}
                                    alt={image.caption}
                                    width={400}
                                    height={300}
                                    className="rounded-2xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Instagram Image Modal"
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                    },
                    content: {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        top: "5%",
                        left: "30%",
                        right: "30%",
                        bottom: "5%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                    },
                }}
            >
                {currentImage && (
                    <div>
                        <button onClick={closeModal} className="ml-2 text-4xl">
                            ×
                        </button>
                        {currentImage.media_type === "CAROUSEL_ALBUM"
                            ? displayCarousel()
                            : displaySingleImage()}
                    </div>
                )}
            </Modal>
        </div>
    );
};
export default Instagram;
