import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import Stack from './components/Stack';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <OtherProjects />
        <Stack />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
