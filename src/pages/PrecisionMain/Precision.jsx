import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Precision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

{/* Fixed Hero Image Section */}
<div
  style={{
    height: "100vh",
    backgroundImage: `url("https://www.resourcelabel.com/wp-content/uploads/2022/02/RLG-flexo-vs-digital-image-2.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "0 20px",
  }}
>
  <h2 style={{ color: "#e74c3c", fontStyle: "italic", fontSize: "32px" }}>
    Attitude that acts as a guiding principle
  </h2>
  <p style={{ maxWidth: "800px", color: "white", fontSize: "18px" }}>
    At Lablex, we believe that excellence in label manufacturing is rooted
    in a relentless commitment to innovation, quality, and sustainability.
    Our philosophy is not just a set of principles—it’s a culture we live
    by, a commitment to our clients, and a dedication to continuous
    improvement.
  </p>
</div>

      {/* Sections */}
      {[
        {
          title: "Printing",
          image:
            "https://easylabeling.com/wp-content/uploads/Label-printing-machine-with-fast-moving-labels.jpg",
          description:
            "The Flexo machine installed at our press includes technologies from Germany and Brazil. These machines allow printing of up to 8 colors with options of UV, cold foil. We use flexography to manufacture labels using flexible relief plates on various substrates. Keeping up with technology is key to fulfilling our mission of providing the best quality labels.",
          extra:
            "We’re also integrating automation, real-time monitoring, and cloud connectivity to ensure precision and reduce waste across every job.",
        },
        {
          title: "Quality",
          image:
            "https://theparkgroup.co.uk/wp-content/uploads/2023/04/label-printing-1.jpg",
          description:
            "We are committed to design and manufacture of products of the highest quality. Our system guarantees that products meet customer expectations through development, design, and production. We tailor quality systems to global customer needs and constantly improve based on strict process control.",
          extra:
            "Our facility is ISO 9001:2015 certified, and our systems comply with international quality standards through continuous audits.",
        },
        {
          title: "Sustainability Commitment",
          image:
            "https://kwalityoffset.com/wp-content/uploads/2023/05/RLG-flexo-vs-digital-image-2.jpg",
          description:
            "We are dedicated to sustainable practices by using eco-friendly inks, recyclable materials, and energy-efficient technologies.",
          extra:
            "We also offer biodegradable and compostable label solutions upon request, reducing environmental impact without compromising quality.",
        },
        {
          title: "Research & Development",
          image:
            "https://i.ytimg.com/vi/uvc2y6HETkI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHoCYAC0AWKAgwIABABGEwgZChlMA8=&rs=AOn4CLDn4vKOgBznjjN1Pu00RvVfSYSutQ",
          description:
            "We invest heavily in R&D each year. By working closely with suppliers and customers, we create innovations that define market standards.",
          extra:
            "Our efforts include development of RFID-integrated, tamper-evident, and smart labels using AI-driven process optimizations.",
        },
        {
          title: "Customer Centricity",
          image:
            "https://www.3mphilippines.com.ph/wps/wcm/connect/9f7cde9e-0492-4400-9966-740725e6e391/versatile-durable-label-video-1682961-270px.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9f7cde9e-0492-4400-9966-740725e6e391-p2mGoIj",
          description:
            "Our clients are at the heart of what we do. We collaborate from idea to implementation, offering custom solutions for every label need.",
          extra:
            "With dedicated support and feedback systems, our success is truly measured by the satisfaction and success of our customers.",
        },
        {
          title: "Global Presence",
          image:
            "https://www.shutterstock.com/image-photo/view-closeup-large-inkjet-printer-260nw-1276835536.jpg",
          description:
            "With partners across the Middle East, Europe, and Asia, Lablex is recognized globally as a leader in label printing solutions.",
          extra:
            "Our logistics and export systems ensure seamless delivery and service across international borders.",
        },
      ].map((section, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            gap: "40px",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          <img
            src={section.image}
            alt={section.title}
            style={{
              width: "350px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <div style={{ maxWidth: "600px" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "10px" ,color:"#e74c3c"}}>
              {section.title}
            </h3>
            <p style={{ marginBottom: "10px" }}>{section.description}</p>
            <p style={{ fontStyle: "italic", color: "#555" }}>
              {section.extra}
            </p>
          </div>
        </div>
        
      ))}
      <Footer/>
      
    </div>
  );
};

export default Precision;
