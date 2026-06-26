import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.jpeg.asset.json";
import representAsset from "@/assets/represent.png.asset.json";
import chariAsset from "@/assets/chari.png.asset.json";
import rokkaAsset from "@/assets/rokka.jpg.asset.json";
import nobodysAsset from "@/assets/nobodyschild.jpg.asset.json";
import millieAsset from "@/assets/millie.png.asset.json";
import zatinoAsset from "@/assets/zatino.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Badr Jabali — Performance Marketing Specialist" },
      {
        name: "description",
        content:
          "Performance marketing specialist and paid media buyer. 4 years scaling profitable ROAS for 15+ DTC e-commerce brands across Meta, Google, and TikTok.",
      },
      { property: "og:title", content: "Badr Jabali — Performance Marketing Specialist" },
      {
        property: "og:description",
        content:
          "I turn ad spend into profit — not just clicks. 3.4x average ROAS delivered across 15+ DTC brands.",
      },
    ],
  }),
  component: Portfolio,
});

type Brand = {
  id: string;
  name: string;
  desc: string;
  result: string;
  logo: string;
  url: string;
  via?: string;
};

const BRANDS: Brand[] = [
  {
    id: "case-represent",
    name: "Represent",
    desc: "UK Streetwear",
    result: "3.4x ROAS",
    logo: representAsset.url,
    url: "https://representclo.com",
  },
  {
    id: "case-chari",
    name: "Chari",
    desc: "Morocco B2B Platform",
    result: "+40% Sign-ups",
    logo: chariAsset.url,
    url: "https://chari.ma",
    via: "*Through Mercodize",
  },
  {
    id: "case-rokka",
    name: "Rokka & Rolla",
    desc: "USA Apparel",
    result: "80% GMV Growth",
    logo: rokkaAsset.url,
    url: "https://rokka-rolla.com",
  },
  {
    id: "case-nobodys",
    name: "Nobody's Child",
    desc: "UK Fashion",
    result: "+28% DTC Revenue",
    logo: nobodysAsset.url,
    url: "https://nobodyschild.com",
  },
  {
    id: "case-millie",
    name: "Millie & Jones",
    desc: "UK Furniture",
    result: "3.1x ROAS",
    logo: millieAsset.url,
    url: "https://www.millieandjones.co.uk",
  },
  {
    id: "case-zatino",
    name: "Zatino",
    desc: "Morocco Footwear",
    result: "+35% Sales",
    logo: zatinoAsset.url,
    url: "https://zatino.ie",
  },
];

function BrandLogoCard({ logo, name, url }: { logo: string; name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="brand-card-logo"
      aria-label={`Visit ${name} official site`}
    >
      <img src={logo} alt={`${name} logo`} />
    </a>
  );
}

