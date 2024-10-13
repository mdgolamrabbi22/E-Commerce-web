import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.text}>
        Welcome to our website! We are dedicated to providing the best services
        and products to our customers. Our mission is to make your experience
        seamless and enjoyable.
      </p>
      <h2>Our Story</h2>
      <p style={styles.text}>
        Founded in 2020, we started with a simple goal: to deliver quality and
        satisfaction to every customer. Over the years, we have grown into a
        team of passionate professionals who believe in the power of innovation
        and customer service.
      </p>
      <h2>Our Team</h2>
      <p style={styles.text}>
        Our team consists of experienced and dedicated individuals who are
        committed to excellence. We work hard every day to improve our products
        and services, ensuring that you have the best experience possible.
      </p>
      <h2>Contact Us</h2>
      <p style={styles.text}>
        Have questions or want to learn more about what we do? Feel free to{" "}
        <a href="/contact" style={styles.link}>
          contact us
        </a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    lineHeight: "1.6",
    fontFamily: "'Arial', sans-serif",
  },
  text: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#333",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default About;
