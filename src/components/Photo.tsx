import React, { useState, useEffect } from 'react';

interface Photo {
  src: string;
  width: number;
  height: number;
}

interface GalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft') {
      navigatePhotos(-1);
    } else if (event.key === 'ArrowRight') {
      navigatePhotos(1);
    }
  };

  const navigatePhotos = (step: number) => {
    if (selectedPhoto) {
      const currentIndex = photos.findIndex((photo) => photo === selectedPhoto);
      const newIndex = (currentIndex + step + photos.length) % photos.length;
      openModal(photos[newIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedPhoto]);

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '10px',
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              width: `auto`,
              height: `auto`,
            }}
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.src}
              alt={`photo-${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeModal}
        >
          <img
            src={selectedPhoto.src}
            alt="selected-photo"
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
