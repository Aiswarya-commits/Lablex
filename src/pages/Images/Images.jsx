import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Images = () => {
  const images = [
    {
      src: 'https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/product/Glass-Bottle-Lables.jpg',
      style: { top: '0', left: '20%', transform: 'rotate(-6deg)' }
    },
    {
      src: 'https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Bottle-Labels.jpg',
      style: { top: '30px', left: '40%', transform: 'rotate(8deg)' }
    },
    {
      src: 'https://5.imimg.com/data5/SELLER/Default/2021/12/XL/SI/CQ/17230985/glass-bottle-label-500x500.jpg',
      style: { top: '70px', left: '60%', transform: 'rotate(-8deg)' }
    },
    {
      src: 'https://5.imimg.com/data5/SELLER/Default/2021/4/WW/IN/WI/941147/cold-press-juice-bottle-500x500.jpg',
      style: { top: '90px', left: '30%', transform: 'rotate(5deg)' }
    }
  ];

  return (
    <div
      style={{
        position: 'relative',
        background: 'black',
        color: 'white',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Top Left - Menu Icon */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <div style={{ cursor: 'pointer' }}>
          <div style={{ width: 20, height: 2, background: 'white', margin: '4px 0' }}></div>
          <div style={{ width: 20, height: 2, background: 'white', margin: '4px 0' }}></div>
          <div style={{ width: 20, height: 2, background: 'white', margin: '4px 0' }}></div>
        </div>
      </div>

      {/* Top Right - Contact Button */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <button
          style={{
            padding: '10px 18px',
            border: '1px solid white',
            background: 'transparent',
            color: 'white',
            borderRadius: '999px',
            cursor: 'pointer',
            transition: '0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          Get in touch
        </button>
      </div>

      {/* Center Logo */}
      

      {/* Image Collage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          marginTop: '50px'
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            style={{
              position: 'absolute',
              width: '200px',
              height: '150px',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              ...img.style
            }}
            onMouseEnter={(e) => {
              e.target.style.transform += ' scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = img.style.transform;
            }}
          />
        ))}
      </div>

      {/* View Portfolio */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '80px',
          fontSize: '14px',
          letterSpacing: '2px'
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: 'white',
            borderBottom: '1px solid white',
            paddingBottom: '2px',
            transition: '0.3s'
          }}
          onMouseEnter={(e) => (e.target.style.color = '#ccc')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          View Portfolio →
        </a>
      </div>

      {/* Social Icons */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        <FaInstagram style={{ color: 'white' }} />
        <FaTwitter style={{ color: 'white' }} />
        <FaFacebookF style={{ color: 'white' }} />
      </div>
    </div>
  );
};

export default Images;