import React, { useState } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Footer from "../Footer/Footer";

 const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Precisionm = () => {
  const styles = {
    heroSection: {
      backgroundImage: `url("https://clubsixteen.com.np/wp-content/uploads/2023/08/club_sixteen_late-night-party-scaled.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "100px",
    },
    heroHeading: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    heroText: {
      fontSize: "18px",
      maxWidth: "600px",
      lineHeight: "1.6",
    },
    container: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      color: "#333",
    },
    section: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    heading: {
      fontSize: "36px",
      color: "#6a0dad",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "18px",
      color: "#666",
    },
    contentWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "space-between",
    },
    box: {
      flex: "1 1 450px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    boxHeading: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#6a0dad",
    },
    paragraph: {
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    button: {
      padding: "12px 25px",
      backgroundColor: "#6a0dad",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    iconImg: {
      width: "28px",
      height: "28px",
    },
    map: {
      width: "100%",
      height: "400px",
      marginTop: "60px",
      border: "0",
      borderRadius: "10px",
    },
    faqBox: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "15px",
      marginTop: "60px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    faqItem: {
      marginBottom: "20px",
    },
    faqQuestion: {
      fontWeight: "bold",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log("Valid Form data:", data);
    setOpen(true);
    reset();
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            ...styles.heroSection,
            paddingTop: "100px",
          }}
        >
          <h1 style={styles.heroHeading}>Contact Us</h1>
          <p style={styles.heroText}>
            Need help planning your next event? Look no further than Laventra.
            <br />
            We can provide everything you need to ensure your event is a
            success.
          </p>
        </div>

        <div style={styles.container}>
          <div style={styles.section}>
            <div style={styles.header}>
              <h1 style={styles.heading}>Get in Touch</h1>
              <p style={styles.subheading}>
                Have questions or ready to plan your next big event? We're here
                to help!
              </p>
            </div>

            <div style={styles.contentWrapper}>
              <div style={styles.box}>
                <h2 style={styles.boxHeading}>Contact Information</h2>
                <p style={styles.paragraph}>
                  <strong>📍 Address:</strong> 123 Celebration Avenue,
                  Bangalore, IN
                </p>
                <p style={styles.paragraph}>
                  <strong>📞 Phone:</strong>{" "}
                  <a
                    href="tel:+919876543210"
                    style={{ color: "#6a0dad", textDecoration: "none" }}
                  >
                    +91 98765 43210
                  </a>
                </p>
                <p style={styles.paragraph}>
                  <strong>📧 Email:</strong>{" "}
                  <a
                    href="mailto:info@Laventra.com"
                    style={{ color: "#6a0dad", textDecoration: "none" }}
                  >
                    info@laventra.com
                  </a>
                </p>
                <p style={styles.paragraph}>
                  <strong>🕒 Working Hours:</strong> Mon - Sat: 9:00 AM – 7:00
                  PM
                </p>

                <div style={styles.socialIcons}>
                  {[
                    {
                      href: "https://facebook.com",
                      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                    },
                    {
                      href: "https://instagram.com",
                      img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                    },
                    {
                      href: "https://twitter.com",
                      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
                    },
                    {
                      href: "https://youtube.com",
                      img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                    },
                  ].map(({ href, img }, index) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <img src={img} alt="icon" style={styles.iconImg} />
                    </a>
                  ))}
                </div>
              </div>

              <div style={styles.box}>
                <h2 style={styles.boxHeading}>Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={styles.input}
                    {...register("name")}
                  />
                  <p style={{ color: "red" }}>{errors.name?.message}</p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={styles.input}
                    {...register("email")}
                  />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    style={styles.input}
                    {...register("phone")}
                  />
                  <p style={{ color: "red" }}>{errors.phone?.message}</p>
                  <textarea
                    placeholder="Write your message here..."
                    style={{ ...styles.input, height: "120px", resize: "none" }}
                    {...register("message")}
                  />
                  <p style={{ color: "red" }}>{errors.message?.message}</p>

                  <button
                    type="submit"
                    style={styles.button}
                    // onClick={handleClick}
                  >
                    Submit
                  </button>
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      Your Message Send Sucessfully
                    </Alert>
                  </Snackbar>
                </form>
              </div>
            </div>

            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.940233637436!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b99e8a4f%3A0x7c1b64c7e589dfeb!2sBangalore!5e0!3m2!1sen!2sin!4v1675648020799!5m2!1sen!2sin"
              style={styles.map}
              loading="lazy"
            ></iframe>

            <div style={styles.faqBox}>
              <h2 style={styles.boxHeading}>❓ Frequently Asked Questions</h2>
              {[
                [
                  "How early should I book a venue?",
                  "At least 1 month in advance is recommended to ensure availability.",
                ],
                [
                  "Can I visit the venue before booking?",
                  "Absolutely! Contact us to schedule a visit at your convenience.",
                ],
                [
                  "Do you offer event planning support?",
                  "Yes, we provide complete planning, décor, and technical services.",
                ],
                [
                  "What payment methods are accepted?",
                  "We accept UPI, cards, bank transfer, and all major payment gateways.",
                ],
              ].map(([question, answer], index) => (
                <div style={styles.faqItem} key={index}>
                  <p style={styles.faqQuestion}>Q: {question}</p>
                  <p>A: {answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Precisionm;