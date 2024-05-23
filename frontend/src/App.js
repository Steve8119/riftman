import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Testimonials from "./components/Testimonials"; // Add Testimonials component
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="testimonials"><Testimonials /></div> {/* Add Testimonials component */}
      <div id="contacts"><Contacts /></div>

      <Footer />
    </div>
  );
}

export default App;
