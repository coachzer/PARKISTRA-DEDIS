"use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Modal from "react-modal";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// // replace with your app element id

// type ImageData = {
//     id: string;
//     caption: string;
//     media_url: string;
//     timestamp: string;
//     media_type: string;
//     permalink: string;
//     comment_count: number;
//     children?: { data: { media_url: string; media_type: string }[] };
// };

// let cache: ImageData[] = [];

// const Instagram: React.FC = () => {
//     const [images, setImages] = useState<ImageData[]>([]);
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [currentImage, setCurrentImage] = useState<ImageData | null>(null);
//     const timestampCorrect = currentImage?.timestamp?.replace("T", " ").replace("+0000", "");
//     useEffect(() => {
//         const fetchImages = async () => {
//             Modal.setAppElement("body");
//             if (cache.length > 0) {
//                 setImages(cache);
//             } else {
//                 const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,children{media_url,media_type},timestamp,media_type,permalink,comment_count&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 setImages(data.data);
//             }
//         };

//         fetchImages();
//     }, []);

//     const openModal = (image: ImageData) => {
//         setCurrentImage(image);
//         setModalIsOpen(true);
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     const displayCarousel = () => {
//         if (currentImage?.children?.data && currentImage.children.data.length > 0) {
//             return (
//                 <div>
//                     <div className="max-w-[80%] mx-auto py-10 flex justify-content-center ">
//                         <Carousel
//                             showArrows={true}
//                             showStatus={false}
//                             autoPlay={true}
//                             interval={4000}
//                             thumbWidth={100}
//                             infiniteLoop={true}
//                             showThumbs={false}
//                             renderArrowPrev={(clickHandler, hasPrev) => {
//                                 return (
//                                     <div
//                                         className={`${
//                                             hasPrev ? "absolute" : "hidden"
//                                         } top-1/2 transform -translate-y-1/2 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
//                                         onClick={clickHandler}
//                                     >
//                                         <FaArrowCircleLeft className="w-9 h-9 text-white" />
//                                     </div>
//                                 );
//                             }}
//                             renderArrowNext={(clickHandler, hasNext) => {
//                                 return (
//                                     <div
//                                         className={`${
//                                             hasNext ? "absolute" : "hidden"
//                                         } top-1/2 transform -translate-y-1/2 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
//                                         onClick={clickHandler}
//                                     >
//                                         <FaArrowCircleRight className="w-9 h-9 text-white" />
//                                     </div>
//                                 );
//                             }}
//                         >
//                             {currentImage.children.data.map((carouselImage, index) => (
//                                 <div key={index}>
//                                     {/* <img
//                                         src={carouselImage.media_url}
//                                         className="rounded-2xl"
//                                         alt={`carousel-${index}`}
//                                     /> */}
//                                     {carouselImage.media_type === "VIDEO" ? (
//                                         <div className="flex justify-center items-center h-full">
//                                             <video
//                                                 controls
//                                                 className="rounded-2xl shadow-lg max-w-full h-auto"
//                                             >
//                                                 <source
//                                                     src={carouselImage.media_url}
//                                                     type="video/mp4"
//                                                 />
//                                             </video>
//                                         </div>
//                                     ) : (
//                                         <Image
//                                             priority={true}
//                                             src={carouselImage.media_url}
//                                             alt={`carousel-${index}`}
//                                             width={400}
//                                             height={300}
//                                             layout="responsive"
//                                             objectFit="contain"
//                                             objectPosition="center"
//                                             className="rounded-2xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
//                                         />
//                                     )}
//                                 </div>
//                             ))}
//                         </Carousel>
//                     </div>
//                 </div>
//             );
//         }
//         return null; // Handle case where carousel media is not present
//     };

//     const displaySingleImage = () => {
//         if (currentImage) {
//             return (
//                 <div>
//                     <div className="w-full mx-auto flex justify-content-center">
//                         <Image
//                             priority={true}
//                             src={currentImage.media_url}
//                             alt={currentImage.caption}
//                             width={400}
//                             height={300}
//                             layout="responsive"
//                             objectFit="contain"
//                             objectPosition="center"
//                             className="rounded-2xl"
//                         />
//                     </div>
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div className="gap-4 grid grid-cols-1 md:grid-cols-4 justify-items-center p-4 align-middle">
//             {images &&
//                 images
//                     .filter((image) => image.media_type !== "IGTV")
//                     .map((image) => (
//                         <div key={image.id} className="grid items-center">
//                             <div onClick={() => openModal(image)}>
//                                 {image.media_type === "VIDEO" ? (
//                                     <div className="flex flex-col items-center">
//                                         <video
//                                             className="rounded-2xl shadow-lg max-h-[400px]"
//                                             controls
//                                         >
//                                             <source src={image.media_url} type="video/mp4" />
//                                         </video>
//                                         <div className="text-center max-w-[400px] mt-2">
//                                             <p>{image.caption}</p>
//                                             <p>{timestampCorrect}</p>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="flex flex-col items-center">
//                                         <Image
//                                             priority={true}
//                                             src={image.media_url}
//                                             alt={image.caption}
//                                             width={400}
//                                             height={300}
//                                             className="rounded-2xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
//                                         />
//                                         <div className="text-center max-w-[400px] mt-2">
//                                             <p>{image.caption}</p>
//                                             <p>{timestampCorrect}</p>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}

//             {/* Modal */}
//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Instagram Content Modal"
//                 style={{
//                     overlay: {
//                         position: "fixed",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: "rgba(0, 0, 0, 0.8)",
//                     },
//                     content: {
//                         position: "absolute",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         margin: "0% 30%",
//                         backgroundColor: "rgba(255, 255, 255, 0)",
//                         // boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)",
//                         overflow: "auto",
//                         border: "none",
//                         outline: "none",
//                     },
//                 }}
//             >
//                 {currentImage && (
//                     <div>
//                         <div>
//                             {/*  <button onClick={closeModal} className="ml-2 text-4xl">
//                             ×
//                         </button> */}
//                             {currentImage.media_type === "CAROUSEL_ALBUM"
//                                 ? displayCarousel()
//                                 : displaySingleImage()}
//                         </div>
//                         {/* <div className="mt-2 bg-[rgb(1,1,1,0.9)] max-w-[65%] mx-auto rounded-xl text-white text-center">
//                             <p>{currentImage.caption}</p>
//                             <p>{timestampCorrect}</p>
//                         </div> */}
//                     </div>
//                 )}
//             </Modal>
//         </div>
//     );
// };
// export default Instagram;

import { useEffect, useState } from 'react';
import "./gallery-module.css"

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
};

const Gallery = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log("Fetching posts from /api/instagram");
        const res = await fetch('/api/instagram');
        console.log("Response status:", res.status);
        
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Data received:", data);
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setError("Failed to load gallery");
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="gallery">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>
            {truncateText(post.caption, 100)}
            {post.caption.length > 100 && (
              <a href={post.permalink} target="_blank" rel="noopener noreferrer"> Read more</a>
            )}
          </p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="view-instagram">
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
