import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <Header />
      <main className="space-y-16 sm:space-y-24">
        <Hero />
        <Contact /> 
        {/* <HowWeHelp />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
