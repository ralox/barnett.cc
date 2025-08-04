import React, {useEffect} from 'react';
import Recs from '../components/Recs';
import '../styles/about.css';

export default function About() {
  useEffect(() => {
    document.title = "About Me | Barnett UX";
  },[]);


  return (
    <section className="page-wrapper">
      <main className="about">
        <h1 class="page-title">About Me</h1>
        <div className="bio">
          <img className="bio-photo" src={process.env.PUBLIC_URL +  "/img/port-blue.png"} alt="Portrait of Dave"/>
          <h2>Career</h2>
          <p>
            Hi, I'm Dave, a product creator with deep expertise in technical execution and user validation who's also passionate about direct user research and collaborative product workshops. As of 2025, I've spent 3 years testing, 4 years developing UIs, and a combined <em>12 years designing</em> at both startups and Fortune 500s.
          </p>
          <p>
            What I love most is building dynamic, scalable, and durable design systems and tools.
          </p>
          <h2>Personal</h2>
          <p>
            Originally from Michigan, I now live in Texas with my wife and three cats. We love to see the world whenever possible.
          </p>
          <ul className="identity">
            <li><span title="Travels">✈️ </span>  
              <span class="country-tag" alt="Canada 2004,2018">🇨🇦</span>
              <span class="country-tag" alt="France 2014">🇫🇷</span>
              <span class="country-tag" alt="Monaco 2014">🇲🇨</span>
              <span class="country-tag" alt="Taiwan 2015,19,22,23,24,25">🇹🇼</span>
              <span class="country-tag" alt="Japan 2015,23">🇯🇵</span>
              <span class="country-tag" alt="Germany 2019">🇩🇪</span>
              <span class="country-tag" alt="Czechia 2019">🇨🇿</span>
              <span class="country-tag" alt="UK 2023">🇬🇧</span>
              (
              <span class="country-tag" alt="England 2023">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <span class="country-tag" alt="Wales 2023">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
              <span class="country-tag" alt="Scotland 2023">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              )
              <span class="country-tag" alt="Mexico 2021,22,23">🇲🇽</span>
              <span class="country-tag" alt="New Zealand 2024">🇳🇿</span>
              <span class="country-tag" alt="Thailand 2025">🇹🇭</span>
            </li>
            <li><span title="MBTI">🧠</span> <a href="https://www.16personalities.com/infps-at-work" target="blank">Assertive Mediator (INFP-A)</a></li>
            <li><span title="Harry Potter House">🧙🏻</span> Ravenclaw</li>
          </ul>
        </div>
        <div className="bio-skills">
          <h2 className="section-title">Skills</h2>
          <ul>
            <li className="skill-pill key-skill">UI & Interaction Design</li>
            <li className="skill-pill key-skill">Figma</li>
            <li className="skill-pill key-skill">Prototyping</li>
            <li className="skill-pill key-skill">Usability Testing</li>
            <li className="skill-pill key-skill">Research & Design Thinking</li>
            <li className="skill-pill key-skill">HTML & CSS</li>
            <li className="skill-pill key-skill">WCAG Accessibility</li>
            <li className="skill-pill">Sketch / Axure</li>
            <li className="skill-pill">Javascript</li>
            <li className="skill-pill">Vue.js</li>
            <li className="skill-pill">React</li>
          </ul>
        </div>
        <div className="bio-background">
          <h2 className="section-title">Background</h2>
          <div className="bio-background-links">
            <a
              className="nav-link linkedin-link"
              href="https://www.linkedin.com/in/daveryanbarnett/"
              target="_blank"
              rel="noopener noreferrer"
              title="View LinkedIn Profile"
            >
              Connect on LinkedIn
            </a>
            <a
              className="nav-link"
              href="https://s3.us-west-2.amazonaws.com/barnett.cc/Barnett-UX-Resume-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume (PDF)
            </a>
          </div>
          <ul className="role-list">
            <li className="role-item">
              <div className="role-header">
                <h3 className="role-title">Lead UX Architect</h3>
                <div className="role-org">Cox Automotive</div>
              </div>
              <p className="role-description">Supporting the global automotive industry, through trusted brands like Kelly Blue Book and Autotrader, requires a UX practice that is incredibly mature and specialized. As a UX <em>architect</em>, I worked with product leaders and UX researchers to fill strategic roadmaps. Through multiple channels, I constructed stories and crafted organized project plans including wireframes, flows, scope, roadblocks, dependencies, and user needs so that our design team could rapidly deliver solutions.</p>
            </li>
            <li className="role-item">
              <div className="role-header">
                <h3 className="role-title">Senior Product Designer</h3>
                <div className="role-org">Mosaic.tech</div>
              </div>
              <p className="role-description">In this fast-paced startup environment serving CFOs and entrepreneurs, we had a lean design team of three. I was responsible for all aspects of UX within the Financial Model; the visual and logical spreadsheet tooling that leaders use to build financial plans. As the senior designer, I also lead the design system coordination with our front-end partners and helped to guide early, dynamic growth.</p>
            </li>
            <li className="role-item">
              <div className="role-header">
                <h3 className="role-title">Product Experience Architect</h3>
                <div className="role-org">Quavo, Inc.</div>
              </div>
              <p className="role-description">
                This fintech startup launched with the goal of automating fraud management and hit the ground running as a custom development shop. I joined as a PEGA developer but continued to lend design exepertise to the core products. To leverage my hybrid skill set, the CTO expanded my responsibilities to include new reactive development, design system setup, and mentoring. Before moving on, it meant a lot to me to help hire the first dedicated UX designer and fulltime front-end developer.
              </p>
            </li>
            <li className="role-item">
              <div className="role-header">
                <h3 className="role-title">User Experience Designer</h3>
                <div className="role-org">Liquid Web</div>
              </div>
              <p className="role-description">
                This hosting company was built on deep technical roots and, upon arrival, I was drowning in it. As a solo designer embedded in the dev team, I was submerged in command line tools, server administration, networking lingo, and given full access to the entire codebase. In redesigning and <em>re-writing</em> the shopping cart experience as well as authoring large portions of their global stylesheets, I gained a deeper understanding of product development and learned to value code as a UX tool.
              </p>
            </li>
            <li className="role-item">
              <div className="role-header">
                <h3 className="role-title">User Experience Designer</h3>
                <div className="role-org">Auto-Owners Insurance</div>
              </div>
              <p className="role-description">
                Auto-Owners was my introduction to UX and I was just their third designer. Our small team supported all products and departments as an internal hub. We worked with decentralized teams to curate standards and guidelines before the growth of digital design systems. With Axure, I built a library of interactive components that operated alongside Photoshop mockups. I ran moderated usability studies, performed field research, and even got the opportunity to design their first mobile app.
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Recs />
    </section>
  );
}