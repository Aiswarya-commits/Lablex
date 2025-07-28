import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Collaboration = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div style={{backgroundColor:"#08141c"}}>
      <Navbar />
      <div
  style={{
    height: "100vh",
    backgroundImage:
      'url("https://label.co.uk/inhalte/uploads/bottle-labels-juice.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "0 20px",
  }}
>
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.6)",
      padding: "30px 60px",
      borderRadius: "10px",
    }}
  >
    <h1 style={{ fontSize: "40px", color: "#ffcc00", margin: 0 }}>
      Your Vision, Our Labels
    </h1>
  </div>
</div>

      {/* Sections */}
      {[
        {
          title: "Printing",
          image:
            "https://5.imimg.com/data5/OT/BS/MF/SELLER-15928142/plastic-bottle-label.jpeg",
          description:
            "At Labelex, every project begins with a conversation. We listen to your ideas, learn about your product, and explore the message you want your labels to convey. This initial exchange sets the tone for a truly collaborative journey.",
        },
        {
          title: "Quality",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/5/308845452/IN/UD/VD/5886057/metalized-water-bottle-label-500x500.jpg",
          description:
            "Once we understand your vision, our design team begins shaping concepts that reflect your brand’s essence. We present mockups and gather your feedback, encouraging an open dialogue where your insights refine every design detail. Whether it's font, layout, or color, your preferences are central to the process.",
        },
        {
          title: "Sustainability Commitment",
          image:
            "https://images.onlinelabels.com/images/dlp/og/bottle-labels-banner-og.jpg",
          description:
            "We guide you through selecting the right materials and printing techniques, offering expert suggestions while keeping your goals and budget in mind. ",
          extra:
            "This ensures that the final product not only looks stunning but also performs perfectly across packaging and environments.",
        },
        {
          title: "Research & Development",
          image:
            "https://www.shutterstock.com/image-vector/detergents-design-realistic-cleaning-products-600nw-2044889741.jpg",
          description:
            "From the first sketch to the final print, you’re never out of the loop. We share progress, discuss options, and make adjustments based on your evolving needs. ",
          extra:
            "It's not just about printing a label—it’s about building a product that tells your story the right way.",
        },
        {
          title: "Customer Centricity",
          image:
            "https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/product/premium-shiny-labels.jpg",
          description:
            "With Labelex, creative collaboration isn’t a step—it’s our working style. Together, we create labels that stand out, connect with customers, and elevate your brand presence on every shelf.",
        },
        {
          title: "Global Presence",
          image:
            "https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/product/Transparent-Stickers_1_.jpg",
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

export default Collaboration;