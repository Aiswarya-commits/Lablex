import React from "react";

const VisualSection = () => {
  const styles = {
    container: {
      background: "linear-gradient(135deg, #100c1d, #261e3b)", // dark purple gradient
      color: "white",
      minHeight: "100vh",
      padding: "60px 40px",
      fontFamily: "Georgia, serif",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    leftColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginRight: "30px",
    },
    img: {
      width: "300px",
      borderRadius: "40px",
      objectFit: "cover",
    },
    middleImg: {
      width: "250px",
      height: "280px",
      objectFit: "cover",
    },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
      marginTop: "10px",
      marginBottom: "50px",
    },
    rightColumn: {
      maxWidth: "500px",
      marginLeft: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    textBox: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#ddd",
      //   backgroundImage:
      //     "url('https://staticecp.48hourprint.com/1238/600x600/Water_Bottle_Labels_A.jpg')",
      backgroundSize: "cover",
      padding: "20px",
      borderRadius: "12px",
    },
    fullImage: {
      width: "260px",
      height: "180px",
      objectFit: "cover",
      borderRadius: "4px",
    },
    bottomCircle: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.05)",
      bottom: "60px",
      right: "10%",
      zIndex: 0,
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <img
          src="https://labelsonline.com.au/wp-content/uploads/2019/01/2018_12-Juice-Labels-2-01.jpg"
          alt="girl"
          style={{
            ...styles.img,
            marginLeft: "90px",
            height: "350px",
            width: "250px",
          }}
        />
        <img
          src="https://consolidatedlabel.com/wp-content/uploads/2021/07/juice-labels-banner-og-1.jpg"
          alt="bulb"
          style={{ ...styles.img, backgroundColor: "#00BCD4", padding: "20px" }}
        />
      </div>

      {/* Center Image and Heading */}
      <div>
        <div style={styles.heading}>Visually speaking...</div>

        <img
          src="https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/products_gallery_images/Bottle_Jar.jpg"
          alt="street"
          style={{ ...styles.middleImg, height: "500px", width: "400px" ,borderRadius:"40px"}}
        />
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3XHnv0m83xmiUlMmREDwQtHh8MaTWEhGzCTl-jbKAINM0WzThysLgvmwIsn0IAogMY8&usqp=CAU"
          alt="paint"
          style={{ ...styles.fullImage, width: "400px", height: "400px" ,borderRadius:"40px"}}
        />
        <img
          src="https://image.made-in-china.com/202f0j00hMoqimsFplkb/Creative-Design-Hotel-Festival-Wedding-Birthday-Party-Mineral-Water-Bottle-Label-Stickers.webp"
          alt="leaves"
          style={{ ...styles.fullImage ,borderRadius:"40px"}}
        />
        <div style={styles.textBox}>
          We design logos, ad campaigns, letterhead, websites, marketing plans,
          content strategies, business cards, brochures, banners, small
          campaigns, displays, product packaging, branded swag, chicken coops
          and kitchen sinks. <br />
          We write copy. We shoot photos. But we don’t stop there. Our agency
          offers a comprehensive suite of marketing, advertising, and web design
          services to ensure that your brand is well leveraged.
        </div>
      </div>

      {/* Background circle */}
      <div style={styles.bottomCircle}></div>
    </div>
  );
};

export default VisualSection;
