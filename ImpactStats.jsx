import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ImpactStats from "@/components/site/ImpactStats";
import About from "@/components/site/About";
import Causes from "@/components/site/Causes";
import Events from "@/components/site/Events";
import Volunteers from "@/components/site/Volunteers";
import Testimonials from "@/components/site/Testimonials";
import Donate from "@/components/site/Donate";
import VolunteerForm from "@/components/site/VolunteerForm";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Home = () => (
  <div className="min-h-screen bg-[var(--linen)]" data-testid="home-page">
    <Header />
    <main>
      <Hero />
      <ImpactStats />
      <About />
      <Causes />
      <Events />
      <Volunteers />
      <Testimonials />
      <Donate />
      <VolunteerForm />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
