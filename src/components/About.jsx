import React from "react";


const About = () => {
  return (
    <div>
      
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.text}>
      Welcome to NextGenMobiles comany! We are an innovative online platform, where you can find the mobile phone of your choice easily and at an affordable price. Our aim is to deliver the best mobile brands and models to your doorstep, so that you can get the right mobile to suit your needs and budget.We don't just sell mobile phones, but try to make the whole process of buying a mobile phone easier and more enjoyable for you. Our website has advanced search and filter options, detailed product descriptions, ratings and reviews, which will help you choose the mobile of your choice.We believe, your satisfaction is our first priority. That's why we provide advanced and secure payment gateways, fast delivery, and reliable customer support with every purchase. Our mission is to make your digital lifestyle easier and smarter.Stay with us and buy your favorite mobile with peace of mind.
      </p>
      <h2>Our Story</h2>
      <p style={styles.text}>
        Founded in 2023, we started with a simple goal: to deliver quality and
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
    color:"black",
    fontFamily: "'Arial', sans-serif",
  },

 

  text: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#333"
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default About;
