import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "Services", "Projects", "Contact"];

const SERVICES = [
  {
    icon: "⬡",
    title: "Modern Web Solutions",
    desc: "Fast, responsive and scalable websites crafted for startups, creators and businesses.",
    tag: "Frontend / Fullstack",
    accentHex: "#2563eb",
  },
  {
    icon: "◈",
    title: "Creative Design",
    desc: "Premium UI/UX with smooth animations and a modern aesthetic built to convert.",
    tag: "Design / UI-UX",
    accentHex: "#7c3aed",
  },
  {
    icon: "⬢",
    title: "Automation & AI",
    desc: "Smart integrations, AI workflows and automation tools for modern businesses.",
    tag: "AI / Automation",
    accentHex: "#06b6d4",
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "AI Chat Dashboard",
    desc: "Real-time AI conversations with multi-model support, memory, and custom personas.",
    tags: ["React", "OpenAI", "Supabase"],
    accentHex: "#2563eb",
    accentAlpha: "rgba(37,99,235,0.14)",
  },
  {
    num: "02",
    title: "Gaming Community Platform",
    desc: "Live leaderboards, matchmaking, and clan management for competitive gaming.",
    tags: ["Next.js", "WebSockets", "Postgres"],
    accentHex: "#7c3aed",
    accentAlpha: "rgba(124,58,237,0.14)",
  },
  {
    num: "03",
    title: "Business Portfolio Website",
    desc: "Conversion-focused portfolio with CMS integration and analytics.",
    tags: ["Astro", "Sanity", "Vercel"],
    accentHex: "#06b6d4",
    accentAlpha: "rgba(6,182,212,0.14)",
  },
  {
    num: "04",
    title: "Social Media Automation",
    desc: "Schedule, repurpose and auto-post across platforms powered by AI copy generation.",
    tags: ["Python", "n8n", "Claude API"],
    accentHex: "#10b981",
    accentAlpha: "rgba(16,185,129,0.14)",
  },
];

const STATS = [
  { val: "50+", label: "Projects Shipped" },
  { val: "24/7", label: "Support & Innovation" },
  { val: "100%", label: "Creative Focus" },
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [state, setState] = useState({ text: "", wordIdx: 0, charIdx: 0, deleting: false });
  useEffect(() => {
    const { wordIdx, charIdx, deleting } = state;
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setState(s => ({ ...s, charIdx: s.charIdx + 1, text: current.slice(0, s.charIdx + 1) })), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setState(s => ({ ...s, deleting: true })), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setState(s => ({ ...s, charIdx: s.charIdx - 1, text: current.slice(0, s.charIdx - 1) })), speed / 2);
    } else {
      setState(s => ({ ...s, deleting: false, wordIdx: (s.wordIdx + 1) % words.length }));
    }
    return () => clearTimeout(timeout);
  }, [state]);
  return state.text;
}

const tag = (hex) => ({
  display: "inline-flex", alignItems: "center", padding: "3px 12px",
  borderRadius: 999, border: `1px solid ${hex}55`,
  background: `${hex}18`, color: hex,
  fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
});

const btnPrimary = {
  padding: "14px 32px", borderRadius: 16,
  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
  color: "#fff", fontWeight: 600, fontSize: 16,
  border: "none", cursor: "pointer",
  boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
  textDecoration: "none", display: "inline-block",
  fontFamily: "'DM Sans', sans-serif",
  transition: "transform 0.2s, opacity 0.2s",
};

