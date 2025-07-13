import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import print from "../../assets/print.png";
import quality from "../../assets/quality.png";
import col from "../../assets/col.png";

const ServiceSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    phone: "",
    event: "",
  });

  const styles = {
    wrapper: {
      background: "#08141c",
      color: "white",
      paddingTop: "80px", // margin from top (for space below the link)
      paddingBottom: "60px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "60px",
      color: "#e74c3c",
    
    },
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "200px",
      flexWrap: "wrap",
      marginTop: "150px",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
      marginBottom: "100px",
    },
    imgCommon: {
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
    },
    textBlock: {
      maxWidth: "500px",
      marginLeft: "100px",
    },
    sectionTitle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      width: "70px",
    },
    paragraph: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    readMore: {
      color: "white",
      cursor: "pointer",
      display: "inline-block",
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* Heading under "See Our Products" */}
      <h2 style={{...styles.heading,                fontFamily: "cursive",

}}>
        Where precision meets <br />
        <span style={{ marginLeft: "280px", color: "white", fontSize: "50px" }}>
          {" "}
          print perfection.
        </span>
      </h2>

      <div style={styles.page}>
        {/* Rotated Image Stack */}
        <div style={styles.imageStack}>
          <div
  style={{
    background: "linear-gradient(135deg, #ff512f, #dd2476)", // orange to pink gradient
    borderRadius: "50%",
    width: "550px",
    height: "550px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  }}
></div>

          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-10deg)",
              top: "100px",
              left: "0px",
            }}
          >
            <img
              src="https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/products_gallery_images/Bottle_Jar.jpg"
              alt="img1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(5deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://www.averyproducts.com.au/sites/avery.au/files/styles/crop_1_1_ratio_style/public/2020-10/weprint-label-bottle-appl1.jpg?itok=thZbRili"
              alt="img2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-3deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://img.freepik.com/premium-psd/juice-bottle-with-label-mockup_426604-417.jpg"
              alt="img3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "rotate(3deg)",
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div style={styles.textBlock}>
          <div>
            <div style={styles.sectionTitle}>
              <img src={print} alt="" style={styles.icon} />
              <h3 style={{ color: "#e74c3c" }}>Precision Printing</h3>
            </div>
            <p style={styles.paragraph}>
              We utilize advanced printing technology and state-of-the-art
              equipment to deliver premium-quality labels that meet
              international standards. Every print is sharp, vibrant, and built
              to impress.
            </p>
            <p style={styles.readMore}>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>
          <br />
          <div>
            <div style={styles.sectionTitle}>
              <img src={quality} alt="" style={styles.icon} />
              <h3 style={{ color: "#e74c3c" }}>Unmatched Quality</h3>
            </div>
            <p style={styles.paragraph}>
              Exceptional quality is our signature. With meticulous attention to
              detail and timely execution, we ensure flawless results every
              time—so your brand looks its absolute best.
            </p>
            <p style={styles.readMore}>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>
          <br />
          <div>
            <div style={styles.sectionTitle}>
              <img src={col} alt="" style={styles.icon} />
              <h3 style={{ color: "#e74c3c" }}>Creative Collaboration</h3>
            </div>
            <p style={styles.paragraph}>
              From initial concept to final production, we work hand-in-hand
              with you to bring your vision to life. Our team offers expert
              guidance through every stage of your label journey.
            </p>
            <p style={styles.readMore}>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
