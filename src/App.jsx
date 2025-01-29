import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Navbar with section switching */}
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      {/* Render the active section */}
      <div style={{ minHeight: '80vh' }}>{renderSection()}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
