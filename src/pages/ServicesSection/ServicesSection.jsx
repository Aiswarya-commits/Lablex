import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import print from "../../assets/print.png";
import quality from "../../assets/quality.png"
import col from "../../assets/col.png"

const ServiceSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Form submitted:", formData);
      navigate("/success");
    }, 2000);
  };
  const eventsList = [
    "MICHAEL SMITH IN CONCERT",
    "STREET ART FEST",
    "ANABELLE IN CONCERT",
    "90'S DISCO NIGHT",
    "MODERN BALLET",
    "SMOKE SHOW",
    "DJ NIGHT",
    "DJ ON RENT IN BHIWADI",
    "COCKTAIL PARTY",
    "WATER THEME PARTY",
  ];

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fff",
      fontFamily: "Arial, sans-serif",
      color: "white",
      gap: "200px",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
      marginBottom: "100px",
      marginRight: "100px",
    },
    imgCommon: {
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
    },
    loginBox: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      width: "450px",
      boxShadow: "0 0 10px #222",
    },
    logo: {
      fontFamily: "'Grand Hotel', cursive",
      fontSize: "40px",
      textAlign: "center",
      marginBottom: "20px",
      color: "#800080",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      background: "white",
      border: "1px solid #333",
      borderRadius: "6px",
      color: "#000",
    },
    button: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      backgroundColor: "#800080",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "#fff",
    },
    divider: {
      textAlign: "center",
      margin: "15px 0",
      position: "relative",
      color: "#666",
    },
    dividerLine: {
      content: "''",
      height: "1px",
      background: "#333",
      position: "absolute",
      top: "50%",
      width: "45%",
    },
    fbButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#0095f6",
      fontWeight: "bold",
      margin: "10px 0",
      cursor: "pointer",
    },
    forgot: {
      textAlign: "center",
      color: "#999",
      fontSize: "14px",
      marginTop: "10px",
    },
    signupBox: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#ccc",
    },
    signupLink: {
      color: "#0095f6",
      cursor: "pointer",
      marginLeft: "5px",
    },
  };

  return (
    <div>
      <div style={styles.page}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-10deg)",
              top: "100px",
              left: "0px",
              right: "100px",
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
                right: "100px",
              }}
            />
          </div>
        </div>

        <div style={{ color: "black" }}>
          <div>
            <div style={{ display: "flex" }}>
              <img src={print} alt="" style={{ width: "70px" }} />
              <h3 style={{ color: "black" }}> Precision Printing</h3>
            </div>
            <p>
              We utilize advanced printing technology and state-of-the-art
              equipment <br /> to deliver premium-quality labels that meet
              international standards. Every <br /> print is sharp, vibrant, and
              built to impress.
            </p>
            <p>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>{" "}
          <br />
          <div>
            <div style={{ display: "flex" }}>
              <img src={quality} alt="" style={{ width: "70px" }} />
              <h3 style={{ color: "black" }}> Unmatched Quality</h3>
            </div>
            <p>
              Exceptional quality is our signature. With meticulous attention to
              detail and <br /> timely execution, we ensure flawless results
              every time—so your brand looks <br />
              its absolute best.
            </p>
            <p>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>{" "}
          <br />
          <div>
            <div style={{ display: "flex" }}>
              <img src={col} alt="" style={{ width: "70px" }} />
              <h3 style={{ color: "black" }}> Creative Collaboration</h3>{" "}
            </div>
            <p>
              From initial concept to final production, we work hand-in-hand
              with you to bring <br /> your vision to life. Our team offers
              expert guidance through every stage of your <br /> label journey.
            </p>
            <p>
              Read More <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceSection;
