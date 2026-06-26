import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";

import Footer from "./components/footer.js";

import "./css/fonts.css";
import "./css/styles.css";
import "./css/navbar.css";

const ASSET = process.env.PUBLIC_URL || "";
const sponsorPackage = `${ASSET}/files/UF_DBF_Sponsorship_Package_2026_2027.pdf`;

const pages = [
  { title: "Home", label: "Home" },
  { title: "About", label: "About" },
  { title: "Teams", label: "Teams" },
  { title: "Aircraft", label: "Aircraft" },
  { title: "Sponsors", label: "Sponsors" },
];

const teamCards = [
  {
    title: "Aerodynamics",
    text:
      "Turns mission requirements into aircraft sizing, airfoil selection, stability targets, control surfaces, and validated performance models using MATLAB, XFLR5, CFD, and flight-test data.",
    tags: ["Sizing", "Airfoils", "Stability", "CFD"],
  },
  {
    title: "Structures",
    text:
      "Builds reliable flight hardware through composite layups, wood built-up structures, CAD/FEA, static testing, and manufacturable design that survives real mission loads.",
    tags: ["Composites", "FEA", "CAD", "Testing"],
  },
  {
    title: "Systems",
    text:
      "Integrates propulsion, avionics, telemetry, power distribution, sensors, and controls so the aircraft can be tested safely and improved with real data.",
    tags: ["Avionics", "Power", "Telemetry", "Controls"],
  },
];


const sponsors = [
  {
    name: "GE Aerospace",
    logo: "ge-aerospace.png",
    featured: true,
    dark: true,
  },
  {
    name: "Airtech",
    logo: "airtech.png",
    featured: true,
  },
  {
    name: "Innov8tive Designs",
    logo: "innov8tive-designs.png",
    featured: true,
  },
  {
    name: "Altium",
    logo: "altium.png",
  },
  {
    name: "Easy Composites",
    logo: "easy-composites.png",
  },
];

const sponsorTiers = [
  {
    tier: "Diamond",
    contribution: "$5,000+",
    benefits: [
      "Largest logo on aircraft, pit banner, shirts, and website",
      "Recruiting events and resume book access",
      "Host a design review or facility tour",
      "Dedicated social posts and year-end impact report",
    ],
  },
  {
    tier: "Blue",
    contribution: "$2,500-$4,999",
    benefits: [
      "Large logo on aircraft, pit banner, shirts, and website",
      "Recruiting event and resume book access",
      "Dedicated social posts and year-end report",
    ],
  },
  {
    tier: "Orange",
    contribution: "$1,000-$2,499",
    benefits: [
      "Medium logo on aircraft, pit banner, shirts, and website",
      "Dedicated social post and recap mentions",
      "Thank-you photo from the team",
    ],
  },
  {
    tier: "Gold",
    contribution: "$500-$999",
    benefits: ["Small logo on pit banner, shirts, and website", "Social media thank-you"],
  },
  {
    tier: "Silver",
    contribution: "$250-$499",
    benefits: ["Logo on website and shirts", "Social media thank-you"],
  },
  {
    tier: "Bronze",
    contribution: "<$250",
    benefits: ["Name listed on website and season recap email"],
  },
];

function usePageTitle() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title") || "Home";
  return pages.some((page) => page.title === title) ? title : "Home";
}

function Navbar() {
  const title = usePageTitle();
  return (
    <header className="navbar">
      <NavLink className="brand" to="/Website/?title=Home" aria-label="Design / Build / Fly at the University of Florida home">
        <img src={`${ASSET}/media/images/logos/dbf-gator-plane-mark-transparent.png`} alt="Design / Build / Fly mark" />
        <span>
          <strong>Design / Build / Fly</strong>
          <small>at the University of Florida</small>
        </span>
      </NavLink>

      <label id="hamburger_menu" htmlFor="hamburger" aria-label="Open navigation">
        &#9776;
      </label>
      <input type="checkbox" id="hamburger" />

      <nav className="nav_list" aria-label="Main navigation">
        {pages.map((page) => (
          <NavLink
            key={page.title}
            className={title === page.title ? "selected page_link" : "page_link"}
            to={`/Website/?title=${page.title}`}
          >
            {page.label}
          </NavLink>
        ))}
        <a className="nav_cta" href={sponsorPackage} target="_blank" rel="noreferrer">
          Sponsorship Package
        </a>
      </nav>
    </header>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <span>{children}</span>}
    </div>
  );
}