function Portfolio() {
  return (
    <div className="bj-root">
      <div className="container">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#kpi">KPI</a>
          <a href="#experience">Experience</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#brands">Brands</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HOME */}
        <section className="page" id="home">
          <div className="flex-center text-center">
            <div className="portrait">
              <img src={portraitAsset.url} alt="Badr Jabali portrait" />
            </div>
            <h1>Badr Jabali</h1>
            <div className="gold-line centered" />
            <p className="subhead">Performance Marketing Specialist · Paid Media Buyer</p>
            <p className="tagline">
              I turn ad spend into profit — not just clicks.
            </p>
            <p className="tagline-stat">
              <span className="stat-num">3.4x</span> Average ROAS Delivered
            </p>
            <div className="hero-stats">
              <span><strong>4 Years Experience</strong></span>
              <span><strong>15+ Brands</strong></span>
              <span><strong>Consistent Profitable ROAS</strong></span>
            </div>
            <a href="#contact" className="btn btn-gold">WORK WITH ME</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="page" id="about">
          <div>
            <div className="section-label">Executive Summary</div>
            <h2>About Me</h2>
            <div className="gold-line" />
            <p style={{ fontSize: "1.05rem" }}>
              I'm a Media Buyer with <strong>4 years of experience</strong> managing paid acquisition for DTC e-commerce brands. I've worked across Meta, Google, and TikTok, delivering consistent profitable ROAS for 15+ brands across Morocco, the UK, and the USA.
            </p>
            <p style={{ marginTop: "1rem" }}>
              My approach combines data-driven audience strategy with relentless creative testing. I test 20+ creatives per week, kill losers fast, and scale winners hard.
            </p>
            <div style={{ margin: "1.2rem 0" }}>
              {[
                "I speak 3 languages (English, French, Arabic) — allowing me to manage campaigns across diverse markets.",
                "I build systems, not just campaigns — prospecting, retargeting, lookalike, and LTV optimization.",
                "I focus on profit, not just clicks or impressions.",
              ].map((line) => (
                <div key={line} className="arrow-row">
                  <span className="arrow">→</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
            <p className="about-quote">
              I don't just run ads. I build profit engines.
            </p>
          </div>
        </section>

        {/* KPI */}
        <section className="page" id="kpi">
          <div className="section-label">Key Performance Indicators</div>
          <h2>KPI Dashboard</h2>
          <div className="gold-line" />
          <div className="grid-4" style={{ marginTop: "1.5rem" }}>
            {[
              { n: "3.4x", l: "Average ROAS Delivered" },
              { n: "-30%", l: "Avg CPA Reduction" },
              { n: "2.8%", l: "Avg CTR" },
              { n: "-25%", l: "Avg CAC Reduction" },
              { n: "✔", l: "CPM Optimized" },
              { n: "✔", l: "AOV Maintained" },
              { n: "✔", l: "MER Profitable" },
              { n: "✔", l: "LTV Increased" },
            ].map((k) => (
              <div className="card" key={k.l}>
                <div className="big-number">{k.n}</div>
                <div className="label">{k.l}</div>
              </div>
            ))}
          </div>
          <div className="channel-bar">
            <span><strong>Channel Performance:</strong></span>
            <span>Meta Ads Manager — Primary (4 years)</span>
            <span>Google Ads — Secondary (3 years)</span>
            <span>TikTok Ads — Scaling (2 years)</span>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="page" id="experience">
          <div className="section-label">Experience</div>
          <h2>Timeline</h2>
          <div className="gold-line" />
          <p className="exp-role">
            2022–2026 · Performance Marketing Specialist
            <br />
            <span className="muted-line">Mercodize — Casablanca, Morocco</span>
          </p>
          <div className="exp-grid">
            <div>
              <span className="badge-gold">2022</span>
              <p>Started as Media Buyer. Managed first client accounts. Developed testing framework.</p>
            </div>
            <div>
              <span className="badge-gold">2023</span>
              <p>Took on larger budgets ($15k/month). Scaled multiple accounts profitably.</p>
            </div>
            <div>
              <span className="badge-gold">2024</span>
              <p>Became lead buyer for key accounts. Full ownership of strategy, creative testing, and reporting.</p>
            </div>
            <div>
              <span className="badge-gold">2025–2026</span>
              <p>Managed portfolio of 15+ clients across my tenure. Delivered consistent profitable ROAS. Built systems that scaled across multiple accounts.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <div id="case-studies">
          <CaseStudy
            id="case-represent"
            title="Represent — UK Streetwear"
            meta="£93M+ annual revenue · During my time at Mercodize"
            challenge="Product drops generate 25x traffic spikes. Conversion rates were underperforming. ROAS was below target."
            contributions={[
              "Audited account structure, reallocated budget to top audiences",
              "Creative testing framework (20+ creatives per drop)",
              "Lookalike audiences from existing customer data",
              "Retargeting for window-shoppers & abandoned carts",
              "Bid optimization by time zone & market",
            ]}
            results={["ROAS: 2.1x → 3.4x (12 months)", "CPA reduced by 30%", "Budget: $20k → $50k profitably"]}
            brand={BRANDS[0]}
          />
          <CaseStudy
            id="case-chari"
            title="Chari — Morocco B2B Platform"
            meta="$100M valuation · FT & Harvard case study · *Through Mercodize"
            challenge="Acquiring informal Moroccan retailers through digital channels — a traditionally offline audience. Brand awareness campaigns weren't converting."
            contributions={[
              "Shifted to direct-response messaging",
              "Targeted retailers via Facebook & WhatsApp",
              "Produced video testimonials from existing merchants",
              "Retargeting with educational content & offers",
            ]}
            results={["Merchant sign-ups: +40%", "Cost-per-acquisition: -35%", "Contributed to overall growth during scaling phase"]}
            brand={BRANDS[1]}
          />
          <CaseStudy
            id="case-rokka"
            title="Rokka & Rolla — USA Apparel"
            meta="California lifestyle brand · 80% GMV growth"
            challenge="Over-reliance on Amazon with rising fees and poor brand positioning. Needed to expand to curated marketplaces."
            contributions={[
              "Developed multi-channel paid media strategy beyond Amazon",
              "Built lookalike audiences from high-LTV customers",
              "Tested creative variations across platforms",
              "Implemented retargeting for abandoned carts",
            ]}
            results={["80% GMV growth in 12 months", "98% of sales from marketplaces", "45% of sales through curated marketplaces"]}
            brand={BRANDS[2]}
          />
          <CaseStudy
            id="case-nobodys"
            title="Nobody's Child — UK Fashion"
            meta="1M orders · M&S partnership"
            challenge="Balancing DTC sales with wholesale partnerships (M&S). Needed to drive brand awareness AND direct conversions."
            contributions={[
              "Built multi-channel attribution tracking (DTC vs wholesale)",
              "Created audience segments to capture traffic from M&S",
              "Set up retargeting for back-in-stock notifications",
            ]}
            results={["28% DTC revenue increase", "Brand partnerships strengthened with M&S", "1M orders completed post-migration"]}
            brand={BRANDS[3]}
          />
          <CaseStudy
            id="case-millie"
            title="Millie & Jones — UK Furniture"
            meta="Seven-figure revenue · 3.1x ROAS"
            challenge="Basic website and underdeveloped brand identity. Needed to build trust in a high-ticket furniture market."
            contributions={[
              "Built audience targeting for high-intent parents",
              "Created trust-focused creative (Trustpilot reviews)",
              "Retargeting sequences for purchase hesitation",
            ]}
            results={["3.1x ROAS", "Seven-figure annual revenue achieved"]}
            brand={BRANDS[4]}
          />
          <CaseStudy
            id="case-zatino"
            title="Zatino — Morocco Footwear"
            meta="Premium leather footwear · 35% sales increase"
            challenge="Online and in-store inventory sync issues. Inconsistent cross-channel tracking."
            contributions={[
              "Ran paid media for online and in-store sales",
              "Targeted fashion-conscious demographics",
              "Creative highlighting premium material quality",
            ]}
            results={["35% combined sales increase", "Unified POS attribution framework setup"]}
            brand={BRANDS[5]}
          />
        </div>

        {/* BRANDS SUMMARY */}
        <section className="page" id="brands">
          <div className="section-label">Brand Portfolio</div>
          <h2>Brands I've Contributed To</h2>
          <div className="gold-line" />
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            {BRANDS.map((b) => (
              <a
                key={b.id}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card"
                aria-label={`Visit ${b.name} official site`}
              >
                <div className="brand-logo-container">
                  <img src={b.logo} alt={`${b.name} logo`} />
                </div>
                <div className="brand-name">{b.name}</div>
                <div className="brand-desc">{b.desc}</div>
                {b.via && <div className="brand-via">{b.via}</div>}
                <div className="brand-result">{b.result}</div>
                <div className="brand-visit">View Brand →</div>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS & CONTACT */}
        <section className="page" id="skills">
          <div className="grid-2">
            <div>
              <div className="section-label">Expertise</div>
              <h2>Core Skills</h2>
              <div className="gold-line" />
              <div style={{ marginTop: "1rem" }}>
                {[
                  ["Meta Ads Manager", true],
                  ["Google Ads", true],
                  ["TikTok Ads", true],
                  ["UTM Tracking", false],
                  ["Pixel Setup", false],
                  ["Google Analytics", false],
                  ["Creative Strategy & Testing", false],
                  ["Audience Segmentation", false],
                  ["Budget Scaling", false],
                  ["DTC E-commerce Acquisition", false],
                ].map(([label, gold]) => (
                  <span key={label as string} className={`skill-tag${gold ? " gold" : ""}`}>{label}</span>
                ))}
              </div>
            </div>
            <div id="contact">
              <div className="section-label">Get In Touch</div>
              <h2>Contact Me</h2>
              <div className="gold-line" />
              <div className="contact-item"><strong>Languages:</strong> English, French, Arabic</div>
              <div className="contact-item" style={{ marginTop: "0.5rem" }}>
                <strong>Phone:</strong>{" "}
                <a href="tel:+212644621035">+212 644621035</a>
              </div>
              <div className="contact-item" style={{ marginTop: "1rem" }}>
                <a href="mailto:badrjabali@gmail.com" className="btn btn-gold btn-sm">badrjabali@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CaseStudy({
  id,
  title,
  meta,
  challenge,
  contributions,
  results,
  brand,
}: {
  id: string;
  title: string;
  meta: string;
  challenge: string;
  contributions: string[];
  results: string[];
  brand: Brand;
}) {
  return (
    <section className="page" id={id}>
      <div className="grid-2">
        <div>
          <div className="section-label">Case Study</div>
          <h2>{title}</h2>
          <div className="gold-line" />
          <p className="case-meta">{meta}</p>
          <h3>Challenge</h3>
          <p>{challenge}</p>
          <h3>My Contribution</h3>
          <ul className="contrib-list">
            {contributions.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <h3>Results</h3>
          <ul className="results-list">
            {results.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm view-brand"
          >
            View Brand →
          </a>
        </div>
        <BrandLogoCard logo={brand.logo} name={brand.name} url={brand.url} />
      </div>
    </section>
  );
}
