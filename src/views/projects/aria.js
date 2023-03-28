import React from 'react';
import '../../styles/project.css';
import '../../styles/aria.css';


export default function Aria() {
  return (
    <div className="page-wrapper">
      <article className="aria project">
        <div className="project-intro" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/aria.png)"}}>
          <h2 className="project-title">ARIA</h2>
          <div className="project-subtitle">New Product Design and Development @ Quavo</div>
          <div className="project-summary">
            Quavo's second flagship product, ARIA, was my first time truly stepping into a leadership role as I tackled both design and development.
          </div>
        </div>

        <section className="slide-wrapper slide-tilt color-block color-block-primary">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <p>
                “I want a system that makes the correct decision for the cardholder using every piece of data that an investigator would use. I want to take care of them immediately, consistently, and in full compliance with the law”
              </p>
              - CEO & Quavo client
            </div>
          </div>
        </section>

        <section className="slide-wrapper aria-logo">
          <div className="slide txt-img">
            <div className="slide-images">
              <div>
                <img src={process.env.PUBLIC_URL + "/img/aria-logo.png"} alt="ARIA logo" />
              </div>
            </div>
            <div className="slide-notes">
              <h3>We can do that...</h3>
              <p>
                At scale, the finance industry is swimming in claims of fraud and each of them must be evaluated. Even rejecting a claim can cost more than the cost to pay it. Quavo already had the necessary resources and experience, so we set out to solve that problem with data.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Let's try something new</h3>
              <p>
                Quavo was ready to jump into reactive frameworks for the first time. ARIA was a greenfield project. Perfect. So I was tasked with designing the thing, picking a framework, and getting the front-end up and running.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper slide-tilt color-block color-block-dark">
          <div className="slide stacked">
            <div className="slide-notes">
              <h3>I chose Vue.js and it was a lot of fun!</h3>
            </div>
            <div className="slide-images">
              <div className="image-wrapper captioned">
                <img src={process.env.PUBLIC_URL + "/img/pega-to-vue.png"} alt="from pega to vue.js" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Great! Now what?</h3>
              <p>
                So now we have a blank slate to build on but no product. It was time to do some <span className="aria-design">research</span>.
              </p>
            </div>
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/aria-hello-world.png"} alt="default hello world" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper slide-tilt color-block color-block-primary">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>...playing catchup</h3>
              <p>
                I quickly learned that the API had been in-progress for a few months. I would need to make sure were weren't going in different directions.
              </p>
              <p>
                More concerning, I found that we already had sales materials outlining the product.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <p>
                After reviewing the documentation, I realized that a lot of careful thought already went into the user needs. I interviewed our Dispute Resolution team members, who specialize in exactly this kind of work, just to be sure. It was solid!
              </p>
              <p>
                Cheers team <span className="cheers-beer">🍻</span>
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper slide-tilt color-block color-block-dark">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>So here's what I did</h3>
              <p>
                The basic elements were already settled. What I needed to do was figure out how to get that in front of the users in a way which was informative and gave our clients confidence in the output.
              </p>
              <p>
                To do that, I broke the main setup into four steps.
              </p>
              <ol>
                <li>
                  Profile selection
                </li>
                <li>
                  Factor configuration
                </li>
                <li>
                  Decision mapping
                </li>
                <li>
                  Review and evaluation
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-notes">
              <h3>Select a Profile</h3>
              <p>
                Profiles would hold saved configurations and allow risk-free exploration of all options. They also gave us a means of conveying defaults and suggested setups in a world where "they can do whatever they want" was the directive.
              </p>
            </div>
            <div className="image-wrapper captioned no-stretch">
              <img src={process.env.PUBLIC_URL + "/img/aria-config.png"} alt="ARIA profile selection" />
              <div className="caption">
                This profile list includes one example of a professionaly-built preset, creatively called "Master Template".
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="image-wrapper captioned no-stretch">
              <img src={process.env.PUBLIC_URL + "/img/aria-config-2.png"} alt="ARIA configuration" />
              <div className="caption">
                These Low, Medium, and High thresholds will come into play on the next step.
              </div>
            </div>
            <div className="slide-notes">
              <h3>Set Configuration</h3>
              <p>
                Configuration is like legos without the fun. Our users needed the ability to create custom groups from a long list of possible factors. These would add up scores towards the likelihood of genuine fraud. This loose template ensured that the structure would always be viable but that each org could approach the math their own way.
              </p>
              <p>
                By nesting our factors, we could also present each unique item and its supporting text in isolation. This isolation limits information overload and makes errors easy to locate and repair.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-notes">
              <h3>Set Decision Matrix</h3>
              <p>
                Using a 3x3 grid, I was able to map nine possible outcomes onto a single control which shows the relationship between our two core possibilities.
              </p>
              <p>
                A click cycles through decisions. Systems can automatically Pay or Deny claims without any human processing but, of course, some situations will always need to be referred to a human.
              </p>
            </div>
            <div className="image-wrapper captioned no-stretch">
              <img src={process.env.PUBLIC_URL + "/img/aria-matrix.png"} alt="ARIA decision matrix" />
              <div className="caption">
                Friendly Fraud? What? Trust me, that's standard industry lingo.
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper review-eval">
          <div className="slide txt-img">
            <div className="image-wrapper no-stretch">
              <img src={process.env.PUBLIC_URL + "/img/aria-test.png"} alt="ARIA evaluation" />
            </div>
            <div className="slide-notes">
              <h3>Review & Evaluate</h3>
              <p>
                Finally, Review & Evaluate allows clients to compare their changes against a previous profile. The page begins with broad figures for quick assessment. If your goal is to pay around 3% more, you can quickly see if you're off the mark. Below that, I dive into each mismatch and what drove the change.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper reflections">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Reflections</h3>
              <ul>
                <li>
                  <em className="good-highlight">Letting go of control is okay / we're all on the same team</em>. I was concerned when I saw how many hands were in this project before I started. The work performed in market analysis and sales was superb and overlapped significantly with the primary research a UX professional would perform. This lightened the load in a situation where I was already wearing multiple hats.
                </li>
                <li>
                  <em className="good-highlight">Project Managers are worth their weight in gold</em>. At the onset, I was attempting to manage Jira and hand out tasks to a junior dev and a dedicated tester. Being a designer, developer, and PM at the same time meant dropping the ball a lot. My performance suffered due to the lack of that external rudder and I now place a lot of value on quality PMs.
                </li>
                <li>
                  <em className="good-highlight">Pie charts were a bad idea</em>. The next phase of the project was meant to involve loads of rich reporting tools. I was inspired to look into visualizations and learned that even my simple evaluation screen would benefit from improved graphs.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}