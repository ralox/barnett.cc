import React from 'react';
import '../styles/about.css';

export default function About() {
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
        <div className="image-wrapper"  style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/neworleans.png"}}>
          <img className="bio-photo" src={process.env.PUBLIC_URL +  "/img/neworleans.png"} alt="Dave and Blair in New Orleans"/>
        </div>
        <div className="bio">
          <div className="bio-text">
            <h3>Career</h3>
            <p>
              I'm a product creator who loves to tinker and play with new tools. My expertise lies in technical execution and user validation, but I'm always excited to speak directly with users or get a team together for a product workshop. As of 2025, I've spent 2 years automating tests, 4 years developing UIs, and a combined <em>12 years designing</em>.
            </p>
            <p>
              What I love most is building dynamic and durable components, whether that's advanced Figma tooling or getting directly into the front-end code. This practice evelvates usability evaluation by removing assumptions and takes guesswork out of your implementation. Building quality foundations with ease-of-use, upkeep, and intelligent growth in mind is also a sound way to empower teammates.
            </p>
            <h3>Personal</h3>
            <p>
              Originally from Michigan, I now live in Texas with my wife and three cats. I enjoy games, audio books, documentaries, and traveling.
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
              <li>🤝 <a href="https://www.16personalities.com/infp-personality" target="blank">Assertive Mediator (INFP-A)</a></li>
              <li>🦅 Ravenclaw</li>
            </ul>
          </div>
          <div className="skills-and-learning">
            <div className="bio-highlights">
                <div className="bio-skills">
                  <h4>Skills</h4>
                  <ul>
                    <li style={setLevel(99)}>UI & Interaction Design</li>
                    <li style={setLevel(95)}>Figma</li>
                    <li style={setLevel(90)}>Prototyping</li>
                    <li style={setLevel(90)}>UX Validation</li>
                    <li style={setLevel(75)}>Research & Design Thinking</li>
                    <li style={setLevel(75)}>HTML & CSS</li>
                    <li style={setLevel(65)}>Sketch / Axure</li>
                    <li style={setLevel(60)}>Javascript</li>
                    <li style={setLevel(50)}>Vue.js</li>
                    <li style={setLevel(50)}>React*</li>
                    <li style={setLevel(10)}>Mandarin</li>
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