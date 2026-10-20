import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/algorism-press-logo.jpg.asset.json";

const copy = {
  en: {
    home: "/",
    location: "DHAKA CANTONMENT, BANGLADESH",
    motto: "INDEPENDENT IDEAS. LASTING EDITIONS.",
    tagline: "Code to Print, Research to Global Books",
    nav: [
      { hash: "vision", label: "Vision & Philosophy" },
      { hash: "what-we-do", label: "What We Do" },
      { hash: "distinctions", label: "Distinctions" },
      { hash: undefined, label: "Publications" },
      { hash: "contact", label: "Contact" },
    ],
    inquire: "Inquire",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    about: "An independent publishing practice for technical, academic, and research-led books. Clear ideas, carefully shaped for screen and page.",
    status: "Digital editions · Print-on-demand",
    divisionsTitle: "EDITORIAL DIVISIONS",
    divisions: ["Computational Sciences", "Modern Financial Architecture", "Foundational Pedagogy"],
    philosophy: "The Algorism Philosophy",
    contactTitle: "GET IN TOUCH",
    address: ["Dhaka Cantonment,", "Dhaka, Bangladesh."],
    repo: "Project repository",
    rights: "© 2026 Algorism Press. All rights reserved.",
    credit: "Designed & Architected by Md Golam Mubasshir Rafi",
  },
  bn: {
    home: "/bn",
    location: "ঢাকা সেনানিবাস, বাংলাদেশ",
    motto: "স্বাধীন ভাবনা। দীর্ঘস্থায়ী সংস্করণ।",
    tagline: "কোড থেকে মুদ্রণ, গবেষণা থেকে বিশ্বমানের বই",
    nav: [
      { hash: "vision", label: "দর্শন" },
      { hash: "what-we-do", label: "আমরা কী করি" },
      { hash: "distinctions", label: "বৈশিষ্ট্য" },
      { hash: undefined, label: "গ্রন্থসম্ভার" },
      { hash: "contact", label: "যোগাযোগ" },
    ],
    inquire: "যোগাযোগ",
    openNav: "মেনু খুলুন",
    closeNav: "মেনু বন্ধ করুন",
    about: "প্রযুক্তি, একাডেমিক ও গবেষণাভিত্তিক বইয়ের জন্য একটি স্বাধীন প্রকাশনা-পদ্ধতি। স্পষ্ট ভাবনা, স্ক্রিন ও পৃষ্ঠার জন্য যত্নে গড়া।",
    status: "ডিজিটাল সংস্করণ · প্রিন্ট-অন-ডিমান্ড",
    divisionsTitle: "সম্পাদকীয় বিভাগ",
    divisions: ["কম্পিউটেশনাল বিজ্ঞান", "আধুনিক আর্থিক স্থাপত্য", "মৌলিক শিক্ষণবিদ্যা"],
    philosophy: "অ্যালগোরিজম দর্শন",
    contactTitle: "যোগাযোগ করুন",
    address: ["ঢাকা সেনানিবাস,", "ঢাকা, বাংলাদেশ।"],
    repo: "প্রজেক্ট রিপোজিটরি",
    rights: "© ২০২৬ অ্যালগোরিজম প্রেস। সর্বস্বত্ব সংরক্ষিত।",
    credit: "নকশা ও কারিগরি স্থাপনা: মোঃ গোলাম মুবাশশির রাফি",
  },
} as const;

function LanguageSwitch({ lang }: { lang: "en" | "bn" }) {
  return <nav className="lang-switch" aria-label="Language">
    <Link to="/" lang="en" aria-current={lang === "en" ? "true" : undefined} className={lang === "en" ? "lang-active" : undefined}>EN</Link>
    <span aria-hidden="true">/</span>
    <Link to="/bn" lang="bn" aria-current={lang === "bn" ? "true" : undefined} className={lang === "bn" ? "lang-active" : undefined}>বাংলা</Link>
  </nav>;
}

export function PressLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });
  const lang = pathname === "/bn" || pathname.startsWith("/bn/") ? "bn" : "en";
  const t = copy[lang];
  const navLink = (item: (typeof t.nav)[number]) => item.hash
    ? { to: t.home, hash: item.hash }
    : { to: "/publications" as const, activeProps: { className: "nav-active" } };

  return <div lang={lang} className={lang === "bn" ? "lang-bn" : undefined}>
    <div className="location-bar"><div className="page-width"><span><i className="status-dot" /> {t.location}</span><span className="location-motto">{t.motto}</span><LanguageSwitch lang={lang} /></div></div>
    <header className="site-header page-width">
      <Link to={t.home} className="brand" aria-label="Algorism Press home" onClick={() => setOpen(false)}><img src={logo.url} alt="Algorism Press AP logo" width={68} height={62} /><span>ALGORISM PRESS<small>{t.tagline}</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{t.nav.map(item => <Link key={item.label} {...navLink(item)}>{item.label}</Link>)}</nav>
      <Button variant="outline" className="header-inquire" asChild><a href="mailto:rafi@gmrafi.com.bd">{t.inquire} <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? t.closeNav : t.openNav} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </header>
    {open && <nav className="mobile-nav page-width" aria-label="Mobile navigation">{t.nav.map(item => <Link key={item.label} {...navLink(item)} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}<a href="mailto:rafi@gmrafi.com.bd">{t.inquire} <ArrowUpRight size={16}/></a></nav>}
    <main id="main-content">{children}</main>
    <footer className="site-footer"><div className="page-width footer-grid"><div><Link to={t.home} className="footer-brand">Algorism Press</Link><p>{t.about}</p><span className="footer-status"><i className="status-dot"/> {t.status}</span></div><div><h3>{t.divisionsTitle}</h3><p>{t.divisions[0]}<br/>{t.divisions[1]}<br/>{t.divisions[2]}</p><Link to={t.home} hash="vision">{t.philosophy} <ArrowUpRight size={14}/></Link></div><div><h3>{t.contactTitle}</h3><a href="mailto:rafi@gmrafi.com.bd">rafi@gmrafi.com.bd <ArrowUpRight size={14}/></a><a href="tel:+8801353030714">+880 1353-030714</a><p>{t.address[0]}<br/>{t.address[1]}</p><a href="https://github.com/AlgorismPress" target="_blank" rel="noreferrer">{t.repo} <ArrowUpRight size={14}/></a></div></div><div className="page-width footer-bottom"><span>{t.rights}</span><span>{t.credit}</span></div></footer>
  </div>;
}

export function PageIntro({ number, label, title, children }: { number: string; label: string; title: string; children: ReactNode }) {
  return <section className="page-intro page-width"><div className="eyebrow"><span>{number} / {label}</span><span>ALGORISM PRESS</span></div><h1>{title}</h1><div className="intro-copy">{children}</div></section>;
}

export function InquiryBand() {
  return <section className="inquiry-band"><div className="page-width"><div><span className="eyebrow">FOR ACADEMIC FACULTY & UNIVERSITY PRESSES</span><h2>Important ideas deserve<br/>a thoughtful edition.</h2><p>Clear scope. Careful editorial production.</p></div><Button variant="outline" size="lg" asChild><Link to="/" hash="contact">Institutional Inquiry <ArrowRight /></Link></Button></div></section>;
}
