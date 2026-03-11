/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ParallaxDivider from './components/ParallaxDivider';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-sky-500/30 selection:text-sky-200 relative overflow-hidden">
      {/* Premium Global Background - Fixed to cover entire viewport during scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Optimized Cinematic Glows - Using opacity instead of movement for performance */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-600/15 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/15 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '12s' }}
        />
        <div 
          className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '10s' }}
        />
        
        {/* Full-screen Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>
      
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <ParallaxDivider />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
}

