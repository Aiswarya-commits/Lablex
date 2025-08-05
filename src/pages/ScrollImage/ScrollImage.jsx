import React, { useState, useEffect } from 'react';

const images = [
  'https://labelsonline.com.au/wp-content/uploads/2019/01/2018_12-Juice-Labels-2-01.jpg',
  'https://consolidatedlabel.com/wp-content/uploads/2021/07/juice-labels-banner-og-1.jpg',
  'https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/products_gallery_images/Bottle_Jar.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3XHnv0m83xmiUlMmREDwQtHh8MaTWEhGzCTl-jbKAINM0WzThysLgvmwIsn0IAogMY8&usqp=CAU',
  'https://image.made-in-china.com/202f0j00hMoqimsFplkb/Creative-Design-Hotel-Festival-Wedding-Birthday-Party-Mineral-Water-Bottle-Label-Stickers.webp',
  'https://www.clearprint.com/wp-content/uploads/2023/03/product-labels-for-bottles-jars-components.png',
  'https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Bottle-Labels.jpg',
  'https://images-platform.99static.com//mv1PJ-X-JCbAwhGtwBJPacX2oVs=/426x133:1227x934/fit-in/500x500/projects-files/41/4140/414037/f5c7d18c-a219-4c31-bf95-49173b472bc9.png',
  'https://media.istockphoto.com/id/1223236097/vector/vector-tinted-brown-glass-or-plastic-jar-pump-bottle-dropper-bottle-package-set-with.jpg?s=612x612&w=0&k=20&c=sDU8eVuzeFd9wljPtYGI0AplindYjMX_bzU3bBiZAQM=',
  'https://i.pinimg.com/736x/42/3a/c4/423ac4622780c6cf60704c5d4f161b5c.jpg',
  'https://media.istockphoto.com/id/907999244/vector/drinking-water-bottle-ad-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=z_whrnpPLht2m1xfl7WvPBWVoOdbNQLcP_5R-wGPFzc='
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoscroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#130f21',
    overflow: 'hidden',
  };

  const arrowStyle = {
    fontSize: '2rem',
    padding: '10px',
    cursor: 'pointer',
    userSelect: 'none',
    zIndex: 2,
  };

  const galleryStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(calc(50% - ${(currentIndex + 0.5) * 320}px))`,
};

  const imageWrapperStyle = {
    margin: '0 10px',
    transition: 'all 0.4s ease',
    opacity: 0.3,
    transform: 'scale(0.9)',
  };

  const centerImageStyle = {
    ...imageWrapperStyle,
    opacity: 1,
    transform: 'scale(1.3)',
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <div onClick={handlePrev} style={arrowStyle}>{'‹'}</div>
      <div style={{ width: '960px', overflow: 'hidden' }}>
        <div style={galleryStyle}>
          {images.map((src, idx) => {
            const isCenter = idx === currentIndex;
            return (
              <div
                key={idx}
                style={isCenter ? centerImageStyle : imageWrapperStyle}
              >
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  style={{
                    width: '300px',
                    height: '400px',
                    borderRadius: '10px',
                    boxShadow: isCenter ? '0 10px 20px rgba(0,0,0,0.2)' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div onClick={handleNext} style={arrowStyle}>{'›'}</div>
    </div>
  );
};

export default ImageGallery;
