"use client";

import { ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  { n: "01", title: "Timeless design", text: "Elegant details and considered spaces made to feel effortless." },
  { n: "02", title: "Crafted with care", text: "A refined experience where quality and comfort come first." },
  { n: "03", title: "Made for living", text: "Modern character balanced with warmth, calm and everyday ease." }
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a href="#" className="brand">AL <span>HAFSA</span></a>
        <div className={`links ${open ? "open" : ""}`}>
          <a href="#story" onClick={() => setOpen(false)}>Our Story</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <a className="navBtn" href="#contact">Get Started <ArrowRight size={16}/></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      <section className="hero">
        <div className="orb orbOne"/>
        <div className="orb orbTwo"/>
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15}/> ELEVATED BY DESIGN</div>
          <h1>Made to feel<br/><i>extraordinary.</i></h1>
          <p>Discover Al Hafsa — a refined expression of modern living, thoughtful details and timeless beauty.</p>
          <div className="actions">
            <a href="#experience" className="primary">Explore Al Hafsa <ArrowRight size={18}/></a>
            <a href="#story" className="secondary">Discover our story <ChevronDown size={17}/></a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="glassCard back"/>
          <div className="glassCard mainCard">
            <div className="imageMock">
              <div className="sun"/>
              <div className="arch"/>
              <div className="plant p1"/>
              <div className="plant p2"/>
              <div className="floor"/>
            </div>
            <div className="cardLabel"><span>AL HAFSA</span><b>01</b></div>
          </div>
          <div className="floatTag">A NEW STANDARD<br/><strong>OF ELEGANCE</strong></div>
        </div>
      </section>

      <section id="story" className="intro">
        <div className="sectionKicker">THE AL HAFSA PHILOSOPHY</div>
        <h2>Beauty lives in<br/><i>the details.</i></h2>
        <p>Al Hafsa brings together contemporary aesthetics and a sense of warmth. Every touch is intentional, creating an experience that feels premium without ever feeling distant.</p>
      </section>

      <section id="experience" className="features">
        {items.map((item, i) => (
          <article key={item.n} className="featureCard">
            <span>{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ArrowRight size={19}/>
          </article>
        ))}
      </section>

      <section className="statement">
        <div className="statementImage">
          <div className="abstractSphere"/>
        </div>
        <div className="statementCopy">
          <div className="sectionKicker">A DISTINCT POINT OF VIEW</div>
          <h2>Where <i>modern</i> meets meaningful.</h2>
          <p>From the first impression to the smallest interaction, Al Hafsa is designed to leave a lasting one.</p>
          <a href="#contact" className="primary">Start a conversation <ArrowRight size={18}/></a>
        </div>
      </section>

      <footer id="contact">
        <div className="footerBrand">AL <span>HAFSA</span></div>
        <div><small>READY WHEN YOU ARE</small><h2>Let's create something<br/><i>remarkable.</i></h2></div>
        <a className="primary" href="mailto:hello@alhafsa.com">Contact us <ArrowRight size={18}/></a>
        <div className="copyright">© 2026 Al Hafsa. All rights reserved.</div>
      </footer>
    </main>
  );
}