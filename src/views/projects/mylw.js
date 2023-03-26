import React from 'react';
import '../../styles/project.css';
import '../../styles/cohorts.css';


export default function MyLW() {
  return (
    <div className="page-wrapper">
      <article className="cohorts project">
        <div className="project-intro" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/cohorts.png)"}}>
          <h2 className="project-title">Financial Model: Cohorts</h2>
          <div className="project-subtitle">Feature Design @ Mosaic</div>
          <div className="project-summary">
            Cohorts was my first major release at Mosaic. This is a vital part of the CFO toolkit and covers a wide range of uses. Digging through real-world financial plans, I identified the common patterns and designed a very simple solution.
          </div>
        </div>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-notes">
              <h3>How it started</h3>
              <p>
                Mosaic needed a way to bring parity to the modeling process found in traditional spreadsheets. Actually, we needed it to be better. Cohorts are one of the most cumbersome models to setup and maintain, so making it simple would be a huge selling point for the product. 
                
                As the lead designer for all things Financial Model, that job fell to me.
              </p>
            </div>
            <div className="slide-images">
              <div className="image-wrapper captioned">
                <img src={process.env.PUBLIC_URL + "/img/wild-cohort.png"} alt="An example of a cohort setup in the wild" />
                <div className="caption">
                  This example isn't mine but notice how each cell has this ugly, fragile, hand-written formula. Yikes.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Alright, what's a cohort?</h3>
              <p>
                I'm not a financial expert so I had no idea what we were talking about. The next step was to reach out to our support staff; these folks ARE experts in the field and they spend every day converting old spreadsheets into functional Mosaic models. I learned a lot, but I also learned that I could get hands-on with real models! So I dug in.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper color-block-primary">
          <div className="slide">
            <div className="slide-images img-group">
              <div className="portrait-animation">
                <img className="portrait-img portrait-cover" src={process.env.PUBLIC_URL + "/img/portrait-full.png"} alt="self portrait" />
                <img className="portrait-img" src={process.env.PUBLIC_URL + "/img/portrait-mask.png"} alt="self portrait outline" />
                <div className="gear-wrapper">
                  <img className="big-gear" src={process.env.PUBLIC_URL + "/img/big-gear.svg"} alt="spinning gear" />
                  <img className="small-gear" src={process.env.PUBLIC_URL + "/img/small-gear.svg"} alt="spinning gear" />
                </div>
              </div>
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-mess.png"} alt="A mess of spreadsheet stuff" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper color-block-dark">
          <div className="slide stacked">
            <div className="slide-notes">
              <h3>Ideating<span className="ellip1">.</span><span className="ellip2">.</span><span className="ellip3">.</span></h3>
            </div>
            <div className="slide-images">
              <div className="image-wrapper captioned">
                <img src={process.env.PUBLIC_URL + "/img/cohort-process.png"} alt="Bird's eye view of the early iterations" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Finding signal in the noise</h3>
              <p>
                As I studied the models and collaborated with the team, I identified the basic patterns that connected each of the use cases. I went through four major iterations and, for some elements, had to come up with meaningful language as it just didn't exist.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide img-group">
            <div className="image-wrapper captioned">
                <img src={process.env.PUBLIC_URL + "/img/cohort-variants.png"} alt="Three major stages of ideation" />
                <div className="caption">
                  Left-to-right, you can see how the basic form evolved. Exploring copy, input detail, and micro information architecture.
                </div>
            </div>
            <div className="image-wrapper captioned no-stretch">
              <img src={process.env.PUBLIC_URL + "/img/cohort-index-sheet.png"} alt="New index sheet" />
              <div className="caption">
                Early on, I added an "Index" tab that gave us the ability to define abstract lists of data such as sales ramps and schedules.
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Power users demand power</h3>
              <p>
                Throughout the ideation phase, we spoke with professionals and it was clear that they loved their bespoke models even if the maintenance was a pain. We needed to consider the advanced route immediately or risk losing valuable clients.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper color-block-primary matrix-bg"
          style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/matrix-bg.png)"}}
        >
          <div className="slide stacked">
            <div className="slide-images img-group">
              <div className="image-wrapper">
                <img style={{width: "14em"}} src={process.env.PUBLIC_URL + "/img/cohort-formula-2.png"} alt="Cohorts formula notes" />
              </div>
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-formula-helper.png"} alt="Formula helper and syntax exploration" />
              </div>
            </div>
            <div className="slide-notes">
              <p>
                So I explored how the underlying function might work and how to provide guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Am I in the right ballpark?</h3>
              <p>
                At this point, I'm feeling pretty good about the direction we're going. It's time to call in our users and run some tests. This means putting together a scenario and a prototype and then mentally preparing to be completely wrong about everything.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-images">
              <div className="image-wrapper captioned">
                <img src={process.env.PUBLIC_URL + "/img/proto-plan.png"} alt="Planning the flow" />
                <div className="caption">
                  Not all tests require this degree of setup and each project is a bit different.
                </div>
              </div>
            </div>
            <div className="slide-notes">
              <h3>Drawing up a plan</h3>
              <p>
                I generally begin with a bullet list of key decisions to validate and then draw out a flow to hit those points. No one test will catch every wrinkle of a design so this can be a bit of a finger in the wind moment.
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-notes">
              <h3>Make it move!</h3>
              <p>
                From the flow, I map out the screens and hook up interaction. I like to allow for some non-linear movement because it helps highlight the user's thought process rather than confirm my assumptions.
              </p>
            </div>
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/proto-flow.png"} alt="Wiring up the prototype" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper color-block-dark">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Then we get down to brass tacks</h3>
              <p>
                After reviewing the study sessions and breaking down wins <span className="wiggle-icon wiggle-icon-1">🏆</span>, things to improve <span className="wiggle-icon wiggle-icon-2">🛑</span>, and some clever insights <span className="wiggle-icon wiggle-icon-3">💡</span>, I followed up with the product manager and CPO. We each made a case for what concerned us and what didn't, ultimately drafting just a few adjustments. 
              </p>
              <p>
                Our MVP looked a bit like this...
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide">
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-quick.png"} alt="Quick look at the key UI" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-sales-ramps.png"} alt="Quick look at a sales ramp" />
              </div>
            </div>
            <div className="slide-notes">
              <h3>Sales Ramp</h3>
              <p>
                Here's the basic output of a sales ramp where representatives grow from 1k through 10k monthly sales over their first 6 months on the job. Pretty straightforward!
              </p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-img">
            <div className="slide-notes">
              <h3>Allocations</h3>
              <p>
                It looks remarkably similar but here we begin with a definite number and then use math to "spread" that value out over time, usually a year. It's visually a bit of a yawn but the business value is huge!
              </p>
            </div>
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-spread-2.png"} alt="Quick look at a spread" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Riveting.</h3>
              <p>I know, it looks like a table in the end... but what did clients think of the setup?</p>
            </div>
          </div>
        </section>

        <section className="slide-wrapper color-block-dark customer-feedback">
          <div className="slide">
            <div className="slide-images">
              <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + "/img/cohort-customer-feedback.png"} alt="Customer feedback" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide-wrapper reflections">
          <div className="slide txt-solo">
            <div className="slide-notes">
              <h3>Reflections</h3>
              <ul>
                <li>
                  <em className="good-highlight">Finding the right balance between <em>innovation</em> and <em>familiarity</em> is crucial</em>. The "Aging" option was regarded by younger and more technical users as an interesting take that could be valuable in cleaning up the visual data, but it got a cool reception from veterans who have experience leveraging the traditional tool when making business decisions.
                </li>
                <li>
                <em className="good-highlight">Literal labels feel lazy, but are highly effective</em>. Arriving at labels such as "Multiply by Index Row" feels clunky and maybe a bit too much like a tech manual, but users loved it and knew immediately how to make use of the input.
                </li>
                <li>
                  <em className="good-highlight">"Dev" thinking can be great design thinking</em>. While a heavy UI can rely on many visual tools to present complex and layered data, customer-facing <em>functions</em> don't have the same grace. I thought "if I had to type out all of the various ways you can configure this, and those items had to be in a certain order and format, I would hate this tool." So, I trimmed until it felt almost too easy; deceptively simple.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}