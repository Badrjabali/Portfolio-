@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --color-bg: #f5f5f5;
  --color-page: #ffffff;
  --color-ink: #1e1e1e;
  --color-muted: #8a8a8a;
  --color-gold: #d4a843;
  --color-gold-deep: #bf9735;
  --color-soft: #f8f8f8;
  --color-line: #ececec;
}

@layer base {
  html { scroll-behavior: smooth; }
  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f5f5f5;
    color: #1e1e1e;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  * { box-sizing: border-box; }
}

@layer components {
  .bj-root { min-height: 100vh; }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  .page {
    background: #ffffff;
    border-radius: 28px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
    margin-bottom: 3rem;
    padding: 3.5rem 4rem;
    transition: box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    animation: bjFadeUp 0.7s ease forwards;
  }
  .page:nth-child(2) { animation-delay: 0.05s; }
  .page:nth-child(3) { animation-delay: 0.10s; }
  .page:nth-child(4) { animation-delay: 0.15s; }
  .page:nth-child(5) { animation-delay: 0.20s; }
  .page:nth-child(6) { animation-delay: 0.25s; }
  .page:nth-child(7) { animation-delay: 0.30s; }
  .page:nth-child(8) { animation-delay: 0.35s; }
  .page:hover { box-shadow: 0 12px 48px rgba(0,0,0,0.07); }

  @keyframes bjFadeUp { to { opacity: 1; transform: translateY(0); } }

  .section-label {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8a8a8a;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  h1 { font-size: 3.6rem; font-weight: 700; letter-spacing: -0.03em; color: #1e1e1e; line-height: 1.1; }
  h2 { font-size: 2.4rem; font-weight: 600; letter-spacing: -0.02em; color: #1e1e1e; margin-top: 0.2rem; }
  h3 { font-size: 1.2rem; font-weight: 600; color: #1e1e1e; margin: 1.2rem 0 0.4rem; }
  .subhead { font-size: 1.2rem; font-weight: 400; color: #8a8a8a; margin-top: 0.2rem; }

  .gold-line { width: 56px; height: 4px; background: #d4a843; border-radius: 4px; margin: 0.6rem 0 1.2rem; }
  .gold-line.centered { margin: 0.6rem auto 1.2rem; }
  .tagline {
    font-size: 1.35rem;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0.6rem 0 0.4rem;
  }
  .tagline-stat {
    font-size: 1rem;
    color: #8a8a8a;
    margin-bottom: 0.4rem;
  }
  .tagline-stat .stat-num {
    color: #d4a843;
    font-weight: 700;
    font-size: 1.3rem;
  }
  .hero-stats {
    display: flex; flex-wrap: wrap; gap: 1rem 2.5rem;
    justify-content: center; margin: 1.5rem 0;
  }

  .btn {
    display: inline-block;
    background: #1e1e1e;
    color: #ffffff;
    padding: 0.85rem 2.8rem;
    border-radius: 60px;
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.15s ease;
  }
  .btn:hover { background: #000000; transform: translateY(-2px); }
  .btn-gold { background: #d4a843; color: #ffffff; }
  .btn-gold:hover { background: #bf9735; }
  .btn-outline { background: transparent; color: #1e1e1e; border: 1.5px solid #1e1e1e; }
  .btn-outline:hover { background: #1e1e1e; color: #ffffff; }
  .btn-sm { padding: 0.5rem 1.5rem; font-size: 0.8rem; }

  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; }
  .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1.5rem; }

  .card {
    background: #f8f8f8;
    border-radius: 18px;
    padding: 1.5rem 1.25rem;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.05); }
  .card .big-number { font-size: 2.6rem; font-weight: 700; color: #1e1e1e; line-height: 1.2; }
  .card .label { font-size: 0.8rem; color: #8a8a8a; font-weight: 500; margin-top: 0.2rem; }

  .channel-bar {
    margin-top: 1.5rem; background: #f8f8f8; padding: 1rem 1.5rem;
    border-radius: 18px; display: flex; flex-wrap: wrap; gap: 1.5rem 2.5rem;
  }

  .brand-card {
    background: #ffffff;
    border: 1px solid #ececec;
    border-radius: 16px;
    padding: 1.5rem 1rem;
    text-align: center;
    transition: box-shadow 0.25s ease, transform 0.2s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }
  .brand-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.06); transform: translateY(-3px); }
  .brand-card .brand-logo-container {
    height: 70px; display: flex; align-items: center; justify-content: center;
    margin-bottom: 0.7rem;
  }
  .brand-card .brand-logo-container img { max-height: 100%; max-width: 100%; object-fit: contain; }
  .brand-card .brand-name { font-weight: 600; font-size: 0.95rem; color: #1e1e1e; }
  .brand-card .brand-desc { font-size: 0.8rem; color: #8a8a8a; margin-top: 0.15rem; }
  .brand-card .brand-via {
    font-size: 0.7rem; color: #8a8a8a; font-style: italic; margin-top: 0.2rem;
  }
  .brand-card .brand-result { font-size: 0.8rem; font-weight: 600; color: #d4a843; margin-top: 0.4rem; }
  .brand-card .brand-visit {
    margin-top: 0.5rem; font-size: 0.75rem; font-weight: 600;
    color: #1e1e1e; letter-spacing: 0.04em;
  }

  .brand-card-logo {
    background: #ffffff;
    border: 1px solid #ececec;
    border-radius: 18px;
    padding: 3rem;
    display: flex; align-items: center; justify-content: center;
    transition: box-shadow 0.25s ease, transform 0.2s ease;
    min-height: 220px;
  }
  .brand-card-logo:hover { box-shadow: 0 10px 32px rgba(0,0,0,0.06); transform: translateY(-3px); }
  .brand-card-logo img { max-height: 160px; max-width: 100%; object-fit: contain; }

  .view-brand { margin-top: 1.2rem; }

  .badge-gold {
    display: inline-block;
    background: #d4a843;
    color: #ffffff;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.2rem 1rem;
    border-radius: 40px;
    letter-spacing: 0.04em;
  }
  .skill-tag {
    display: inline-block;
    background: #f0f0f0;
    padding: 0.4rem 1rem;
    border-radius: 40px;
    font-size: 0.85rem;
    color: #1e1e1e;
    margin: 0.25rem;
  }
  .skill-tag.gold { background: #d4a843; color: #ffffff; }

  .portrait {
    width: 240px; height: 240px; border-radius: 50%;
    overflow: hidden; margin: 0 auto 1.2rem;
    background: #f0f0f0;
  }
  .portrait img { width: 100%; height: 100%; object-fit: cover; }

  .nav-links {
    display: flex; flex-wrap: wrap; gap: 1rem 2rem;
    justify-content: center; margin: 1.5rem 0 0.5rem;
  }
  .nav-links a {
    color: #8a8a8a; text-decoration: none;
    font-size: 0.85rem; font-weight: 500;
    transition: color 0.2s;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.2rem;
  }
  .nav-links a:hover { color: #d4a843; border-bottom-color: #d4a843; }

  .contact-item { display: flex; gap: 1rem; align-items: baseline; font-size: 1rem; padding: 0.5rem 0; }
  .contact-item strong { color: #8a8a8a; font-weight: 500; min-width: 100px; }

  .text-center { text-align: center; }
  .flex-center { display: flex; flex-direction: column; align-items: center; }

  .arrow-row { display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 0.4rem; }
  .arrow-row .arrow { color: #d4a843; }
  .about-quote {
    margin-top: 1.2rem; font-size: 1.15rem; font-weight: 500;
    color: #1e1e1e; padding-left: 1rem; border-left: 3px solid #d4a843;
  }

  .exp-role { font-weight: 600; font-size: 1.1rem; margin-top: 0.5rem; }
  .exp-role .muted-line { font-weight: 400; color: #8a8a8a; }
  .exp-grid {
    margin-top: 1.2rem; display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  .exp-grid p { margin-top: 0.4rem; }

  .case-meta { font-weight: 500; color: #8a8a8a; font-size: 0.9rem; }
  .contrib-list { padding-left: 1.2rem; color: #1e1e1e; font-size: 0.95rem; margin-top: 0.5rem; }
  .results-list { padding-left: 1.2rem; color: #d4a843; font-weight: 600; margin-top: 0.5rem; }
}

@media (max-width: 992px) {
  .page { padding: 2.5rem 2rem; }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2rem; }
  .grid-2 { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .page { padding: 1.8rem 1.2rem; }
  h1 { font-size: 2.2rem; }
  h2 { font-size: 1.6rem; }
  .grid-3 { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
  .portrait { width: 180px; height: 180px; }
  .btn { padding: 0.7rem 2rem; font-size: 0.9rem; }
}
@media (max-width: 480px) {
  .page { padding: 1.2rem 0.8rem; }
  .grid-4 { grid-template-columns: 1fr; }
  .contact-item { flex-direction: column; gap: 0.1rem; }
  .contact-item strong { min-width: auto; }
}
