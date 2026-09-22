import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import About from './components/About';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <OtherProjects />
        <About />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
