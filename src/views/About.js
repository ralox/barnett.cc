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
              <div className="role-card-wrapper">
                <div className="role-card">
                  <img className="org-logo" src={process.env.PUBLIC_URL +  "/img/timeline/cox-wash-logo.png"} alt=""/>
                  <div className="role-org">Cox Automotive</div>
                  <div className="role-title">Lead UX Architect</div>
                  <div className="role-year">2023</div>
                </div>
              </div>
              <div className="role-recs"></div>
            </li>
            <li className="role-item">
              <div className="role-card-wrapper">
                <div className="role-card">
                  <img className="org-logo" src={process.env.PUBLIC_URL +  "/img/timeline/mosaic-wash-logo.png"} alt=""/>
                  <div className="role-org">Mosaic.tech</div>
                  <div className="role-title">Senior Product Designer</div>
                  <div className="role-year">2021</div>
                </div>
              </div>
              <div className="role-recs"></div>
            </li>
            <li className="role-item">
              <div className="role-card-wrapper">
                <div className="role-card">
                  <img className="org-logo" src={process.env.PUBLIC_URL +  "/img/timeline/quavo-wash-logo.png"} alt=""/>
                  <div className="role-org">Quavo, Inc.</div>
                  <div className="role-title">Product Experience Architect</div>
                  <div className="role-year">2018</div>
                </div>
              </div>
              <div className="role-recs"></div>
            </li>
            <li className="role-item">
              <div className="role-card-wrapper">
                <div className="role-card">
                  <img className="org-logo" src={process.env.PUBLIC_URL +  "/img/timeline/lw-wash-logo.png"} alt=""/>
                  <div className="role-org">Liquid Web</div>
                  <div className="role-title">User Experience Designer</div>
                  <div className="role-year">2013</div>
                </div>
              </div>
              <div className="role-recs"></div>
            </li>
            <li className="role-item">
              <div className="role-card-wrapper">
                <div className="role-card">
                  <img className="org-logo" src={process.env.PUBLIC_URL +  "/img/timeline/ao-wash-logo.png"} alt=""/>
                  <div className="role-org">Auto-Owners Insurance</div>
                  <div className="role-title">User Experience Designer</div>
                  <div className="role-year">2011</div>
                </div>
              </div>
              <div className="role-recs"></div>
            </li>
          </ul>
        </div>
      </main>
      <Recs />
    </section>
  );
}