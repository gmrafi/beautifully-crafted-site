import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, X } from "lucide-react";
import { PageIntro } from "@/components/press-layout";
import { Button } from "@/components/ui/button";
import logo from "@/assets/algorism-press-logo.jpg.asset.json";
import stillLife from "@/assets/publishing-still-life.jpg";

type Lang = "en" | "bn";

/* Hex values are display labels only; swatches render from the matching CSS tokens. */
const swatches = [
  { token: "swatch-emerald", hex: "#0F7253", rgb: "15 · 114 · 83" },
  { token: "swatch-blue", hex: "#4366F6", rgb: "67 · 102 · 246" },
  { token: "swatch-press", hex: "#00533A", rgb: "0 · 83 · 58" },
  { token: "swatch-heritage", hex: "#163527", rgb: "22 · 53 · 39" },
  { token: "swatch-ink", hex: "#17251D", rgb: "23 · 37 · 29" },
  { token: "swatch-paper", hex: "#FAF9F6", rgb: "250 · 249 · 246" },
] as const;

const misuseClasses = ["misuse-stretch", "misuse-rotate", "misuse-recolor", "misuse-shadow", "misuse-crop", "misuse-busy"] as const;
const useClasses = ["use-paper", "use-white", "use-panel"] as const;

const copy = {
  en: {
    label: "BRAND GUIDELINES",
    title: "One mark, used with care.",
    intro: "These guidelines describe the Algorism Press identity: the logo, its colours, typography, and voice. Use them whenever the press is represented on screen or in print.",
    markEyebrow: ["01 / THE MARK", "THE OFFICIAL SIGNATURE."],
    markTitle: "The AP seal.",
    markText: "The primary logo is the AP monogram set within a double frame. It is the official signature of the press, used on editions, documents, and screens.",
    logoAlt: "The Algorism Press logo: the letters AP inside an emerald frame and an outer blue frame",
    anatomy: [
      ["Monogram", "The initials A and P, set in a bold, high-contrast serif in Algorism Emerald."],
      ["Inner frame", "An emerald rule that holds the monogram, like the margins of a printed page."],
      ["Outer frame", "A blue rule around the page: the structure that carries an idea from code to print."],
    ],
    spaceEyebrow: ["02 / CLEAR SPACE & SIZE", "ROOM TO BREATHE."],
    spaceTitle: "Room to breathe.",
    spaceText: "Keep a clear space around the logo equal to the height of the letter A. No text, image, or edge should enter this area.",
    spaceMark: "A",
    sizes: [["Minimum on screen", "48 px wide"], ["Minimum in print", "15 mm wide"], ["Below this size", "Use the browser icon"]],
    colourEyebrow: ["03 / COLOUR", "TAKEN FROM THE LOGO."],
    colourTitle: "Emerald, blue, and paper.",
    colourText: "The palette comes directly from the logo. Emerald carries the identity, blue is reserved for the outer frame and fine accents, and warm paper gives every page its calm.",
    swatchNames: [
      ["Algorism Emerald", "Logo monogram and inner frame"],
      ["Algorism Blue", "Logo outer frame, fine accents"],
      ["Press Green", "Buttons, links, and highlights"],
      ["Heritage Green", "Feature bands and dark surfaces"],
      ["Ink", "Body text and headings"],
      ["Paper", "Page background"],
    ],
    copyHex: "Copy",
    copied: "Copied",
    typeEyebrow: ["04 / TYPOGRAPHY", "A CLASSICAL SERIF FAMILY."],
    typeTitle: "Set like a book.",
    typeText: "Headings use Playfair Display, body text uses Lora, and Bangla is set in Noto Serif Bengali. Together they give the press the feel of a carefully typeset book.",
    fonts: [
      ["Playfair Display", "Display and headings", "Regular 400 · Medium 500 · Italic", "Code to Print."],
      ["Lora", "Body text and captions", "Regular 400 · Medium 500 · Italic", "Research to Global Books, set for sustained reading."],
      ["Noto Serif Bengali", "Bangla text", "Regular 400 · Medium 500", "কোড থেকে মুদ্রণ, গবেষণা থেকে বিশ্বমানের বই।"],
    ],
    useEyebrow: ["05 / CORRECT USE", "WHERE THE LOGO BELONGS."],
    useTitle: "Where the logo belongs.",
    useText: "The logo is supplied on a light field. Place it on paper or white, and on dark surfaces set it inside a light panel.",
    uses: ["On paper", "On white", "In a light panel on dark green"],
    misuseTitle: "Never alter the mark.",
    misuses: ["Do not stretch or squeeze", "Do not rotate", "Do not change the colours", "Do not add shadows or effects", "Do not crop the frame", "Do not place on busy photographs"],
    voiceEyebrow: ["06 / NAME & VOICE", "HOW WE WRITE OUR NAME."],
    voiceTitle: "How we write our name.",
    lines: [["Name", "Algorism Press"], ["Tagline", "Code to Print, Research to Global Books"], ["Motto", "Scientia · Ratio · Veritas"], ["Signature line", "Independent ideas. Lasting editions."]],
    rules: [
      "Write Algorism, never Algorithm.",
      "Use the full name, Algorism Press, at first mention.",
      "Do not add the ® symbol to the name.",
      "Avoid long dashes. Use a full stop, comma, or colon.",
      "Write with precision and calm. Claim only what is confirmed.",
    ],
    filesEyebrow: ["07 / FILES & PERMISSION", "LOGO FILES."],
    filesTitle: "Logo files.",
    filesText: "Partners, institutions, and press may use the logo to refer to Algorism Press, following these guidelines. For any other use, write to us first.",
    files: [["Primary logo", "JPG · 579 × 498"], ["Browser icon", "PNG · 64 × 64"]],
    inquiry: "Brand use inquiry",
  },
  bn: {
    label: "ব্র্যান্ড নির্দেশিকা",
    title: "একটি প্রতীক, যত্নে ব্যবহৃত।",
    intro: "এই নির্দেশিকায় অ্যালগোরিজম প্রেসের পরিচয় তুলে ধরা হয়েছে: লোগো, রং, টাইপোগ্রাফি ও ভাষাভঙ্গি। স্ক্রিনে বা মুদ্রণে প্রেসকে উপস্থাপনের সময় এগুলো অনুসরণ করুন।",
    markEyebrow: ["০১ / প্রতীক", "দাপ্তরিক স্বাক্ষর।"],
    markTitle: "AP সিল।",
    markText: "প্রধান লোগোটি একটি দ্বৈত ফ্রেমের ভেতরে স্থাপিত AP মনোগ্রাম। এটি প্রেসের দাপ্তরিক স্বাক্ষর, যা সংস্করণ, নথি ও স্ক্রিনে ব্যবহৃত হয়।",
    logoAlt: "অ্যালগোরিজম প্রেসের লোগো: সবুজ ফ্রেম ও বাইরের নীল ফ্রেমের ভেতরে AP অক্ষর",
    anatomy: [
      ["মনোগ্রাম", "A ও P আদ্যক্ষর, অ্যালগোরিজম এমারেল্ড রঙে মোটা, উচ্চ-কনট্রাস্ট সেরিফ অক্ষরে।"],
      ["ভেতরের ফ্রেম", "মনোগ্রামকে ঘিরে রাখা একটি সবুজ রেখা, মুদ্রিত পৃষ্ঠার মার্জিনের মতো।"],
      ["বাইরের ফ্রেম", "পৃষ্ঠার চারপাশে একটি নীল রেখা: যে কাঠামো একটি ভাবনাকে কোড থেকে মুদ্রণে নিয়ে যায়।"],
    ],
    spaceEyebrow: ["০২ / ফাঁকা জায়গা ও আকার", "শ্বাস নেওয়ার জায়গা।"],
    spaceTitle: "শ্বাস নেওয়ার জায়গা।",
    spaceText: "লোগোর চারপাশে অন্তত A অক্ষরের উচ্চতার সমান ফাঁকা জায়গা রাখুন। এই অংশে কোনো লেখা, ছবি বা প্রান্ত ঢুকবে না।",
    spaceMark: "A",
    sizes: [["স্ক্রিনে সর্বনিম্ন", "৪৮ পিক্সেল প্রস্থ"], ["মুদ্রণে সর্বনিম্ন", "১৫ মিলিমিটার প্রস্থ"], ["এর চেয়ে ছোট হলে", "ব্রাউজার আইকন ব্যবহার করুন"]],
    colourEyebrow: ["০৩ / রং", "লোগো থেকে নেওয়া।"],
    colourTitle: "সবুজ, নীল ও কাগজ।",
    colourText: "রংগুলো সরাসরি লোগো থেকে নেওয়া। এমারেল্ড পরিচয় বহন করে, নীল শুধু বাইরের ফ্রেম ও সূক্ষ্ম অ্যাকসেন্টের জন্য, আর উষ্ণ কাগজ-রং প্রতিটি পৃষ্ঠায় স্থিরতা আনে।",
    swatchNames: [
      ["অ্যালগোরিজম এমারেল্ড", "লোগোর মনোগ্রাম ও ভেতরের ফ্রেম"],
      ["অ্যালগোরিজম ব্লু", "লোগোর বাইরের ফ্রেম, সূক্ষ্ম অ্যাকসেন্ট"],
      ["প্রেস গ্রিন", "বাটন, লিংক ও হাইলাইট"],
      ["হেরিটেজ গ্রিন", "বিশেষ অংশ ও গাঢ় পটভূমি"],
      ["কালি", "মূল লেখা ও শিরোনাম"],
      ["কাগজ", "পৃষ্ঠার পটভূমি"],
    ],
    copyHex: "কপি",
    copied: "কপি হয়েছে",
    typeEyebrow: ["০৪ / টাইপোগ্রাফি", "ধ্রুপদি সেরিফ পরিবার।"],
    typeTitle: "বইয়ের মতো বিন্যাস।",
    typeText: "শিরোনামে Playfair Display, মূল লেখায় Lora, আর বাংলায় Noto Serif Bengali ব্যবহৃত হয়। একসাথে এগুলো প্রেসকে যত্নে টাইপসেট করা বইয়ের অনুভূতি দেয়।",
    fonts: [
      ["Playfair Display", "প্রদর্শনী ও শিরোনাম", "Regular 400 · Medium 500 · Italic", "Code to Print."],
      ["Lora", "মূল লেখা ও ক্যাপশন", "Regular 400 · Medium 500 · Italic", "Research to Global Books, set for sustained reading."],
      ["Noto Serif Bengali", "বাংলা লেখা", "Regular 400 · Medium 500", "কোড থেকে মুদ্রণ, গবেষণা থেকে বিশ্বমানের বই।"],
    ],
    useEyebrow: ["০৫ / সঠিক ব্যবহার", "লোগো কোথায় মানায়।"],
    useTitle: "লোগো কোথায় মানায়।",
    useText: "লোগোটি হালকা পটভূমিতে সরবরাহ করা হয়েছে। কাগজ-রং বা সাদার ওপর রাখুন; গাঢ় পটভূমিতে একটি হালকা প্যানেলের ভেতরে বসান।",
    uses: ["কাগজ-রঙের ওপর", "সাদার ওপর", "গাঢ় সবুজে হালকা প্যানেলে"],
    misuseTitle: "প্রতীক কখনো বদলাবেন না।",
    misuses: ["টেনে লম্বা বা চেপে ছোট করবেন না", "ঘোরাবেন না", "রং বদলাবেন না", "ছায়া বা ইফেক্ট যোগ করবেন না", "ফ্রেম কেটে ফেলবেন না", "ব্যস্ত ছবির ওপর বসাবেন না"],
    voiceEyebrow: ["০৬ / নাম ও ভাষা", "আমাদের নাম যেভাবে লিখি।"],
    voiceTitle: "আমাদের নাম যেভাবে লিখি।",
    lines: [["নাম", "অ্যালগোরিজম প্রেস · Algorism Press"], ["ট্যাগলাইন", "কোড থেকে মুদ্রণ, গবেষণা থেকে বিশ্বমানের বই"], ["মূলমন্ত্র", "জ্ঞান · যুক্তি · সত্য (Scientia · Ratio · Veritas)"], ["স্বাক্ষর-বাক্য", "স্বাধীন ভাবনা। দীর্ঘস্থায়ী সংস্করণ।"]],
    rules: [
      "Algorism লিখুন, কখনো Algorithm নয়।",
      "প্রথম উল্লেখে পুরো নাম, অ্যালগোরিজম প্রেস, লিখুন।",
      "নামের সাথে ® চিহ্ন যোগ করবেন না।",
      "লম্বা ড্যাশ এড়িয়ে চলুন। দাঁড়ি, কমা বা কোলন ব্যবহার করুন।",
      "সংযত ও নির্ভুল ভাষায় লিখুন। শুধু নিশ্চিত তথ্যই দাবি করুন।",
    ],
    filesEyebrow: ["০৭ / ফাইল ও অনুমতি", "লোগো ফাইল।"],
    filesTitle: "লোগো ফাইল।",
    filesText: "অংশীদার, প্রতিষ্ঠান ও গণমাধ্যম এই নির্দেশিকা মেনে অ্যালগোরিজম প্রেসকে বোঝাতে লোগো ব্যবহার করতে পারেন। অন্য যেকোনো ব্যবহারের আগে আমাদের লিখুন।",
    files: [["প্রধান লোগো", "JPG · ৫৭৯ × ৪৯৮"], ["ব্রাউজার আইকন", "PNG · ৬৪ × ৬৪"]],
    inquiry: "অনুমতির জন্য লিখুন",
  },
} as const;