function SponsorLogoWall({ className = "" }) {
  return (
    <div className={`sponsor-logo-grid ${className}`.trim()}>
      {sponsors.map((sponsor) => (
        <article className={sponsor.featured ? "sponsor-logo-card featured" : "sponsor-logo-card"} key={sponsor.name}>
          <div className={sponsor.dark ? "sponsor-logo-media dark" : "sponsor-logo-media"}>
            <img src={`${ASSET}/media/images/sponsors/${sponsor.logo}`} alt={`${sponsor.name} logo`} />
          </div>
          <h3>{sponsor.name}</h3>
        </article>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">University of Florida AIAA</p>
          <h1>Student-built aircraft. Sponsor-supported engineering.</h1>
          <p className="hero-lede">
            Design / Build / Fly at the University of Florida is a student-led team that designs, manufactures, and flight-tests a clean-sheet RC aircraft each season for the international AIAA Design/Build/Fly competition.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/Website/?title=Sponsors">
              Support the Team
            </a>
            <a className="button secondary" href="https://join.slack.com/t/ufdesignbuildfly/signup/" target="_blank" rel="noreferrer">
              Join Slack
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={`${ASSET}/media/images/logos/dbf-standard-logo-transparent.png`} alt="Design / Build / Fly at the University of Florida logo" />
        </div>
      </section>

      <section className="stats-grid" aria-label="Team statistics">
        <StatCard value="50+" label="active members" />
        <StatCard value="100+" label="universities at the AIAA flyoff" />
        <StatCard value="33/112" label="2024-2025 competition result" />
        <StatCard value="8/99" label="2022-2023 competition result" />
      </section>

      <section className="split-section">
        <div>
          <SectionHeader eyebrow="What we do" title="From requirements to flight data">
            Members move through trade studies, subsystem design, prototyping, manufacturing, test planning, flight testing, and mission rehearsals.
          </SectionHeader>
          <div className="feature-list">
            <article>
              <h3>Design</h3>
              <p>Aircraft sizing, CAD, FEA, CFD, MATLAB performance models, stability analysis, and design reviews.</p>
            </article>
            <article>
              <h3>Build</h3>
              <p>Carbon fiber layups, wood structures, CNC, laser cutting, 3D printing, avionics integration, and shop-ready documentation.</p>
            </article>
            <article>
              <h3>Fly</h3>
              <p>Ground tests, static tests, system checks, flight-test data, mission rehearsals, and final competition execution.</p>
            </article>
          </div>
        </div>
        <img className="rounded-image" src={`${ASSET}/media/images/newestgood-team.png`} alt="UF DBF team with competition aircraft" />
      </section>

      <section className="callout-band">
        <p>2026-2027 sponsorships directly support materials, avionics, test articles, equipment, and competition travel.</p>
        <a href={sponsorPackage} target="_blank" rel="noreferrer">Download the package</a>
      </section>

      <section className="home-sponsors-section">
        <SectionHeader eyebrow="Our Sponsors" title="Powered by partners who help us build, test, and fly.">
          Thank you to the organizations supporting Design / Build / Fly at the University of Florida through materials, software, manufacturing resources, and student development.
        </SectionHeader>
        <SponsorLogoWall />
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">About UF DBF</p>
        <h1>Hands-on aerospace design at full team scale.</h1>
        <p>
          We give UF students a rigorous, collaborative environment to apply classroom concepts to mission-ready aircraft while learning the engineering habits industry expects: documentation, testing, iteration, and cross-discipline communication.
        </p>
      </section>

      <section className="process-grid">
        {[
          ["Requirements", "Translate the annual AIAA mission rules into measurable aircraft and system requirements."],
          ["Trade Studies", "Compare configurations, risk, schedule, manufacturability, and predicted mission score."],
          ["Detailed Design", "Use SolidWorks, ANSYS Mechanical/Fluent, MATLAB, and XFLR5 to connect analysis to build decisions."],
          ["Manufacturing", "Produce flight hardware with composites, built-up wood, heat-shrink coverings, CNC, laser cutting, and additive manufacturing."],
          ["Testing", "Validate structures, avionics, propulsion, and flight performance through static tests, system checks, and flight data."],
          ["Competition", "Execute mission rehearsals, repair workflows, documentation, and flyoff operations under real constraints."],
        ].map(([title, text]) => (
          <article className="process-card" key={title}>
            <span></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="split-section reverse">
        <img className="rounded-image" src={`${ASSET}/media/images/teamFlorida.png`} alt="UF DBF team together" />
        <div>
          <SectionHeader eyebrow="Student impact" title="A real engineering pipeline">
            Sponsors and mentors help students iterate faster, test deeper, and graduate with experience carrying complex aerospace hardware from concept to competition.
          </SectionHeader>
          <p className="large-copy">
            UF DBF members learn to present trade studies, document decisions, manufacture test articles, analyze flight-test data, and improve designs through iteration. For partners, that means direct access to motivated engineers who have already shipped hardware on tight schedules.
          </p>
        </div>
      </section>
    </>
  );
}

function TeamsPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Subteams</p>
        <h1>Specialized teams, one integrated aircraft.</h1>
        <p>
          Aerodynamics, Structures, and Systems each own key technical work while staying connected through design reviews, shared CAD, test planning, and competition readiness.
        </p>
      </section>

      <section className="team-grid">
        {teamCards.map((card) => (
          <article className="team-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <div>
              {card.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="systems-feature dual-highlight-feature">
        <div className="highlight-stack">
          <SectionHeader eyebrow="Systems highlight" title="Autonomous glider flight control">
            Our systems team developed an autonomous glider that could be dropped from 1,000 ft and land inside a 50x50 ft target square using an onboard flight controller actively navigating the plane to a predetermined GPS coordinate.

This was done over the course of a single semester through the implementation of Ardupilot, custom designed control surfaces, and PID tuning; all while staying under 250 grams!
          </SectionHeader>
          <SectionHeader eyebrow="Structures highlight" title="Quick-release wing-mounted pylons">
            Our structures team designed a wing-mounted pylon system that could hold almost 600 N without critical deformation while remaining lightweight and manufacturable for the aircraft.

The pylons were also designed for fast attachment and removal, allowing the team to meet a timed mission requirement without sacrificing structural reliability or repeatable setup between flights.
          </SectionHeader>
        </div>
        <img className="rounded-image" src={`${ASSET}/media/images/systems/autonomous-glider.jpg`} alt="UF DBF aircraft and autonomous glider work at competition" />
      </section>
    </>
  );
}

function AircraftPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Aircraft and projects</p>
        <h1>Clean-sheet aircraft, prototypes, and flight hardware.</h1>
        <p>
          Each season creates a new aircraft around the AIAA DBF mission, while side development projects let the team explore new manufacturing methods, avionics, and configurations.
        </p>
      </section>

      <section className="highlight-project">
        <div className="highlight-copy">
          <span className="project-label">Current development</span>
          <h2>Quad-copter blended wing-body eVTOL concept</h2>
          <p>
            During the 2025-2026 season, UF DBF expanded development of a quad-copter blended wing-body eVTOL concept to learn advanced negative molding methods, improve manufacturing repeatability, and develop a more robust avionics package.
          </p>
        </div>
        <img className="highlight-logo" src={`${ASSET}/media/images/logos/dbf-circle-large-transparent.png`} alt="Design / Build / Fly at the University of Florida circular logo" />
        <img className="highlight-photo" src={`${ASSET}/media/images/current-development-mold.jpg`} alt="UF DBF members with CNC-machined foam molds for blended wing-body eVTOL development" />
      </section>

      <section className="aircraft-grid">
        <article>
          <img src={`${ASSET}/media/images/competition2025.png`} alt="2024-2025 UF DBF Dragonfly aircraft" />
          <div>
            <p>2024-2025</p>
            <h3>Dragonfly</h3>
            <span>33rd of 112 teams</span>
          </div>
        </article>
        <article>
          <img src={`${ASSET}/media/images/plane2023.jpg`} alt="2022-2023 aircraft Chip" />
          <div>
            <p>2022-2023</p>
            <h3>Chip</h3>
            <span>8th of 99 teams</span>
          </div>
        </article>
        <article>
          <img src={`${ASSET}/media/images/plane2022.jpg`} alt="2021-2022 aircraft Shaq" />
          <div>
            <p>2021-2022</p>
            <h3>Shaq</h3>
            <span>8ft wingspan payload RC aircraft</span>
          </div>
        </article>
      </section>
    </>
  );
}

function SponsorsPage() {
  return (
    <>
      <section className="page-hero sponsor-hero">
        <div>
          <p className="eyebrow">Partner with UF DBF</p>
          <h1>Build with us. Recruit from us. Help us fly farther.</h1>
          <p>
            Sponsorship gives your organization visibility, direct recruiting access, and measurable impact on student engineering education while helping us deliver safe, well-engineered aircraft under real constraints.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={sponsorPackage} target="_blank" rel="noreferrer">
              Download Package
            </a>
            <a className="button secondary" href="mailto:ufl.aiaa.dbf@gmail.com?subject=UF%20DBF%20Sponsorship%20Inquiry">
              Email the Team
            </a>
          </div>
        </div>
        <img src={`${ASSET}/media/images/logos/dbf-circle-large-transparent.png`} alt="Design / Build / Fly at the University of Florida circular logo" />
      </section>

      <section className="sponsor-impact-grid">
        {[
          ["Brand visibility", "Placement on aircraft livery, pit banners, apparel, the website, social media, and season recaps."],
          ["Student education", "Materials, avionics, equipment, test articles, and travel funding create more realistic engineering experience."],
          ["Recruiting pipeline", "Resume books, tech talks, interview days, design reviews, and mentorship connect sponsors with proven student engineers."],
        ].map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="current-sponsors-section">
        <SectionHeader eyebrow="Current Sponsors" title="Thank you to our sponsors">
          These partners help give our members the materials, tools, and support needed to turn design work into flight-ready hardware.
        </SectionHeader>
        <SponsorLogoWall className="sponsors-page-wall" />
      </section>

      <section className="tiers-section">
        <SectionHeader eyebrow="2026-2027" title="Sponsorship levels and benefits" />
        <div className="tiers-table" role="table" aria-label="Sponsorship levels and benefits">
          {sponsorTiers.map((tier) => (
            <article className="tier-row" key={tier.tier}>
              <div>
                <h3>{tier.tier}</h3>
                <p>{tier.contribution}</p>
              </div>
              <ul>
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="donate-panel">
        <div>
          <h2>How to donate</h2>
          <ol>
            <li>Email <a href="mailto:ufl.aiaa.dbf@gmail.com">ufl.aiaa.dbf@gmail.com</a> with your intended donation amount.</li>
            <li><a href="https://giving.ufl.edu/campaigns/62638/donations/new?designation=F003911&recurring=&utm_campaign=" target="_blank" rel="noreferrer">Click here</a> to open the UF MAE Student Groups giving page and select Design, Build, Fly.</li>
            <li>Enter your gift amount, complete checkout, and leave a note directing all funds to Design/Build/Fly.</li>
          </ol>
        </div>
        <div className="comment-box">
          <strong>Comments box routing note</strong>
          <p>Please direct 100% of this gift to the UF AIAA Design, Build, Fly (UF DBF) student group.</p>
        </div>
      </section>
    </>
  );
}

function Page() {
  const title = usePageTitle();
  document.title = `${title} | Design / Build / Fly at the University of Florida`;

  switch (title) {
    case "About":
      return <AboutPage />;
    case "Teams":
      return <TeamsPage />;
    case "Aircraft":
      return <AircraftPage />;
    case "Sponsors":
      return <SponsorsPage />;
    default:
      return <HomePage />;
  }
}


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}

function Site() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Website/*" element={<Site />} />
        <Route path="*" element={<Site />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
