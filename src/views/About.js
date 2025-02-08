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
              I'm a product creator who loves to tinker and play with new tools. 
              Within the world of UX, my expertise skews towards technical execution, with a focus on user validation, 
              but talking with users or getting a team together to do a design thinking exercise is often exciting and insightful.
              As of 2025, I've spent 2 years automating tests, 4 years developing UIs, and a combined <em>12 years designing</em>.
            </p>
            <p>
              My favorite part of the job is building dynamic and durable components, whether that's advanced Figma tooling or getting directly into the 
              front-end code. I believe that internal UX is often overlooked and I love to empower my teammates.
            </p>
            <h3>Personal</h3>
            <p>
              Originally from Michigan, I now live in Texas with my wife and three cats. I enjoy games, audio books, documentaries, traveling, and watching my college football team.
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
                    <li style={setLevel(85)}>UX Validation</li>
                    <li style={setLevel(75)}>Research & Design Thinking</li>
                    <li style={setLevel(70)}>HTML & CSS</li>
                    <li style={setLevel(60)}>Sketch / Axure</li>
                    <li style={setLevel(60)}>Javascript</li>
                    <li style={setLevel(50)}>Vue.js</li>
                    <li style={setLevel(30)}>React*</li>
                    <li style={setLevel(10)}>Mandarin 🇹🇼</li>
                  </ul>
                </div>
              </div>
              <div className='side-note'>
                  * This site is built in React to practice the framework.
              </div>
            </div>
        </div>
      </main>
    </section>
  );
}