import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomizeSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const styles = {
    stickyWrapper: {
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      zIndex: 0,
    },
    fixedSection: {
      position: "sticky",
      top: 0,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#08141c",
      flexWrap: "wrap",
      padding: "50px 20px",
      zIndex: 1,
    },
    textSection: {
      flex: 1,
      minWidth: "300px",
      maxWidth: "600px",
      padding: "20px",
      color: "white",
      zIndex: 2,
    },
    heading: {
      fontFamily: "cursive",
      fontSize: "2.5rem",
      color: "#e74c3c",
      textAlign: "center",
    },
    subHeading: {
      marginLeft: "180px",
      color: "white",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "white",
      textAlign: "justify",
      marginTop: "20px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      background: "linear-gradient(135deg, #ff512f, #dd2476)",
      borderRadius: "20px",
      marginLeft: "150px",
      color: "#fff",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.4s ease",
    },
    visualSection: {
      flex: 1,
      minWidth: "300px",
      textAlign: "center",
      padding: "20px",
      position: "relative",
      height: "550px",
    },
    circle: {
      background: "linear-gradient(135deg, #ff512f, #dd2476)",
      borderRadius: "50%",
      width: "550px",
      height: "550px",
      position: "absolute",
      top: "50%",
      left: visible ? "50%" : "-100%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      transition: "left 1s ease-in-out",
    },
    image: {
      maxWidth: "500px",
      position: "relative",
      zIndex: 2,
      borderRadius: "30px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(50px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
      top: "70px",
    },
  };

  return (
    <div ref={sectionRef} style={styles.stickyWrapper}>
      <div style={styles.fixedSection}>
        <div style={styles.textSection}>
          <h2 style={styles.heading}>
            Customize Label <br />
            <span style={styles.subHeading}>Size & Shape</span>
          </h2>
          <p style={styles.paragraph}>
            Whether you need a certain label shape to fit onto your product’s
            container, or just want your labels to look interesting, there are a
            variety of benefits for getting custom shape labels. For one thing,
            labels with a unique shape are more likely to stand out in comparison
            to standard shapes with similar artwork. We carry over thousands of
            custom cutting dies and can even make a special custom shape as you
            desire.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.background = "#333";
            }}
            onMouseLeave={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #ff512f, #dd2476)";
            }}
            onClick={() => navigate("/sizeandshape")}
          >
            DISCOVER MORE
          </button>
        </div>

        <div style={styles.visualSection}>
          <div style={styles.circle}></div>
          <img
            src="https://jabac.com/wp-content/uploads/2022/10/thermal-label-printer.jpg"
            alt="Custom Label Products"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeSection;
