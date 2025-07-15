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
            <h1 className="project-title">Merchandising Upgrades</h1>
            <div className="project-subtitle">Automated Differentiation for 14,000 Dealers @ Cox Automotive</div>
            <div className="project-overview">
              <div className="project-splash">
                <div className="project-summary">
                  Transforming how dealers market used vehicles by automatically detecting and surfacing hidden value in upgrades, saving up to 15 hours weekly and improving shopper confidence.
                </div>
                <img className="project-hero-img" src={process.env.PUBLIC_URL + "/img/upgrades.png"} alt="Final shopping solution on tablet" />
              </div>
              <div className="project-notes">
                <div className="project-note project-role">
                  <div className="project-note-label">Role</div>
                  Lead UX Architect | Research & Discovery
                </div>
                <div className="project-note project-tools">
                  <div className="project-note-label">Tools</div>
                  Figma, UserTesting, Mural, Rally, Notion, Zoom
                </div>
                <div className="project-note project-timeline">
                  <div className="project-note-label">Timeline</div>
                  4 Months
                </div>
                <div className="project-note project-impact">
                  <div className="project-note-label">Impact</div>
                  15 hours or $600/week (~$8.4 million potential)
                </div>
              </div>
            </div>
          </div>

           <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h2>Background</h2>
                <p>
                  Cox Automotive serves thousands of dealers managing millions of used vehicle sales annually. These sales operate on razor-thin margins, often under $500 per vehicle. We suspected that, with our industry-leading data, we could give our dealers a competitive edge by helping them tell unique stories about each vehicle.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                 <div className="slide-wrapper color-block color-block-offset">
                  <div className="slide stacked">
                     <h2>Discovery</h2>
                    <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-discover.svg"} alt="Double Diamond, highlighting the problem discovery phase" />
                  </div>
                </div>
                <h3>User Research</h3>
                <p>
                  To discover the details of this sales journey, we looked at the data from our merchandising tools and identified dealerships who were already building unique vehicle highlights. From there, I needed to uncover what the process looked like, how much time and energy went into it, and what was driving value for these dealers.
                </p>
                <p>
                  I conducted in-depth, one-on-one interviews with 5 dealership owners and marketing managers to understand their current workflows. My research revealed that, on average, these dealers spent 3 hours each day manually piecing together vehicle specifications. They needed to hunt across unfamiliar makes and models using third-party tools, looking for ways to differentiate each vehicle and optimize returns. Then they had to design and publish these details individually for every unit on their lot.
                </p>
                <p>
                  To get the other side of the story, I also spoke with 7 active used vehicle shoppers, recruited through UserTesting.com. I had each shopper walk me through their current search goals, the sites they use, and share a specific listing that caught their eye. These interviews showed two distinct behaviors: feature-driven buyers seeking specific capabilities, likely at a premium, and value-driven shoppers who quickly dismiss higher-priced options if the justification isn't obvious.
                </p>
              </div>
            </div>
          </section>

          {/* image here */}

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Competitive Analysis & Data Audit</h3>
                <p>
                  After speaking with dealers and shoppers, we analyzed how competitors and manufacturers highlight unique features. I paid special attention to new car builders and official window stickers as informed shoppers would use these to access OEM-specific language. Prior research also told us that official OEM documents carried the highest levels of trust with shoppers, so it was worthwhile to reflect on the type of information, level of detail, and organizational structures they used.
                </p>
                <p>
                  We pulled 50 official window stickers from real vehicles and compared them against our internal data. While I identified gaps, inconsistencies, and imperfections in our API service, the audit suggested that there was enough information to tell compelling upgrade stories that would mirror what shoppers experience from other trusted sources.
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

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Problem Validation</h3>
                <p>
                  Our research suggested that our used vehicle sales were in fact leaving money on the table. In a market with slim margins, dealers were individually researching and crafting stories for every vehicle. Worse yet were dealers who weren't differentiating at all between similar models, leading them and their customers to undervalue or dismiss their vehicles.
                </p>
                <div className="slide-images fade-in fade-from-left">
                  <div className="image-wrapper">
                    <img className="lazy-load" style={{width: "18em"}} lazy-src={process.env.PUBLIC_URL + "/img/upgrades-process-notes.png"} alt="Research plan checklist" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                 <div className="slide-wrapper color-block color-block-offset">
                  <div className="slide stacked">
                     <h2>Defining</h2>
                    <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-define.svg"} alt="Double Diamond, highlighting the defining phase"/>
                  </div>
                </div>
                <h3>Information Architecture & Ideation</h3>
                <p>
                  With research insights in hand, we began exploring how to surface upgrade data within existing dealer tools. We identified three key questions: optimal placement, appropriate detail level, and shopper value perception. The existing Vehicle Intelligence 360 infrastructure provided our technical foundation, allowing us to focus on presentation and user experience rather than data collection.
                </p>
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