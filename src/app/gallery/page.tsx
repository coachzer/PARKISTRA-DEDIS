"use client"

import React from 'react';
import Photo from '@/components/Photo';

const photos = [
  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },

  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  // Add more photos as needed
  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },

  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },

  {
    src: '/carousel1.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel2.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/carousel3.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project1ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project2ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
  {
    src: '/project3ParkIstra.jpeg',
    width: 15,
    height: 10,
  },
];

const GalleryPage: React.FC = () => {
  return (
    <div  className = "bg-[#ECE3CE] p-2">
        <Photo photos={photos}/>
    </div>
  );
};

export default GalleryPage;
