import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Home() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "JU-Krakow", pageName: "" },
    { year: 2024, teamName: "GEMS-Taiwan", pageName: "" },
    { year: 2024, teamName: "Heidelberg", pageName: "" },
    { year: 2024, teamName: "Marburg", pageName: "" },
    { year: 2024, teamName: "Sydney-Australia", pageName: "" },
    { year: 2024, teamName: "Toulouse-INSA-UPS", pageName: "" },
    { year: 2024, teamName: "BNDS-China", pageName: "" },
    { year: 2024, teamName: "Vilnius-Lithuania", pageName: "" },
    { year: 2024, teamName: "BNUZH-China", pageName: "" },
    { year: 2024, teamName: "XMU-China", pageName: "" },
  ];

  return (
    <>
      <div className="row mb-4">
        <div className="col-12 text-center">
          <div className="hero-section p-5 rounded" style={{
            background: 'linear-gradient(135deg, #ffd700, #ffab00)',
            color: '#1a237e',
            boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
          }}>
            <h1 className="display-4 fw-bold mb-3">VIT iGEM 2024</h1>
            <h2 className="h3 mb-4">Synthesis of Ambergris</h2>
            <p className="lead">
              Revolutionizing the perfume industry through sustainable biotechnology. 
              Our project aims to synthesize ambergris using engineered microorganisms, 
              providing an ethical and sustainable alternative to this precious whale-derived ingredient.
            </p>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <h2>Our Revolutionary Project</h2>
          <hr />
          <p>
            Ambergris, often called "floating gold," is one of the most valuable ingredients in luxury perfumery. 
            Traditionally sourced from sperm whales, this rare substance has been prized for centuries for its 
            unique ability to enhance and fix fragrances. Our team is pioneering a synthetic biology approach 
            to produce ambergris sustainably, eliminating the need for whale-derived materials while maintaining 
            the exceptional quality that makes this ingredient so coveted.
          </p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">🧬 Synthetic Biology</h5>
                  <p className="card-text">
                    Engineering microorganisms to produce ambergris compounds through biosynthetic pathways.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">🌱 Sustainability</h5>
                  <p className="card-text">
                    Creating an ethical alternative that protects whale populations while meeting industry demands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">🎨 Innovation</h5>
                  <p className="card-text">
                    Pushing the boundaries of biotechnology to revolutionize the luxury perfume market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col">
          <h2>Essential First Steps</h2>
          <hr />
          <p>
            Familiarize yourself with the official iGEM competition rules,
            policies, and judging criteria:
          </p>
          <ul>
            <li>
              Carefully review the{" "}
              <a
                href="https://competition.igem.org/deliverables/team-wiki"
                target="_blank"
              >
                Wiki Requirements page
              </a>{" "}
              to ensure your wiki meets all necessary standards for judging and
              awards.
            </li>
            <li>
              Understand the criteria and required wiki pages for Gold, Silver,
              and Bronze Medals on the{" "}
              <a
                href="https://competition.igem.org/judging/medals"
                target="_blank"
              >
                Medals page
              </a>
              .
            </li>
            <li>
              Explore the various Project Prizes and their corresponding wiki
              requirements on the{" "}
              <a
                href="https://competition.igem.org/judging/project-prizes"
                target="_blank"
              >
                Project Prizes Page
              </a>
              .
            </li>
            <li>
              Discover the eligibility criteria and wiki requirements for
              Special Prizes on the{" "}
              <a
                href="https://competition.igem.org/judging/special-prizes"
                target="_blank"
              >
                Special Prizes Page
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Building Your Wiki</h2>
          <hr />
          <ul>
            <li>
              <b>Content First, Design Second</b>: Focus on clearly documenting
              your project, research, and activities. Design can be refined
              later.
            </li>
            <li>
              <b>Navigation is Key</b>: Structure your wiki with clear and
              intuitive navigation. Visitors should easily find information.
            </li>
            <li>
              <b>Accessibility Matters</b>: Use readable fonts, appropriate
              color contrast, and ensure your wiki is mobile-friendly.
            </li>
            <li>
              <b>Media Optimization</b>: Compress images and videos to reduce
              file sizes and improve loading times.
            </li>
            <li>
              <b>Document Early & Often</b>: Start documenting your project from
              day one. Don't wait until the Wiki Freeze.
            </li>
            <li>
              <b>Prepare for Deadlines</b>: Stay up-to-date with important
              deadlines and events by checking the{" "}
              <a href="https://competition.igem.org/calendar" target="_blank">
                iGEM Competition Calendar
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Tips for Success</h2>
          <hr />
          <ul>
            <li>
              <b>Clearly Define Your Project</b>: Explain your project's goals,
              methodology, and expected outcomes in a clear and concise manner.
            </li>
            <li>
              <b>Show Your Progress</b>: Regularly update your wiki with your
              team's progress, experiments, and results.
            </li>
            <li>
              <b>Engage Your Audience</b>: Consider your global audience and use
              language that is accessible to everyone.
            </li>
            <li>
              <b>Human Practices & Safety</b>: Thoroughly document your team's
              human practices activities and safety considerations.
            </li>
            <li>
              <b>Collaborate & Share</b>: Highlight collaborations with other
              teams and institutions.
            </li>
            <li>
              <b>Have Fun and Learn!</b> iGEM is a unique opportunity to learn,
              grow, and contribute to synthetic biology.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
