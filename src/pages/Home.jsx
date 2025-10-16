import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import WhatsAppSection from '../components/sections/WhatsAppSection';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <WhatsAppSection />
      <Contact />
    </>
  );
};

export default Home;

