import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import canImage from "../../assets/canimage.png";

const HeroSection = () => {
  const [scrollDirection, setScrollDirection] = useState("in");

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("out"); // scrolling down
      } else {
        setScrollDirection("in"); // scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateDirection);
    return () => {
      window.removeEventListener("scroll", updateDirection);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Background Text */}
      <motion.div
        style={styles.backgroundText}
        initial={{ y: 300, opacity: 0 }}
        animate={
          scrollDirection === "in"
            ? { y: "0%", opacity: 1 }
            : { y: 300, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        LABELEX
      </motion.div>

      {/* Can Image */}
      <motion.div
        style={styles.imageContainer}
        initial={{ x: -300, opacity: 0 }}
        animate={
          scrollDirection === "in"
            ? { x: 0, opacity: 1 }
            : { x: 300, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <img src={canImage} alt="can" style={styles.canImage} />
      </motion.div>

      {/* Bottom Link */}
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

// Styles
const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#08141c",
    overflow: "hidden",
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  backgroundText: {
    position: "absolute",
    top: "150px",
    left: "50px",
    transform: "translate(-50%, -50%)",
    fontSize: "clamp(90px, 20vw, 360px)",
    color: "rgba(226, 196, 175, 0.3)",
    fontWeight: "bold",
    letterSpacing: "-0px",
    whiteSpace: "nowrap",
    zIndex: 0,
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
    width: "clamp(200px, 50vw, 400px)",
    transform: "rotate(25deg)",
  },
  bottomLink: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "clamp(12px, 2vw, 16px)",
    zIndex: 2,
    textAlign: "center",
  },
};

export default HeroSection;