import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const CustomizeLabelSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scroll(0,0)
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.3 }
     
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const styles = {
    wrapper: {
      margin: 0,
      padding: 0,
    },
    imageBanner: {
      width: "100%",
      display: "block",
      margin: 0,
      padding: 0,
      border: "none",
    },
    section: {
      display: "flex",
      flexWrap: "wrap",
      background: "#08141c",
      color: "#fff",
      padding: "60px 20px",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    textContainer: {
      flex: "1 1 400px",
      maxWidth: "600px",
      padding: "20px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-50px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "2.8rem",
      color: "#fff",
      marginBottom: "16px",
      lineHeight: "1.2",
    },
    subtitle: {
      fontSize: "1.6rem",
      color: "#bbb",
      marginBottom: "24px",
      fontStyle: "italic",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.7",
      marginBottom: "24px",
      textAlign: "justify",
    },
    list: {
      marginLeft: "20px",
      marginBottom: "24px",
    },
    button: {
      padding: "12px 28px",
      background: "#cf5e00",
      color: "white",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "600",
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.wrapper}>
      <Navbar />

      {/* Image Banner with no gap */}
      <img
        src="https://www.labelsnstickers.com/media/wysiwyg/bannershapes.png"
        alt="Banner"
        style={styles.imageBanner}
      />

      {/* Content Section */}
      <section ref={sectionRef} style={styles.section}>
        <article style={styles.textContainer}>
          <h2 style={styles.heading}>Customize Label Shape</h2>
          <p style={styles.subtitle}>
            Innovative, Flexible—Tailored to Your Brand’s Identity
          </p>
          <p style={styles.paragraph}>
            <strong>Lablex Middle East Label Industries</strong> has been a
            trusted name since 2010, based in the heart of the UAE. With over a
            decade of expertise under the visionary leadership of Mr. Jagannath
            M Wagle, we specialize in crafting premium self‑adhesive labels that
            elevate product presence and brand recall.
          </p>
          <p style={styles.paragraph}>
            Why choose Lablex for customized label shapes?
          </p>
          <ul style={styles.list}>
            <li>✓ Thousands of custom cutting dies available.</li>
            <li>✓ Fully bespoke shapes to match your packaging design.</li>
            <li>✓ Enhanced shelf appeal through unique form factors.</li>
            <li>✓ Durable materials and eco-conscious inks.</li>
            <li>✓ Fast turnaround and industry-leading customer service.</li>
          </ul>
          <p style={styles.paragraph}>
            Whether circular seals, die-cut brand icons, or intricate label
            contours, our experts ensure precision, consistency, and aesthetic
            excellence in every batch.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.background = "#e74c3c")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "#cf5e00")
            }
          >
            Learn More
          </button>
        </article>
      </section>
      <Footer/>
    </div>
  );
};

export default CustomizeLabelSection;
