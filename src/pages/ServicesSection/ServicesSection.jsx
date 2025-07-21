import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import print from "../../assets/print.png";
import quality from "../../assets/quality.png";
import col from "../../assets/col.png";

const ServiceSection = () => {
  const navigate = useNavigate();
  const circleRef = useRef(null);
  const imageRefs = useRef([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) observer.unobserve(circleRef.current);
    };
  }, []);

  const styles = {
    wrapper: {
      background: "#08141c",
      color: "white",
      paddingTop: "80px",
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
    circle: {
      background: "linear-gradient(135deg, #ff512f, #dd2476)",
      borderRadius: "50%",
      width: "550px",
      height: "550px",
      position: "absolute",
      top: "50%",
      left: visible ? "50%" : "-100%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      transition: "left 1s ease-in-out",
    },
    imgCommon: (delay = "0s") => ({
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(50px)",
      transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
    }),
    textBlock: {
      maxWidth: "500px",
      marginLeft: "50px",
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
      <h2 style={{ ...styles.heading, fontFamily: "cursive" }}>
        Where precision meets <br />
        <span style={{ marginLeft: "280px", color: "white", fontSize: "50px" }}>
          print perfection.
        </span>
      </h2>

      <div style={styles.page}>
        {/* Rotated Image Stack with Animations */}
        <div style={styles.imageStack} ref={circleRef}>
          <div style={styles.circle}></div>

          <div
            style={{
              ...styles.imgCommon("0s"),
              zIndex: 1,
              top: "100px",
              left: "0px",
              transform: visible
                ? "rotate(-10deg) translateY(0)"
                : "rotate(-10deg) translateY(50px)",
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
              ...styles.imgCommon("0.2s"),
              zIndex: 2,
              top: "100px",
              left: "200px",
              transform: visible
                ? "rotate(5deg) translateY(0)"
                : "rotate(5deg) translateY(50px)",
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
              ...styles.imgCommon("0.4s"),
              zIndex: 3,
              top: "10px",
              left: "100px",
              transform: visible
                ? "rotate(3deg) translateY(0)"
                : "rotate(3deg) translateY(50px)",
            }}
          >
            <img
              src="https://img.freepik.com/premium-psd/juice-bottle-with-label-mockup_426604-417.jpg"
              alt="img3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div style={styles.textBlock}>
          {[
            {
              icon: print,
              title: "Precision Printing",
              text: "We utilize advanced printing technology and state-of-the-art equipment to deliver premium-quality labels...",
              route: "/precition",
            },
            {
              icon: quality,
              title: "Unmatched Quality",
              text: "Exceptional quality is our signature. With meticulous attention to detail and timely execution...",
              route: "/quality",
            },
            {
              icon: col,
              title: "Creative Collaboration",
              text: "From initial concept to final production, we work hand-in-hand with you to bring your vision to life...",
              route: "/collaborate",
            },
          ].map((item, index) => (
            <div key={index}>
              <div style={styles.sectionTitle}>
                <img src={item.icon} alt="" style={styles.icon} />
                <h3 style={{ color: "#e74c3c" }}>{item.title}</h3>
              </div>
              <p style={styles.paragraph}>{item.text}</p>
              <p style={styles.readMore} onClick={() => navigate(item.route)}>
                Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
