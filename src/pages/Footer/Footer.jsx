import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer
      style={{
        backgroundColor: "#08141c",
        color: "white",
        padding: isMobile ? "40px 20px 20px" : "60px 30px 30px",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        fontFamily: "Segoe UI, sans-serif",
        boxShadow: "0 -5px 30px rgba(0, 0, 0, 0.2)",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "space-between",
          gap: "40px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Company Info */}
        <div
          style={{ flex: "1 1 300px", marginLeft: isMobile ? "0" : "150px" }}
        >
          <h2
            style={{
              color: "#FF6F3C",
              fontSize: "26px",
              marginBottom: "10px",
              marginRight: "50px",
            }}
          >
            LABELEX
          </h2>
          <p
            style={{
              fontWeight: "bold",
              color: "#00BCD4",
              marginBottom: "10px",
            }}
          >
            SELF ADHESIVE LABELS MANUFACTURING LLC
          </p>
          <p style={{ marginBottom: "10px" }}>
            Warehouse No: 14, Industrial Zone 1, Jurf
            <br />
            Ajman, United Arab Emirates
          </p>
          <p style={{ marginBottom: "10px" }}>
            Tel:{" "}
            <a href="tel:+97165205240" style={{ color: "#ccc" }}>
              +971 6 5205240
            </a>
            <br />
            Mob:{" "}
            <a href="tel:0565405252" style={{ color: "#ccc" }}>
              0565405252
            </a>
          </p>
          <p style={{ marginBottom: "10px" }}>
            TRN: <strong>104780815700003</strong>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@labelex.com" style={{ color: "#ccc" }}>
              info@labelex.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ color: "#FF6F3C", marginBottom: "15px" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>
              <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/services"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ color: "#FF6F3C", marginBottom: "15px" }}>
            Our Services
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li style={{ color: "#ccc" }}>Label Design & Printing</li>
            <li style={{ color: "#ccc" }}>Custom Shapes & Sizes</li>
            <li style={{ color: "#ccc" }}>Thermal Labels</li>
            <li style={{ color: "#ccc" }}>Barcode & QR Labels</li>
            <li style={{ color: "#ccc" }}>Product Packaging</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#aaa", marginBottom: "10px" }}>
          &copy; {new Date().getFullYear()} Labelex. All Rights Reserved.
        </p>
        <div>
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: "40px", margin: "0 10px" }}
          />
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: "40px", margin: "0 10px" }}
          />
          <img
            src={twitter}
            alt="Twitter"
            style={{ width: "40px", margin: "0 10px" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
