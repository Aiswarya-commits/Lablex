import React from "react";
import { useNavigate } from "react-router-dom";

const Shape = () => {
  const navigate = useNavigate()
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
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          textAlign: "center",
          padding: "20px",
          position: "relative",
          marginRight: "80px",
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
          src="https://freedesignfile.com/upload/2020/12/Design-different-shapes-label-stickers-vector.jpg" // Replace with your actual image path
          alt="Custom Label Products"
          style={{
            maxWidth: "500px",
            position: "relative",
            zIndex: 1,
            borderRadius: "30px",
          }}
        />
      </div>
      {/* Left Side - Text */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "600px",
          padding: "20px",
          marginRight: "60px",
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
          <span style={{ marginLeft: "10px", color: "white" }}> Shape</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "white",
            textAlign: "justify",
            marginTop: "20px",
            marginLeft:"20px"
          }}
        >
          Lablex Middle East Label Industries is in the business of manufacturing
          self-adhesive labels. Located in United Arab Emirates, Lablex is one of
          the leading manufacturers of self adhesive labels. We have been in the
          industry since 2010 under the ownership and care of Mr. Jagannath M
          Wagle. Years later, the company has established itself as a reputable
          printer throughout the area with outstanding guaranteed satisfaction.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "linear-gradient(135deg, #ff512f, #dd2476)",
            borderRadius: "20px",
            marginLeft: "90px",
            textAlign: "center",
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
          onClick={()=>navigate("/labelshape")}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Right Side - Image */}
    </div>
  );
};

export default Shape;