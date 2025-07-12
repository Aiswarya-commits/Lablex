import React from "react";
import canImage from "../../assets/canimage.png";

const HeroSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
      </div>

      {/* Center Background Text */}
      <div style={styles.backgroundText}>LABLEX</div>

      {/* Can Image */}
      <div style={styles.imageContainer}>
        <img src={canImage} alt="can" style={styles.canImage} />
      </div>


      {/* Bottom Center Link */}
      <div style={styles.bottomLink}>
        <a
          href="#products"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          See Our Products
        </a>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    color: "black",
    fontFamily: "'Helvetica Neue', sans-serif",
    overflow: "hidden",
  },
  sidebar: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    fontSize: "12px",
    letterSpacing: "2px",
    zIndex: 2,
  },
  verticalText: {
    transform: "rotate(-90deg)",
    transformOrigin: "left",
    whiteSpace: "nowrap",
  },
  backgroundText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "380px",
    color: "rgba(228, 116, 41, 0.3)",
    fontWeight: "bold",
    zIndex: 0,
    letterSpacing: "-5px",
    whiteSpace: "nowrap",
  },
  imageContainer: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  canImage: {
    width: "400px",
    transform: "rotate(25deg)",
  },
  rightText: {
    position: "absolute",
    right: "40px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "12px",
    lineHeight: "1.6",
    maxWidth: "180px",
    zIndex: 2,
  },
  bottomLink: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "14px",
    zIndex: 2,
  },
};

export default HeroSection;