export default function HaseebHub() {
  const [scrolled, setScrolled] = useState(false);
  const [hovSvc, setHovSvc] = useState(null);
  const [hovProj, setHovProj] = useState(null);
  const typed = useTypewriter(["Web Experiences", "AI Workflows", "Digital Products", "Creative Interfaces"]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const dark = "#06060f";
  const surface = "rgba(255,255,255,0.03)";
  const border = "rgba(255,255,255,0.07)";
  const textPrimary = "#f1f5f9";
  const textMuted = "#64748b";
  const textDim = "#374151";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: dark, color: textPrimary, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');
        * { box-sizing: border-box; }
        html, body { background: #06060f !important; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes orbit1 { from{transform:rotate(0deg) translateX(150px) rotate(0deg)} to{transform:rotate(360deg) translateX(150px) rotate(-360deg)} }
        @keyframes orbit2 { from{transform:rotate(90deg) translateX(240px) rotate(-90deg)} to{transform:rotate(450deg) translateX(240px) rotate(-450deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .syne { font-family: 'Syne', sans-serif !important; }
        .shimmer {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #67e8f9, #60a5fa);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .cursor { display:inline-block; width:3px; height:0.85em; background:#60a5fa; margin-left:4px; vertical-align:middle; border-radius:1px; animation: blink 1s step-end infinite; }
        .grid-bg {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .glow { position:absolute; border-radius:50%; pointer-events:none; }
        .ring { position:absolute; border-radius:50%; border:1px solid rgba(255,255,255,0.04); pointer-events:none; top:50%; left:50%; transform:translate(-50%,-50%); }
        .odot { width:6px; height:6px; border-radius:50%; position:absolute; top:50%; left:50%; margin:-3px; }
        .odot1 { background:#60a5fa; animation: orbit1 9s linear infinite; }
        .odot2 { background:#a78bfa; animation: orbit1 16s linear infinite reverse; }
        .odot3 { background:#34d399; animation: orbit2 20s linear infinite; }
        .scard { transition: transform 0.3s cubic-bezier(.22,1,.36,1), border-color 0.3s, box-shadow 0.3s; }
        .scard:hover { transform: translateY(-5px); }
        .pcard { transition: transform 0.35s cubic-bezier(.22,1,.36,1), border-color 0.35s; }
        .pcard:hover { transform: translateY(-5px); }
        .nav-a { color:#64748b; font-size:14px; text-decoration:none; }
        .nav-a:hover { color:#f1f5f9; }
        .ghost { padding:14px 32px; border-radius:16px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#cbd5e1; font-size:16px; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; text-decoration:none; display:inline-block; }
        .ghost:hover { background:rgba(255,255,255,0.09); color:#f1f5f9; }
        .fa { animation: fadeUp 0.7s ease both; }
        .ftag { font-size:11px; padding:4px 12px; border-radius:999px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#475569; font-weight:500; }
        a:hover { opacity:0.85; }
        section { position: relative; z-index: 1; }
      `}</style>

      <div className="grid-bg" />

      {/* Glows */}
      <div className="glow" style={{ width:600, height:600, background:"#2563eb", filter:"blur(160px)", opacity:0.15, top:-180, right:-80, zIndex:0 }} />
      <div className="glow" style={{ width:500, height:500, background:"#7c3aed", filter:"blur(140px)", opacity:0.11, top:250, left:-120, zIndex:0 }} />
      <div className="glow" style={{ width:400, height:400, background:"#06b6d4", filter:"blur(130px)", opacity:0.09, top:"50%", right:-100, zIndex:0 }} />
      <div className="glow" style={{ width:350, height:350, background:"#7c3aed", filter:"blur(120px)", opacity:0.08, bottom:200, left:-60, zIndex:0 }} />

      {/* ── Navbar ── */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"16px 40px",
        ...(scrolled ? { background:"rgba(6,6,15,0.88)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(255,255,255,0.06)" } : {})
      }}>
        <div className="syne" style={{ fontWeight:800, fontSize:20, display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:30, height:30, borderRadius:8, background:"linear-gradient(135deg,#2563eb,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:13 }}>H</div>
          <span style={{ color:"#f1f5f9" }}>Haseeb<span style={{ color:"#60a5fa" }}>Hub</span></span>
        </div>
        <nav style={{ display:"flex", gap:32 }}>
          {NAV_LINKS.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-a">{l}</a>)}
        </nav>
        <a href="#contact" style={btnPrimary} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
          Let's Talk →
        </a>
      </header>

      {/* ── Hero ── */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"100px 24px 80px", overflow:"hidden" }}>

        {/* Orbit system */}
        <div style={{ position:"absolute", width:300, height:300, top:"50%", left:"50%", marginLeft:-150, marginTop:-150, pointerEvents:"none" }}>
          <div className="ring" style={{ width:300, height:300 }} />
          <div className="ring" style={{ width:500, height:500 }} />
          <div className="ring" style={{ width:740, height:740 }} />
          <div className="odot odot1" />
          <div className="odot odot2" />
          <div className="odot odot3" />
        </div>

        <div style={{ position:"relative", zIndex:2, maxWidth:820 }}>
          {/* Badge */}
          <div className="fa" style={{ animationDelay:"0s", display:"inline-flex", alignItems:"center", gap:8, padding:"6px 18px", borderRadius:999, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", fontSize:12, color:"#94a3b8", backdropFilter:"blur(12px)", marginBottom:36 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#34d399", display:"inline-block", animation:"pulse 2s ease infinite" }} />
            Available for new projects · 2026
          </div>

          {/* Headline */}
          <div className="fa" style={{ animationDelay:"0.1s" }}>
            <h1 className="syne" style={{ fontWeight:800, fontSize:"clamp(52px,9vw,90px)", lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:32, color:"#f1f5f9" }}>
              Building<br />
              <span className="shimmer">{typed}</span>
              <span className="cursor" />
            </h1>
          </div>

          {/* Sub */}
          <div className="fa" style={{ animationDelay:"0.2s" }}>
            <p style={{ color:textMuted, fontSize:18, lineHeight:1.75, maxWidth:520, margin:"0 auto 48px", fontWeight:300 }}>
              HaseebHub crafts stunning web experiences, AI-powered systems and creative digital solutions — pixel-perfect and production-ready.
            </p>
          </div>

          {/* Buttons */}
          <div className="fa" style={{ animationDelay:"0.3s", display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16, marginBottom:80 }}>
            <a href="#projects" style={btnPrimary} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
              View My Work
            </a>
            <a href="#contact" className="ghost">Start a Project</a>
          </div>

          {/* Stats */}
          <div className="fa" style={{ animationDelay:"0.4s", display:"flex", flexWrap:"wrap", justifyContent:"center", borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
            {STATS.map(({ val, label }, i) => (
              <div key={label} style={{ padding:"24px 52px", borderRight: i < STATS.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                <span className="syne" style={{ fontWeight:800, fontSize:34, color:"#f1f5f9" }}>{val}</span>
                <span style={{ fontSize:10, color:"#475569", letterSpacing:"0.14em", textTransform:"uppercase" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.25 }}>
          <span style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:textMuted }}>Scroll</span>
          <div style={{ width:1, height:36, background:"linear-gradient(to bottom, #64748b, transparent)" }} />
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ padding:"120px 24px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:24, marginBottom:64 }}>
          <div>
            <span style={tag("#2563eb")}>Services</span>
            <h2 className="syne" style={{ fontWeight:800, fontSize:"clamp(32px,5vw,52px)", lineHeight:1.1, marginTop:16, color:textPrimary }}>What We<br />Do Best</h2>
          </div>
          <p style={{ color:"#475569", maxWidth:300, fontSize:14, lineHeight:1.85, fontWeight:300 }}>
            Combining technology, creativity and modern development to craft premium digital products.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="scard"
              onMouseEnter={() => setHovSvc(i)}
              onMouseLeave={() => setHovSvc(null)}
              style={{
                borderRadius:28,
                border:`1px solid ${hovSvc===i ? s.accentHex+"60" : border}`,
                background:`linear-gradient(135deg, ${s.accentHex}0e 0%, rgba(255,255,255,0.02) 100%)`,
                padding:32,
                position:"relative", overflow:"hidden",
                boxShadow: hovSvc===i ? `0 20px 60px ${s.accentHex}22` : "none",
                backdropFilter:"blur(12px)",
              }}
            >
              <div style={{ fontSize:28, marginBottom:24, opacity:0.7 }}>{s.icon}</div>
              <span style={tag(s.accentHex)}>{s.tag}</span>
              <h3 className="syne" style={{ fontWeight:700, fontSize:20, margin:"16px 0 10px", color:textPrimary }}>{s.title}</h3>
              <p style={{ color:textMuted, fontSize:14, lineHeight:1.85, fontWeight:300 }}>{s.desc}</p>
              <div style={{ marginTop:28, display:"flex", alignItems:"center", gap:8, fontSize:14, color: hovSvc===i ? "#94a3b8" : "#374151", transition:"color 0.2s" }}>
                <span>Learn more</span>
                <span style={{ transition:"transform 0.25s", transform: hovSvc===i ? "translateX(5px)" : "none" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding:"120px 24px", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:24, marginBottom:64 }}>
            <div>
              <span style={tag("#7c3aed")}>Portfolio</span>
              <h2 className="syne" style={{ fontWeight:800, fontSize:"clamp(32px,5vw,52px)", lineHeight:1.1, marginTop:16, color:textPrimary }}>Featured<br />Projects</h2>
            </div>
            <button className="ghost" style={{ fontSize:14, padding:"12px 24px" }}>View All Work →</button>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className="pcard"
                onMouseEnter={() => setHovProj(i)}
                onMouseLeave={() => setHovProj(null)}
                style={{
                  borderRadius:28,
                  border:`1px solid ${hovProj===i ? p.accentHex+"50" : border}`,
                  background: surface,
                  padding:32, position:"relative", overflow:"hidden",
                  boxShadow: hovProj===i ? "0 24px 60px rgba(0,0,0,0.55)" : "none",
                  backdropFilter:"blur(12px)",
                  cursor:"pointer",
                }}
              >
                {/* Number watermark */}
                <div className="syne" style={{ position:"absolute", top:-8, right:-4, fontWeight:800, fontSize:110, lineHeight:1, color:"#fff", opacity:0.03, userSelect:"none", pointerEvents:"none" }}>
                  {p.num}
                </div>

                {/* Hover glow overlay */}
                {hovProj===i && (
                  <div style={{ position:"absolute", inset:0, background:`radial-gradient(circle at top left, ${p.accentAlpha}, transparent 60%)`, pointerEvents:"none" }} />
                )}

                <div style={{ position:"relative", zIndex:1 }}>
                  <span style={tag(p.accentHex)}>Project {p.num}</span>
                  <h3 className="syne" style={{ fontWeight:700, fontSize:22, margin:"16px 0 10px", color:textPrimary }}>{p.title}</h3>
                  <p style={{ color:textMuted, fontSize:14, lineHeight:1.85, marginBottom:24, fontWeight:300 }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32 }}>
                    {p.tags.map(t => <span key={t} className="ftag">{t}</span>)}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color: hovProj===i ? "#94a3b8" : textDim, transition:"color 0.3s" }}>
                    <span>Case study</span>
                    <span style={{ transition:"transform 0.3s", transform: hovProj===i ? "translateX(6px)" : "none" }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"100px 24px" }}>
        <div style={{ maxWidth:860, margin:"0 auto", position:"relative" }}>
          <div style={{ position:"absolute", inset:0, borderRadius:40, background:"linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))", border:"1px solid rgba(255,255,255,0.08)" }} />
          <div style={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"#2563eb", filter:"blur(100px)", opacity:0.2, pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:-60, left:-60, width:200, height:200, borderRadius:"50%", background:"#7c3aed", filter:"blur(100px)", opacity:0.15, pointerEvents:"none" }} />

          <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"80px 40px" }}>
            <span style={{ ...tag("rgba(255,255,255,0.5)"), border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.05)", color:"#94a3b8", marginBottom:28, display:"inline-block" }}>
              Open to work
            </span>
            <h2 className="syne" style={{ fontWeight:800, fontSize:"clamp(32px,5vw,56px)", lineHeight:1.1, marginBottom:20, color:textPrimary }}>
              Ready to build<br /><span className="shimmer">something amazing?</span>
            </h2>
            <p style={{ color:textMuted, maxWidth:420, margin:"0 auto 48px", fontSize:17, lineHeight:1.75, fontWeight:300 }}>
              Let's turn your idea into a polished digital product — fast, beautiful, and built to last.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16 }}>
              <a href="mailto:hello@haseebhub.com" style={btnPrimary} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
                Start a Conversation →
              </a>
              <a href="#projects" className="ghost">See Work First</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" style={{ borderTop:"1px solid rgba(255,255,255,0.05)", padding:"32px 40px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 }}>
          <div className="syne" style={{ fontWeight:800, fontSize:18, display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:26, height:26, borderRadius:7, background:"linear-gradient(135deg,#2563eb,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:11 }}>H</div>
            <span style={{ color:"#f1f5f9" }}>Haseeb<span style={{ color:"#60a5fa" }}>Hub</span></span>
          </div>
          <p style={{ color:textDim, fontSize:13 }}>© 2026 HaseebHub · Designed with precision & craft.</p>
          <div style={{ display:"flex", gap:24 }}>
            {["Twitter", "GitHub", "LinkedIn"].map(s => (
              <a key={s} href="#" style={{ color:textDim, fontSize:13, textDecoration:"none" }}
                onMouseEnter={e => e.target.style.color="#94a3b8"}
                onMouseLeave={e => e.target.style.color=textDim}
              >{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
