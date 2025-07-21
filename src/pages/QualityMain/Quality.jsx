import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Quality = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const sections = [
    {
      title: "Printing",
      image:
        "https://jabac.com/wp-content/uploads/2022/10/thermal-label-printer.jpg",
      description:
        "High-resolution printing with long-lasting colors for every type of label, ensuring clarity and quality.",
    },
    {
      title: "Adhesives",
      image:
        "https://www.bluelabelpackaging.com/wp-content/uploads/2022/09/7ColorLabels-Body1-1024x789.jpg",
      description:
        "Industrial-strength adhesives tailored for different surfaces and environments, providing perfect bonding.",
    },
    {
      title: "Materials",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/5/QQ/DR/QE/117956958/digital-label-printing-service.jpeg",
      description:
        "From paper to synthetic substrates, we source premium-grade materials suitable for every labeling need.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div style={{ position: "relative" }}>
        <img
          src="https://www.foodpackaginglabels.net/wp-content/uploads/2019/04/food-packaging-labels-overview.jpg"
          alt="Quality Hero"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px 40px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "42px", margin: 0, color: "#ffcc00" }}>
            Unmatched Label Quality at Every Layer
          </h1>
        </div>
      </div>
      <h2
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "40px",
          color: "#e74c3c",
        }}
      >
        Never Compromize in Quality
      </h2>

      {[
        {
          title: "Printing",
          image:
            "https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?semt=ais_hybrid&w=740",
          description:
            "At Lablex quality isn’t a feature – it's our foundation. Each label we produce is crafted with precision, using top-tier materials, high-resolution printing, and industrial-grade adhesives.",
          extra:
            "We’re also integrating automation, real-time monitoring, and cloud connectivity to ensure precision and reduce waste across every job.",
        },
        {
          title: "Quality",
          image:
            "https://www.printlab.my/uploads/6/7/2/0/6720900/packaging-label-2_orig.jpg",
          description:
            "    Whether it’s a food label that must survive cold storage, or a product label that must maintain its vibrancy in transit, our multi-layered quality assurance process ensures durability, legibility, and aesthetics remain uncompromised.",
          extra:
            "Our facility is ISO 9001:2015 certified, and our systems comply with international quality standards through continuous audits.",
        },
        {
          title: "Sustainability Commitment",
          image:
            "https://www.noveltylabels.in/wp-content/uploads/2023/09/multilayer-label-solutions-inida-by-novelty-labels.webp",
          description:
            "    We implement a meticulous inspection regime at every production stage – from sourcing ISO-certified materials to final visual and adhesive testing – ensuring every label that leaves our facility is nothing short of perfect.",
          extra:
            "We also offer biodegradable and compostable label solutions upon request, reducing environmental impact without compromising quality.",
        },
        {
          title: "Research & Development",
          image:
            "https://www.itechlabel.com/uploads/double-side-printed-labels.jpg",
          description: (
            <ul
              style={{
                marginTop: "20px",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>✔️ UV & moisture resistant coatings for longevity</li>
              <li>✔️ Eco-conscious substrates available</li>
              <li>✔️ Precise die-cutting for seamless application</li>
              <li>✔️ Barcode and QR code clarity assurance</li>
            </ul>
          ),
        },
        {
          title: "Customer Centricity",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMsMGrkFkl4Gm3kNc11_rQuIJJ1msKZLRLeLt9k0MyttCOrpdEc4VfDOMHGLVc7rMLWE&usqp=CAU",
          description:
            "Our clients are at the heart of what we do. We collaborate from idea to implementation, offering custom solutions for every label need.",
          extra:
            "With dedicated support and feedback systems, our success is truly measured by the satisfaction and success of our customers.",
        },
        {
          title: "Global Presence",
          image:
            "https://media.licdn.com/dms/image/v2/D5612AQExQR_tasPktg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713159744266?e=2147483647&v=beta&t=vHw2X94kFvbR5s_FhUE29qe6OBx7gMspFqkjYnKiyEc",
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
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "10px",
                color: "#e74c3c",
              }}
            >
              {section.title}
            </h3>
            <p style={{ marginBottom: "10px" }}>{section.description}</p>
            <p style={{ fontStyle: "italic", color: "#555" }}>
              {section.extra}
            </p>
          </div>
        </div>
      ))}

      {/* Main Quality Section */}
      <div
        style={{
          backgroundColor: "#0d1b1e",
          color: "white",
          padding: "60px 20px",
        }}
      >
        {/* Quality Block */}
        <div
          style={{
            backgroundColor: "#16272b",
            padding: "40px 20px",
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto 60px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
              alt="Quality Icon"
              style={{ width: "48px", height: "48px" }}
            />
          </div>

          <div>
            <h3
              style={{
                color: "#e74c3c",
                marginBottom: "15px",
                fontSize: "26px",
              }}
            >
              Lablex Delivers Precision
            </h3>
            <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              At Lablex, quality isn’t a department—it’s a promise. We ensure
              your brand stands out through flawless printing, durable
              materials, and tested adhesives tailored for your needs.
            </p>
            <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              Our processes are ISO 9001:2015 compliant, ensuring every label
              meets global standards and surpasses your expectations.
            </p>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1e3a40",
                padding: "30px",
                borderRadius: "10px",
                textAlign: "center",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
              }}
            >
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "10px",
                  color: "#00bcd4",
                }}
              >
                {section.title}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quality;
