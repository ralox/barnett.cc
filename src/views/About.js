import React from 'react';
import '../styles/about.css';

export default function About() {
  function setLevel(level) {
    let color;

    if ( level >= 70 ) {
      color = '#ffd061';
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
              I'm a product creator with a mixed history of design and development. 
              Within the world of UX, my expertise skews towards the technical execution, with a focus on user validation.
              As of 2023, I've spent 2 years automating tests, 4 years developing UIs, and a combined <em>10 years designing</em>.
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
                    <li style={setLevel(90)}>UI Design</li>
                    <li style={setLevel(90)}>Figma</li>
                    <li style={setLevel(70)}>Sketch</li>
                    <li style={setLevel(90)}>Prototyping</li>
                    <li style={setLevel(60)}>UX Research</li>
                    <li style={setLevel(80)}>UX Validation</li>
                    <li style={setLevel(80)}>HTML & CSS</li>
                    <li style={setLevel(60)}>Javascript</li>
                    <li style={setLevel(60)}>Vue.js</li>
                  </ul>
                </div>
                <div className="bio-learning">
                  <h4>Learning</h4>
                  <ul>
                    <li style={setLevel(30)}>React*</li>
                    <li style={setLevel(10)}>Unity Game Engine</li>
                    <li style={setLevel(30)}>Mandarin</li>
                    <li style={setLevel(10)}>Basics of Entrepreneurship</li>
                    <li style={setLevel(30)}>Mixology</li>
                  </ul>
                </div>
              </div>
              <div className='side-note'>
                  * This site is built in React as a means to practice and learn the framework.
              </div>
            </div>
        </div>
      </main>
    </section>
  );
}