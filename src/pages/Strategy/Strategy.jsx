import React from "react";

const StrategyCard = () => {
  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 20px",
      backgroundColor: "#08141c",
      flexWrap: "wrap",
    },
    textSection: {
      flex: 1,
      minWidth: "300px",
      maxWidth: "600px",
      padding: "20px",
      color: "white",
    },
    heading: {
      fontFamily: "cursive",
      fontSize: "2.5rem",
      color: "#e74c3c",
      textAlign: "left",
    },
    subHeading: {
      color: "white",
      marginLeft: "10px",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      textAlign: "justify",
      marginTop: "20px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },
    visualContainer: {
      position: "relative",
      width: "400px",
      height: "400px",
      margin: "30px",
    },
    topHalfImage: {
      width: "400px",
      height: "200px",
      borderTopLeftRadius: "125px",
      borderTopRightRadius: "125px",
      overflow: "hidden",
      position: "absolute",
      top: 0,
      left: 100,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    bottomHalfText: {
      width: "400px",
      height: "200px",
      background: "linear-gradient(135deg, #ff512f, #dd2476)",
      borderBottomLeftRadius: "125px",
      borderBottomRightRadius: "125px",
      position: "absolute",
      top: "200px",
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "1.4",
    },
  };

  return (
    <div style={styles.outerContainer}>
      {/* Left Side Text Section */}
      <div style={styles.textSection}>
        <h2 style={styles.heading}>
          Customize Label
          <br />
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
        <button style={styles.button}>DISCOVER MORE</button>
      </div>

      {/* Right Side Image Section */}
      <div style={styles.visualContainer}>
        <div style={styles.topHalfImage}>
          <img
            src="https://munbyn.com/cdn/shop/files/1_8947bad1-0d87-48cd-8903-7a19dc4161ff.webp?v=1712486285"
            alt="strategy"
            style={styles.image}
          />
        </div>
        <div style={styles.bottomHalfText}>
          Strategies to Create <br /> Ideal Home Page
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
