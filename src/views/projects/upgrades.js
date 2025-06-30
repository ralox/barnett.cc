import React, {useEffect} from 'react';
import '../../styles/project.css';
import '../../styles/upgrades.css';
import SlideObserver from '../../utils/SlideObserver';



export default function Upgrades() {
  useEffect(() => {
    document.title = "Merchandising Vehicle Upgrades | Work | Barnett UX";
  },[]);
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="upgrades project">
          <div className="project-intro">
            <h1 className="project-title">Merchandising Vehicle Upgrades</h1>
            <div className="project-subtitle">Multi-Feature Strategy @ Cox Automotive</div>
            <div className="project-summary">
              Supercharged dealer merchanising through automated vehicle highlights which enable busy dealers to tell unique stories 
              for every vehicle on their lot while providing shoppers with greater confidence in pricing transparency.
            </div>
            <img className="project-hero-img" src={process.env.PUBLIC_URL + "/img/upgrades.png"} alt="Final shopping solution on tablet" />
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Problem Discovery</h2>
                <p>
                  Cox Automotive works with thousands of dealers who rely on millions of used vehicle sales every year. Marketing this fluxuating and unfamiliar inventory is time consuming and margins are razor-thin.
                </p>
                <p>
                  What makes each vehicle stand out and how can we help dealers tell that story in a way that connects with shoppers, without added overhead?
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark persona-block persona-gary">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img className="lazy-load" style={{width: "18em"}} lazy-src={process.env.PUBLIC_URL + "/img/upgrades-process-notes.png"} alt="Research plan checklist" />
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-right">
                <div className="persona-subtitle">Persona Notes</div>
                <h2>Gary, Merchandising Manager</h2>
                <p>
                  Gary markets his revolving, used vehicle inventory around common features, often relying on automatic tools and bulk operations to save time. Chasing down package data is prohibitive and would take away time from other tasks; especially when dealing with numerous makes. Without surfacing each vehicle's differentiating features or manufacturer-specific selling points, he's potentially leaving money on the table.
                </p>
                <p>
                  <span className="persona-list-header">Goals</span>
                  <ul>
                    <li>Save time</li>
                    <li>Optimize ROI</li>
                  </ul>
                  <span className="persona-list-header">Pain Points</span>
                  <ul>
                    <li>Making compelling sales stories for each vehicle</li>
                    <li>Creating value differentiation between similar models</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide img-group">
              <div className="image-wrapper captioned fade-in">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-oem-eval.png"} alt="Three major stages of ideation" />
                  <div className="caption">
                    We compared window stickers against our internal data, looking for gaps or deviation.
                  </div>
              </div>
              <div className="image-wrapper captioned no-stretch fade-in">
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-api-eval.png"} alt="New index sheet" />
                <div className="caption">
                  I evaluated the hygiene and consistency of our internal APIs.
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-primary">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Solution Discovery</h2>
                <p>
                  With an understanding of user pain points and our own resources, we were ready to explore solutions. Our Vehicle Intelligence 360 tool was already performing automated markup of vehicle features, so we opted to expand on that first.
                </p>
                <p>
                  Now we needed to learn...
                  <ul>
                    <li>Where best to display this data?</li>
                    <li>What level of detail should we deliver?</li>
                    <li>Would shoppers understand and perceive <em>value</em>?</li>
                  </ul>
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper captioned">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-initial-ideation.png"} alt="Early low fidelity mock ideation" />
                  <div className="caption">
                    Low fidelity mockups helped product, design, and engineering ideate and align quickly
                  </div>
                </div>
                <div className="slide img-group upgrades-crawl-walk-run-inset">
                  <div className="image-wrapper">
                      <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-crawl.png"} alt="low fidelity mockup of crawl stage" />
                  </div>
                  <div className="image-wrapper">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-walk.png"} alt="low fidelity mockup of walk stage" />
                  </div>
                  <div className="image-wrapper">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-run.png"} alt="low fidelity mockup of run stage" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide img-group">
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-test-1.png"} alt="high-fidelity variant 1 for user testing" />
                </div>
              </div>
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-test-2.png"} alt="high-fidelity variant 2 for user testing" />
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-top callout-block">
                <p>
                  With the basics aligned, I used higher fidelity images to run a series of tests with vehicle shoppers.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img className="lazy-load captioned" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-copy-survey-results.png"} alt="survey results for copy options" />
                  <div className="caption">
                    Surveys were used to rapidly zero-in on ideal language.
                  </div>
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-right">
                <h2>User Testing Findings</h2>
                <ol>
                  <li>
                    Despite being industry-standard language, our shoppers were reading "options" as an additional cost or choice but our solution targetted used vehicles being sold as-configured.
                  </li>
                  <li>
                    All shoppers wanted to see detailed item descriptions and responded positively to that option even when they did <em>not read enough</em> to increase understanding.
                  </li>
                  <li>
                    The text "valued at" did not convey the past-tense nature of the valuation. However, the dollar amount did improve shoppers' overall perception of the vehicle's value.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="slide-wrapper color-block color-block-dark">
            <div className="slide img-group stacked">
              <h2>Final Featue As-Delivered</h2>
              <div className="slide-images fade-in fade-from-bottom">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/vi360-clip-hidef.gif"} alt="high-fidelity outcome" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper upgrade-follow-up">
            <div className="slide img-group">
              <div className="slide-notes fade-in">
                <h2>Fast-Follow Projects</h2>
                <p>
                  With the release of Included Upgrades, we were immediately delivering value. But we now had access to a rich data resource and wanted to give dealers more control over how they engaged with it.
                </p>
                <ul>
                  <li>
                    <em>Factory equipment sheets</em> offer a reliable, no-frills display that my research shows shoppers trust at the same level as OEM-branded documents. In addition to marketing, this format also serves dealers during appraisals.
                  </li>
                  <li>
                    <em>Included Upgrades billboards</em> leverage all of the same data to create unique value for shoppers, but gives dealers control over the messaging and branding.
                  </li>
                </ul>
              </div>
              <div className="project-group">
                <div className="slide-images stacked fade-in fade-from-bottom">
                  <div className="image-wrapper captioned">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-fes.png"} alt="example of a generated equipment sheet" />
                    <div className="caption">
                      Factory Equipment Sheets with detailed build data and valuation
                    </div>
                  </div>
                </div>
                <div className="slide-images stacked fade-in fade-from-bottom">
                  <div className="image-wrapper captioned">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-billboard.png"} alt="example of a customized billboard" />
                    <div className="caption">
                      Included Upgrades Billboard with dealer customization
                    </div>
                  </div>
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
                    <em className="good-highlight">Simple surveys are powerful</em> and yield quantifiable, actionable insight in a hurry. We saved a lot of back-and-forth on copy disagreement by going right to the customer.
                  </li>
                  <li>
                    <em className="good-highlight">Imperfect data still tells a story</em> just as our long, ugly descriptions proved, sometimes the very offer of supporting detail is all you need to create a sense of trust.
                  </li>
                  <li>
                    <em className="good-highlight">Remove product blinders</em> when exploring solutions. The initial research into our data, and mapping that with a customer need, opened the door for other interconnected features spread across different products and serving different use cases.
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