function Eyebrow({ pair }: { pair: readonly [string, string] | readonly string[] }) {
  return <div className="eyebrow"><span>{pair[0]}</span><span>{pair[1]}</span></div>;
}

function Swatch({ index, lang }: { index: number; lang: Lang }) {
  const t = copy[lang];
  const s = swatches[index];
  const [copied, setCopied] = useState(false);
  const [name, role] = t.swatchNames[index];
  const onCopy = async () => {
    try { await navigator.clipboard.writeText(s.hex); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* clipboard unavailable */ }
  };
  return <article className="swatch">
    <div className={`swatch-chip ${s.token}`} />
    <div className="swatch-body">
      <h3>{name}</h3>
      <p>{role}</p>
      <dl><div><dt>HEX</dt><dd>{s.hex}</dd></div><div><dt>RGB</dt><dd>{s.rgb}</dd></div></dl>
      <Button variant="ghost" size="sm" className="swatch-copy" onClick={onCopy} aria-label={`${t.copyHex} ${s.hex}`}>{copied ? <Check /> : <Copy />}{copied ? t.copied : t.copyHex}</Button>
    </div>
  </article>;
}

export function BrandGuide({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <>
    <PageIntro number={lang === "bn" ? "০০" : "00"} label={t.label} title={t.title}><p>{t.intro}</p></PageIntro>

    <section className="section page-width">
      <Eyebrow pair={t.markEyebrow} />
      <div className="brand-mark-grid">
        <figure className="brand-mark-stage"><img src={logo.url} alt={t.logoAlt} width={579} height={498} fetchPriority="high" /></figure>
        <div><h2 className="brand-heading">{t.markTitle}</h2><p className="brand-lede">{t.markText}</p>
          <ol className="brand-anatomy">{t.anatomy.map(([title, text], i) => <li key={title}><span>{lang === "bn" ? ["০১", "০২", "০৩"][i] : `0${i + 1}`}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </div>
      </div>
    </section>

    <section className="section page-width brand-rule">
      <Eyebrow pair={t.spaceEyebrow} />
      <div className="brand-split">
        <div><h2 className="brand-heading">{t.spaceTitle}</h2><p className="brand-lede">{t.spaceText}</p>
          <dl className="brand-sizes">{t.sizes.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>
        <div className="clearspace-demo" aria-hidden="true">
          <span className="cs-mark cs-top">{t.spaceMark}</span><span className="cs-mark cs-left">{t.spaceMark}</span>
          <div className="clearspace-zone"><img src={logo.url} alt="" width={579} height={498} loading="lazy" /></div>
          <div className="size-row"><img src={logo.url} alt="" width={96} height={83} loading="lazy" /><img src={logo.url} alt="" width={64} height={55} loading="lazy" /><img src={logo.url} alt="" width={48} height={41} loading="lazy" /><img src="/favicon.png" alt="" width={24} height={24} loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section className="section brand-surface">
      <div className="page-width">
        <Eyebrow pair={t.colourEyebrow} />
        <div className="section-heading"><h2>{t.colourTitle}</h2><div><p>{t.colourText}</p></div></div>
        <div className="swatch-grid">{swatches.map((s, i) => <Swatch key={s.hex} index={i} lang={lang} />)}</div>
      </div>
    </section>

    <section className="section page-width">
      <Eyebrow pair={t.typeEyebrow} />
      <div className="section-heading"><h2>{t.typeTitle}</h2><div><p>{t.typeText}</p></div></div>
      <div className="type-grid">{t.fonts.map(([font, role, weights, sample], i) => <article key={font} className={`type-specimen type-${i}`}>
        <span className="type-aa" lang={i === 2 ? "bn" : "en"}>{i === 2 ? "অআ" : "Aa"}</span>
        <h3>{font}</h3><p className="type-role">{role}</p><p className="type-sample" lang={i === 2 ? "bn" : "en"}>{sample}</p><p className="type-weights">{weights}</p>
      </article>)}</div>
    </section>

    <section className="section page-width brand-rule">
      <Eyebrow pair={t.useEyebrow} />
      <div className="section-heading"><h2>{t.useTitle}</h2><div><p>{t.useText}</p></div></div>
      <div className="usage-grid">{t.uses.map((label, i) => <figure key={label} className="usage-card"><div className={`usage-stage ${useClasses[i]}`}><span className="usage-panel"><img src={logo.url} alt="" width={579} height={498} loading="lazy" /></span></div><figcaption><Check size={16} className="usage-ok" /> {label}</figcaption></figure>)}</div>
      <h3 className="misuse-title">{t.misuseTitle}</h3>
      <div className="misuse-grid">{t.misuses.map((label, i) => <figure key={label} className="usage-card"><div className={`usage-stage misuse-stage ${misuseClasses[i]}`} style={i === 5 ? { backgroundImage: `url(${stillLife})` } : undefined}><img src={logo.url} alt="" width={579} height={498} loading="lazy" /></div><figcaption><X size={16} className="usage-no" /> {label}</figcaption></figure>)}</div>
    </section>

    <section className="section brand-surface">
      <div className="page-width">
        <Eyebrow pair={t.voiceEyebrow} />
        <div className="brand-split">
          <div><h2 className="brand-heading">{t.voiceTitle}</h2>
            <dl className="brand-lines">{t.lines.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </div>
          <ul className="brand-rules">{t.rules.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </div>
    </section>

    <section className="section page-width">
      <Eyebrow pair={t.filesEyebrow} />
      <div className="brand-split">
        <div><h2 className="brand-heading">{t.filesTitle}</h2><p className="brand-lede">{t.filesText}</p>
          <Button size="lg" className="mt-8" asChild><a href="mailto:rafi@gmrafi.com.bd?subject=Brand%20Use%20Inquiry%20-%20Algorism%20Press">{t.inquiry} <ArrowUpRight /></a></Button>
        </div>
        <div className="file-list">
          <a href={logo.url} download="algorism-press-logo.jpg"><img src={logo.url} alt="" width={579} height={498} loading="lazy" /><span><strong>{t.files[0][0]}</strong>{t.files[0][1]}</span><Download size={18} /></a>
          <a href="/favicon.png" download="algorism-press-icon.png"><img src="/favicon.png" alt="" width={64} height={64} loading="lazy" /><span><strong>{t.files[1][0]}</strong>{t.files[1][1]}</span><Download size={18} /></a>
        </div>
      </div>
    </section>
  </>;
}
