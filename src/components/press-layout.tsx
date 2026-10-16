import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/algorism-press-logo.jpg.asset.json";

const navigation = [
  { to: "/vision", label: "Vision & Philosophy" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/publications", label: "Publications" },
  { to: "/institutional", label: "Institutional" },
] as const;

export function PressLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="location-bar"><div className="page-width"><span><i className="status-dot" /> DHAKA CANTONMENT, BANGLADESH</span><span>INDEPENDENT IDEAS. LASTING EDITIONS.</span></div></div>
    <header className="site-header page-width">
      <Link to="/" className="brand" aria-label="Algorism Press home" onClick={() => setOpen(false)}><img src={logo.url} alt="Algorism Press AP logo" width={68} height={62} /><span>ALGORISM PRESS<small>Code to Print, Research to Global Books</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeProps={{ className: "nav-active" }}>{item.label}</Link>)}</nav>
      <Button variant="outline" className="header-inquire" asChild><a href="mailto:rafi@gmrafi.com.bd">Inquire <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </header>
    {open && <nav className="mobile-nav page-width" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}<a href="mailto:rafi@gmrafi.com.bd">Inquire <ArrowUpRight size={16}/></a></nav>}
    <main id="main-content">{children}</main>
    <footer className="site-footer"><div className="page-width footer-grid"><div><Link to="/" className="footer-brand">Algorism Press<span>®</span></Link><p>Publishing infrastructure and editorial practice for computer science, modern finance, and research-led literature.</p><span className="footer-status"><i className="status-dot"/> Publishing workflow in development</span></div><div><h3>EDITORIAL DIVISIONS</h3><p>Computational Sciences<br/>Modern Financial Architecture<br/>Foundational Pedagogy</p><Link to="/vision">The Algorism Philosophy <ArrowUpRight size={14}/></Link></div><div><h3>GET IN TOUCH</h3><a href="mailto:rafi@gmrafi.com.bd">rafi@gmrafi.com.bd <ArrowUpRight size={14}/></a><a href="tel:+8801353030714">+880 1353-030714</a><p>Dhaka Cantonment,<br/>Dhaka, Bangladesh.</p><a href="https://github.com/AlgorismPress" target="_blank" rel="noreferrer">Project repository <ArrowUpRight size={14}/></a></div></div><div className="page-width footer-bottom"><span>© 2026 Algorism Press. All rights reserved.</span><span>Designed & Architected by Md Golam Mubasshir Rafi</span></div></footer>
  </>;
}

export function PageIntro({ number, label, title, children }: { number: string; label: string; title: string; children: ReactNode }) {
  return <section className="page-intro page-width"><div className="eyebrow"><span>{number} / {label}</span><span>ALGORISM PRESS</span></div><h1>{title}</h1><div className="intro-copy">{children}</div></section>;
}

export function InquiryBand() {
  return <section className="inquiry-band"><div className="page-width"><div><span className="eyebrow">FOR ACADEMIC FACULTY & UNIVERSITY PRESSES</span><h2>Important ideas deserve<br/>a thoughtful edition.</h2><p>Clear scope. Careful editorial production.</p></div><Button variant="outline" size="lg" asChild><Link to="/institutional">Institutional Inquiry <ArrowRight /></Link></Button></div></section>;
}