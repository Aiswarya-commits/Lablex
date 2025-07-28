import React from "react";

const HeroFixedImage = ({ image, title, height = "100vh", overlayColor = "rgba(0, 0, 0, 0.6)" }) => {
  return (
    <div
      style={{
        height: height,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          backgroundColor: overlayColor,
          padding: "30px 60px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#ffcc00", margin: 0 }}>{title}</h1>
      </div>
    </div>
  );
};

export default HeroFixedImage;
