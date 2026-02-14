import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
const TherapeuticAreas = lazy(() => import("@/components/TherapeuticAreas"));
import AcademicRecognition from "@/components/AcademicRecognition";
import ImageSlider from "@/components/ImageSlider";
import ToolsTechnologies from "@/components/ToolsTechnologies";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";
import GravitonFooter from "./components/GravitonFooter";
const BackgroundAnimation = lazy(() => import("./components/BackgroundAnimation"));

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 relative">
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Suspense fallback={null}>
          <TherapeuticAreas />
        </Suspense>
        <AcademicRecognition />
        <ImageSlider />
        <ToolsTechnologies />
        <Contact />
      </main>
      <Footer />
      <GravitonFooter />
    </div>
  );
}

export default App;

