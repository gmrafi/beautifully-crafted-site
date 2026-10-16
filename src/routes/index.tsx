import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Layers3, ScanLine, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/page-meta";
import logo from "@/assets/algorism-press-logo.jpg.asset.json";
import stillLife from "@/assets/publishing-still-life.jpg";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Code to Print, Research to Global Books", "Algorism Press is building a careful publishing practice for technical, academic, and research-led books in Dhaka, Bangladesh."),
  component: Index,
});

function Index() {
  return <>
    <section className="hero">
      <img className="hero-image" src={stillLife} alt="An editorial still life of clothbound books and an open book with mathematical diagrams" width={1600} height={1008} fetchPriority="high" />
      <div className="hero-content page-width"><div className="eyebrow"><i className="status-dot"/> A PUBLISHING PRACTICE IN THE MAKING</div><h1>Algorism<br/>Press.</h1><p className="hero-tagline">Code to Print,<br/>Research to Global Books.</p><p className="hero-description">From structured ideas to lasting books.<br/>A careful home for technical, academic, and research-led writing, made clear, useful, and enduring.</p><div className="hero-actions"><Button size="lg" asChild><Link to="/publications">Explore Publications <ArrowUpRight/></Link></Button><Link to="/" hash="vision" className="text-link">Our Philosophy <ArrowRight size={14}/></Link></div></div>
      <span className="hero-index">01 / THE BOOK AS A BUILT OBJECT</span>
    </section>
    <div className="standard-strip page-width"><div className="standard-label"><img src={logo.url} alt="Algorism Press seal" width={64} height={58} loading="lazy" /><span>THE ALGORISM STANDARD<br/>Scientia · Ratio · Veritas</span></div><p>Rooted in the mathematical discipline of 9th-century algorism,<br/>dedicated to modern global intellect.</p><ArrowUpRight className="text-primary" size={18}/></div>
    <section id="vision" className="section page-width scroll-mt-8"><div className="eyebrow"><span>01 / OUR VISION</span><span>IDEAS, GIVEN STRUCTURE.</span></div><div className="section-heading"><h2>Publishing is an<br/>act of building.</h2><p>A serious book is more than a manuscript on a page. It is an organized experience of arguments, examples, visuals, and references. We are building the practice to make that experience clear, useful, and durable.</p></div><div className="principle-grid">{[
      { title: "Structure", text: "Turn complex material into a path readers can follow.", icon: Layers3 },
      { title: "Clarity", text: "Give every page a clear purpose and a readable rhythm.", icon: ScanLine },
      { title: "Continuity", text: "Build editions that remain useful beyond a single moment.", icon: BookOpen },
    ].map(({title,text,icon:Icon},i)=><article className="principle" key={title}><div className="principle-top"><span>0{i+1}</span><Icon size={20} strokeWidth={1.3}/></div><h3>{title}</h3><p>{text}</p></article>)}</div><Link to="/" hash="what-we-do" className="section-link">Discover our approach <ArrowRight size={14}/></Link></section>
    <section className="section manifesto page-width"><span className="eyebrow">THE ALGORISM STANDARD / SCIENTIA · RATIO · VERITAS</span><blockquote>“We are building a careful publishing workflow where clear writing, thoughtful design, and reliable production work together.”</blockquote></section>
    <section id="what-we-do" className="work-band scroll-mt-8"><div className="section page-width"><div className="eyebrow"><span>02 / THE BOOK AS A SYSTEM</span><span>A PUBLIC MODEL</span></div><div className="section-heading"><h2>Ideas should connect.<br/>Structure makes them visible.</h2><p>We do not treat a book as a block of text. We see a connected system of ideas, pages, examples, visuals, and references that should work together for the reader.</p></div><div className="process-grid">{["Start with the idea", "Give it structure", "Make it readable", "Prepare it to last"].map((t,i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3></article>)}</div></div></section>
    <section className="section page-width"><div className="eyebrow"><span>03 / HOW WE WORK</span><span>CLEAR WRITING · CAREFUL PRODUCTION</span></div><div className="principle-grid">{[
      ["Discipline", "Readable layouts", "We are developing a structured workflow for typography, code examples, diagrams, and page composition. Each format is reviewed for clarity before it becomes part of a finished edition."],
      ["Stewardship", "Respectful collaboration", "We want authors and collaborators to understand the editorial process, scope, and responsibilities clearly. Any future publishing or compensation terms will be discussed directly and documented before work begins."],
      ["Horizon", "Future editions", "The portal is being prepared for future digital and print-ready publications. Distribution channels, partnerships, and availability will be announced only when they are confirmed."],
    ].map(([k,t,p],i)=><article className="principle" key={t}><div className="principle-top"><span>0{i+1} / {k}</span></div><h3>{t}</h3><p>{p}</p></article>)}</div></section>
    <section className="work-band"><div className="section page-width"><span className="eyebrow">OUR SIMPLE PROCESS</span><div className="process-grid">{[["Manuscript","A clear starting point"],["Structure","Organize the ideas"],["Presentation","Make each page useful"],["Review","Share only when ready"]].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section page-width"><div className="eyebrow"><span>04 / CURRENT WORK</span><span>SELECTED & IN DEVELOPMENT</span></div><div className="section-heading"><h2>Good work takes<br/>thoughtful preparation.</h2><div className="coming-soon"><span className="coming-dots">···</span><div><h3>Our first editions are on their way.</h3><p>Our first publications are still being prepared. This space will be updated when there is something real and ready to share.</p><Link to="/publications" className="section-link">View publication status <ArrowRight size={14}/></Link></div></div></div></section>
    <section id="contact" className="section manifesto page-width contact-grid scroll-mt-8"><div><span className="eyebrow">05 / INSTITUTIONAL & CONTACT</span><h2>A careful home for important research.</h2><p>For academic faculty and university presses. Are you an educator or researcher with lecture manuscripts, technical monographs, or course textbooks? Let's begin a conversation.</p><p>Clear scope. Careful editorial production.</p><Button size="lg" asChild><a href="mailto:rafi@gmrafi.com.bd?subject=Institutional%20Inquiry%20-%20Algorism%20Press">Institutional Inquiry <ArrowUpRight/></a></Button></div><div className="contact-details"><a href="mailto:rafi@gmrafi.com.bd"><span>EMAIL</span>rafi@gmrafi.com.bd <ArrowUpRight size={16}/></a><a href="tel:+8801353030714"><span>PHONE</span>+880 1353-030714 <ArrowUpRight size={16}/></a><div><span>LOCATION</span>Dhaka Cantonment,<br/>Dhaka, Bangladesh.</div><a href="https://github.com/AlgorismPress" target="_blank" rel="noreferrer"><span>REPOSITORY</span>github.com/AlgorismPress <ArrowUpRight size={16}/></a></div></section>
  </>;
}
