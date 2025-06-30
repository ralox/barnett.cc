import React, {useEffect} from 'react';
import '../../styles/project.css';
import '../../styles/cohorts.css';
import SlideObserver from '../../utils/SlideObserver';


export default function Cohorts() {
  useEffect(() => {
    document.title = "Financial Model Cohorts | Work | Barnett UX";
  },[]);
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="cohorts project">
          <div className="project-intro">
            <h1 className="project-title">Financial Model Cohorts</h1>
            <div className="project-subtitle">Feature Design @ Mosaic</div>
            <div className="project-summary">
              Demystified cohort analysis, a vital part of the CFO toolkit, to deliver a solution that saves clients roughly $10,000 a year.
            </div>
            <img className="project-hero-img" src={process.env.PUBLIC_URL + "/img/cohorts.png"} alt="Financial model sheet on a laptop" />
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>How it started</h2>
                <p>
                  Mosaic needed a way to bring parity to the modeling process found in traditional spreadsheets. Actually, we needed it to be better. <em className="good-highlight">Cohorts are one of the most cumbersome models for CFOs and FP&A professionals to setup and maintain</em>. Making it simple would be a huge selling point for the product. 
                </p>
                <p>
                  As the lead designer for all things Financial Model, that job fell to me.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper captioned">
                  <img src={process.env.PUBLIC_URL + "/img/wild-cohort.png"} alt="An example of a cohort setup in the wild" />
                  <div className="caption">
                    Notice how each cell has this ugly, fragile, hand-written formula. Yikes.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper color-block color-block-dark">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Alright, what's a cohort?</h2>
                <p>
                  I'm not a financial expert so I had no idea what we were talking about. The next step was to reach out to our support staff and a few key customers. I learned a lot and even got access to real models to explore.
                </p>
                <h3>Popular Use Cases</h3>
                <ul>
                  <li>Mapping a value over time, such as contract fulfillment</li>
                  <li>Forecasting sales as the team grows and matures</li>
                </ul>
                <h3>Pain points</h3>
                <ul>
                  <li><em className="bad-highlight">The average cohort takes 3 hours to build</em> between data gathering, cleanup, organization, formula building, and constant sanity checks</li>
                  <li><em className="bad-highlight">Each cohort requires significant rework with every update</em> and our fast-paced SMB clients need to generate reports monthly</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Setting expectations</h2>
                <p>
                  Because the base product removes much of the pain around cleanup and organization, we were already ahead of the curve. <em className="good-highlight">Cutting the setup and maintenance in half seemed like a realistic goal</em> which would allow us to go well beyond parity.
                </p>
                <p>To establish a baseline, I assumed a standard model with 2 cohorts. This model would be updated monthly. Given the average CFO salary of $390k in 2022, <em className="good-highlight">this would result in an annual savings of $6,750</em>.</p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-primary thinking">
            <div className="slide">
              <div className="slide-images img-group fade-in">
                <div className="portrait-animation">
                  <img className="portrait-img portrait-cover" src={process.env.PUBLIC_URL + "/img/portrait-full.png"} alt="self portrait" />
                  <img className="portrait-img" src={process.env.PUBLIC_URL + "/img/portrait-mask.png"} alt="self portrait outline" />
                  <div className="gear-wrapper">
                    <img className="big-gear" src={process.env.PUBLIC_URL + "/img/big-gear.svg"} alt="spinning gear" />
                    <img className="small-gear" src={process.env.PUBLIC_URL + "/img/small-gear.svg"} alt="spinning gear" />
                  </div>
                </div>
                <div className="how-to-cohort fade-in">
                  <img src={process.env.PUBLIC_URL + "/img/cohort-mess.png"} alt="A mess of spreadsheet stuff" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img src={process.env.PUBLIC_URL + "/img/cohort-notes.png"} alt="Written notes from studying models" />
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Finding signal in the noise</h2>
                <p>
                  As I studied the models and collaborated with the team, I identified the basic patterns that connected each of the use cases. I went through four major iterations and, for some elements, had to come up with meaningful language as it just didn't exist.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark">
            <div className="slide stacked">
              <div className="slide-notes fade-in">
                <h2>Ideating<span className="ellip1">.</span><span className="ellip2">.</span><span className="ellip3">.</span></h2>
              </div>
              <div className="slide-images fade-in">
                <div className="image-wrapper captioned">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-process.png"} alt="Bird's eye view of the early iterations" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide img-group">
              <div className="image-wrapper captioned fade-in">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-variants.png"} alt="Three major stages of ideation" />
                  <div className="caption">
                    Left-to-right, you can see how the basic form evolved. Exploring copy, input detail, and micro information architecture.
                  </div>
              </div>
              <div className="image-wrapper captioned no-stretch fade-in">
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-index-sheet.png"} alt="New index sheet" />
                <div className="caption">
                  Early on, I added an "Index" tab that gave us the ability to define abstract lists of data such as sales ramps and schedules.
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Power users demand power</h2>
                <p>
                  Throughout the ideation phase, we spoke with professionals and it was clear that we were close with the UI <em>but</em> they also love their bespoke models and the ability to tackle edge-cases. We needed to consider the advanced formula route immediately or risk losing valuable clients.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-primary matrix-bg">
            <span className="slide-background"
              style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/matrix-bg.png)"}}
            ></span>
            <div className="slide stacked">
              <div className="slide-images img-group fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" style={{width: "14em"}} lazy-src={process.env.PUBLIC_URL + "/img/cohort-formula-2.png"} alt="Cohorts formula notes" />
                </div>
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-formula-helper.png"} alt="Formula helper and syntax exploration" />
                </div>
              </div>
              <div className="slide-notes fade-in">
                <p>
                  So I explored how the underlying function might work and how to provide guidance.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Am I in the right ballpark?</h2>
                <p>
                  At this point, I'm feeling pretty good about the direction we're going. It's time to call in fresh users and run some tests. This means putting together a scenario and a prototype and then mentally preparing to be completely wrong about everything.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper captioned">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/proto-plan.png"} alt="Planning the flow" />
                  <div className="caption">
                    Not all tests require this degree of setup and each project is a bit different.
                  </div>
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-right">
                <h2>Drawing up a plan</h2>
                <p>
                  I generally begin with a bullet list of key decisions to validate and then draw out a flow to hit those points. No one test will catch every wrinkle of a design so this can be a bit of a finger in the wind moment.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Make it move!</h2>
                <p>
                  From the flow, I map out the screens and hook up interaction. I like to allow for some non-linear movement because it helps highlight the user's thought process rather than confirm my assumptions.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper captioned">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/proto-flow.png"} alt="Wiring up the prototype" />
                  <div className="caption">
                    Figma prototypes can get hectic in a hurry.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in">
                <h2>Then we get down to brass tacks</h2>
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
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-quick.png"} alt="Quick look at the key UI" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-sales-ramps.png"} alt="Snippet of a sales ramp" />
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-right">
                <h2>Sales Ramp</h2>
                <p>
                  Here's the basic output of a sales ramp where representatives grow from 1k through 10k monthly sales over their first 6 months on the job. Pretty straightforward!
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Allocations</h2>
                <p>
                  It looks remarkably similar but here we begin with a definite number and then use math to "spread" that value out over time, usually a year. It's visually a bit of a yawn but the business value is huge!
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-spread-2.png"} alt="Snippet of a spread" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Riveting.</h2>
                <p>I know, it looks like a table in the end... but what did clients think of the setup?</p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark customer-feedback">
            <div className="slide">
              <div className="slide-notes mobile-help-text">
                "Already getting AWESOME reactions to Cohorts in sales calls!"
              </div>
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/cohort-customer-feedback.png"} alt="Customer feedback" />
                </div>
              </div>
              <div className="slide-notes mobile-help-text">
                "This is a sales call with former power user... he's blown away..."
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>How did we do?</h2>
                <p>Our marketing team went so far as to release a video titled "cohort modeling in under 3 minutes”. Technically true but that ignores much of the mental prep and planning and gets right to the configuration.</p>
                <p>
                  The reality is that our sponsor <em className="good-highlight">clients report an annual savings of $10,000</em>. These numbers tell us that a realistic setup takes close to 45 minutes. That would be just <em>half</em> of our initial goal. But that isn't the full story. It's not that all CFOs are 75% more efficient. In some cases, <em className="good-highlight">the tool opened the door for these advanced techniques to be handed down to associates</em> who lack spreadsheet experience.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper">
                  <img src={process.env.PUBLIC_URL + "/img/marketing-vid.png"} alt="Marketing video - cohort modeling in under 3 minutes" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper reflections">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h2>Reflections</h2>
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
    </SlideObserver>
  );
}