import React, {useEffect} from 'react';
import '../styles/about.css';

export default function About() {
  useEffect(() => {
    document.title = "About Me | Barnett UX";
  },[]);

  function setLevel(level) {
    let color;

    if ( level >= 70 ) {
      color = "var(--color-secondary-light)";
    } else {
      color = "var(--color-primary-light)";
    }

    return {
      ['--data-level']: level + '%',
      ['--color']: color
    };
  };

  return (
    <section className="page-wrapper">
      <main className="about">
        <h2 class="section-title" hidden>About Me</h2>
        <div className="bio">
          <div className="img-wrapper">
            <img className="bio-photo" src={process.env.PUBLIC_URL +  "/img/port-blue.jpeg"} alt="Portrait photo of Dave"/>
          </div>
          <div className="bio-text">
            <h3>Career</h3>
            <p>
              I'm a product creator with deep expertise in technical execution and user validation but I'm also passionate about direct user research and collaborative product workshops. As of 2025, I've spent 2 years automating tests, 4 years developing UIs, and a combined <em>12 years designing</em> at both startups and Fortune 500s.
            </p>
            <p>
              What I love most is building dynamic and durable systems, in Figma and in code. I believe that building quality foundations with ease-of-use, upkeep, and intelligent growth in mind is a sound way to set your organization up for success.
            </p>
            <h3>Personal</h3>
            <p>
              Originally from Michigan, I now live in Texas with my wife and three cats. We love to see the world whenever possible.
            </p>
            <p>
              <span class="country-tag" alt="Canada">🇨🇦</span>
              <span class="country-tag" alt="France">🇫🇷</span>
              <span class="country-tag" alt="Monaco">🇲🇨</span>
              <span class="country-tag" alt="Taiwan">🇹🇼</span>
              <span class="country-tag" alt="Japan">🇯🇵</span>
              <span class="country-tag" alt="Germany">🇩🇪</span>
              <span class="country-tag" alt="Czechia">🇨🇿</span>
              <span class="country-tag" alt="UK">🇬🇧</span>
              (
              <span class="country-tag" alt="England">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <span class="country-tag" alt="Wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
              <span class="country-tag" alt="Scotland">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              )
              <span class="country-tag" alt="Mexico">🇲🇽</span>
              <span class="country-tag" alt="New Zealand">🇳🇿</span>
              <span class="country-tag" alt="Thailand">🇹🇭</span>
            </p>
            <ul className="identity">
              <li>🤝 <a href="https://www.16personalities.com/infps-at-work" target="blank">Assertive Mediator (INFP-A)</a></li>
              <li>🦅 Ravenclaw</li>
            </ul>
          </div>
          <div className="skills-and-learning">
            <div className="bio-highlights">
                <div className="bio-skills">
                  <h3>Skills</h3>
                  <ul>
                    <li style={setLevel(99)}>UI & Interaction Design</li>
                    <li style={setLevel(95)}>Figma</li>
                    <li style={setLevel(90)}>Prototyping</li>
                    <li style={setLevel(90)}>Usability Testing</li>
                    <li style={setLevel(80)}>Research & Design Thinking</li>
                    <li style={setLevel(80)}>HTML & CSS</li>
                    <li style={setLevel(75)}>WCAG Accessibility</li>
                    <li style={setLevel(65)}>Sketch / Axure</li>
                    <li style={setLevel(60)}>Javascript</li>
                    <li style={setLevel(50)}>Vue.js</li>
                    <li style={setLevel(50)}>React*</li>
                  </ul>
                </div>
              </div>
              <div className='side-note'>
                  * This site is built and maintained in React to practice the framework.
              </div>
            </div>
        </div>
      </main>
    </section>
  );
}