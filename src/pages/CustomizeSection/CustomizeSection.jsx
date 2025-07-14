import React from "react";

const CustomizeSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
        backgroundColor: "#08141c",
        flexWrap: "wrap",
        marginTop: "180px",
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            fontFamily: "cursive",
            fontSize: "2.5rem",
            color: "#e74c3c",
            textAlign: "center",
          }}
        >
          Customize Label <br />
          <span style={{ marginLeft: "180px", color: "white" }}>
            {" "}
            Size & Shape
          </span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "white",
            textAlign: "justify",
            marginTop: "20px",
          }}
        >
          Whether you need a certain label shape to fit onto your product’s
          container, or just want your labels to look interesting, there are a
          variety of benefits for getting custom shape labels. For one thing,
          labels with a unique shape are more likely to stand out in comparison
          to standard shapes with similar artwork. We carry over thousands of
          custom cutting dies and can even make a special custom shape as you
          desire.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "linear-gradient(135deg, #ff512f, #dd2476)",
            borderRadius: "20px",
            marginLeft: "150px",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.4s ease", // Smooth transition
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#333";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #ff512f, #dd2476)";
          }}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
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

        <img
          src="https://jabac.com/wp-content/uploads/2022/10/thermal-label-printer.jpg" // Replace with your actual image path
          alt="Custom Label Products"
          style={{
            maxWidth: "500px",
            position: "relative",
            zIndex: 1,
            borderRadius: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default CustomizeSection;
