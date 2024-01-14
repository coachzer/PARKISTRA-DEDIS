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
    children?: { data: { media_url: string; media_type: string }[] };
};

const Instagram: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<ImageData | null>(null);
    const timestampCorrect = currentImage?.timestamp?.replace("T", " ").replace("+0000", "");
    useEffect(() => {
        const fetchImages = async () => {
            Modal.setAppElement("body");

            const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,children{media_url,media_type},timestamp,media_type,permalink,comment_count&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
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
                <div>
                    <div className="max-w-[80%] mx-auto py-10 flex justify-content-center ">
                        <Carousel
                            showArrows={true}
                            showStatus={false}
                            autoPlay={true}
                            interval={4000}
                            thumbWidth={100}
                            infiniteLoop={true}
                            showThumbs={false}
                        >
                            {currentImage.children.data.map((carouselImage, index) => (
                                <div key={index}>
                                    {/* <img
                                        src={carouselImage.media_url}
                                        className="rounded-2xl"
                                        alt={`carousel-${index}`}
                                    /> */}
                                    {carouselImage.media_type === "VIDEO" ? (
                                        <video controls className="rounded-2xl shadow-lg">
                                            <source
                                                src={carouselImage.media_url}
                                                type="video/mp4"
                                            />
                                        </video>
                                    ) : (
                                        <Image
                                            src={carouselImage.media_url}
                                            alt={`carousel-${index}`}
                                            width={400}
                                            height={300}
                                            className="rounded-2xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                                        />
                                    )}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            );
        }
        return null; // Handle case where carousel media is not present
    };

    const displaySingleImage = () => {
        if (currentImage) {
            return (
                <div>
                    <div className="max-w-[80%] mx-auto flex justify-content-center">
                        <Image
                            src={currentImage.media_url}
                            alt={currentImage.caption}
                            width={400}
                            height={300}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-4 justify-items-center p-4 align-middle">
            {images &&
                images
                    .filter((image) => image.media_type !== "IGTV")
                    .map((image) => (
                        <div key={image.id} className="grid items-center">
                            <div onClick={() => openModal(image)}>
                                {image.media_type === "VIDEO" ? (
                                    <video className="rounded-2xl shadow-lg" controls>
                                        <source src={image.media_url} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={image.media_url}
                                        alt={image.caption}
                                        width={400}
                                        height={300}
                                        className="rounded-2xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                                    />
                                )}
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
                        display: "flex",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                    },
                    content: {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        margin: "0% 25%",
                        top: "1%",
                        bottom: "1%",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        // boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)",
                        overflow: "auto",
                        border: "none",
                        outline: "none",
                    },
                }}
            >
                {currentImage && (
                    <div>
                        <div>
                            {/*  <button onClick={closeModal} className="ml-2 text-4xl">
                            ×
                        </button> */}
                            {currentImage.media_type === "CAROUSEL_ALBUM"
                                ? displayCarousel()
                                : displaySingleImage()}
                        </div>
                        <div className="mt-2 bg-[rgb(1,1,1,0.9)] max-w-[65%] mx-auto rounded-xl text-white text-center">
                            <p>{currentImage.caption}</p>
                            <p>{timestampCorrect}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};
export default Instagram;
