// Galery.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/galerija/galery-images";
import "../styles/Galery.css";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="gallery">
      <h1 className="gallery-title">Galerija naših radova</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Galerija ${index + 1}`}
              className="swiper-image"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={photoIndex}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />
    </div>
  );
};

export default Gallery;
