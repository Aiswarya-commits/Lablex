import React from "react";

const About = () => {
  const cards = [
    {
      image:
        "https://www.dennybros.com/wp-content/uploads/2020/11/essential_labelling_considerations.jpg",
      title: "Our Vision",
      description:
        "We aim to redefine labeling standards through innovation and creativity.",
    },
    {
      image:
        "https://makesy.com/cdn/shop/articles/private_labeling_business.jpg?v=1669931154&width=1100",
      title: "Our Mission",
      description:
        "Delivering high-quality custom labels that enhance product identity.",
    },
    {
      image:
        "https://static1.squarespace.com/static/5616b798e4b0d3605b60d02c/t/5e31ad0ea372a0586417bb25/1580313877309/?format=1500w",
      title: "Our Promise",
      description:
        "Customer satisfaction with eco-friendly, durable label solutions.",
    },
  ];

  const flipCardStyle = {
    backgroundColor: "transparent",
    width: "90%",
    maxWidth: "300px",
    height: "350px",
    perspective: "1000px",
    margin: "20px",
  };

  const flipCardInnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  };

  const commonFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const frontStyle = {
    ...commonFaceStyle,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const backStyle = {
    ...commonFaceStyle,
    backgroundColor: "#cf5e00",
    color: "white",
    transform: "rotateY(180deg)",
    padding: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const wrapperStyle = {
    backgroundColor: "#08141c",
    padding: "40px 20px",
    textAlign: "center",
  };

  const headingStyle = {
    marginTop: "100px",
    color: "#e74c3c",
    fontSize: "2.5rem",
    marginBottom: "40px",
  };

  const subheadingStyle = {
    marginLeft: "0",
    color: "white",
    fontSize: "1.6rem",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0 10px",
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={{ ...headingStyle, fontFamily: "cursive" }}>
        Shaping Brands, <br />
        <span style={subheadingStyle}>One Label at a Time</span>
      </h1>

      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={flipCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".inner").style.transform =
                "rotateY(180deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".inner").style.transform =
                "rotateY(0deg)";
            }}
          >
            <div className="inner" style={flipCardInnerStyle}>
              <div style={frontStyle}>
                <img src={card.image} alt={card.title} style={imageStyle} />
              </div>
              <div style={backStyle}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline media query */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 1.8rem !important;
            }
            h1 span {
              font-size: 1.4rem !important;
            }
            .inner {
              transition: none !important;
              transform: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
