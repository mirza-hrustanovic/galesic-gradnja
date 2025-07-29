import "../styles/Galery.css";
import images from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/galerija/galery-images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="gallery">
      <h1 className="gallery-title">Galerija naših radova</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <img src={image.src} alt={`Galerija ${index + 1}`} />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={photoIndex}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />
    </div>
  );
};

export default Gallery;