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
            {/* jump to solution */}
          </section>

          <div className="slide-wrapper color-block color-block-offset">
            <div className="slide stacked">
                <h2>Problem Discovery</h2>
              <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-discover.svg"} alt="Double Diamond, highlighting the problem discovery phase" />
            </div>
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
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

          {/* journey image here */}

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
            </div>
          </section>

          <div className="slide-wrapper color-block color-block-offset">
            <div className="slide stacked">
                <h2>Problem Definition</h2>
              <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-define.svg"} alt="Double Diamond, highlighting the defining phase"/>
            </div>
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Synthesis</h3>
                <div className="image-wrapper img-checklist">
                  <img className="lazy-load" style={{width: "18em"}} lazy-src={process.env.PUBLIC_URL + "/img/upgrades-process-notes.png"} alt="Research plan checklist" />
                </div>
                <p>
                  Our research suggested that used vehicle sales were in fact leaving money on the table. In a market with slim margins, dealers were individually researching and crafting stories for every vehicle. Worse yet were dealers who weren't differentiating at all between similar models, leading them and their customers to undervalue or outright dismiss vehicles.
                </p>
                <p>
                  Cox's existing data had some hygiene issues but mapped reasonably well to what we saw from trusted sources, suggesting that we had a chance to "move the needle" when it came to finding additional value. It was made clear from coordination with engineering leaders that clean-up wasn't a feasible option, so this was noted as a constraint, but not a blocker.
                </p>
                 <p>
                   With a focus on reducing manpower investment, we determined that our existing Vehicle Intelligence 360 infrastructure provided the right technical foundation and established patterns.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Opportunity</h3>
                <p>
                   While the automated nature of VI360 was a perfect fit for the initial problem, it wasn't the whole picture. We knew that we'd need two more solutions to close the gaps: one catering to wholesale buyers and another for merchandising managers. We won't explore those in detail, but here's a peek at the sibling projects:
                </p>
              </div>
              <div className="project-group">
                <div className="slide-images fade-in fade-from-left">
                  <div className="image-wrapper captioned">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-fes.png"} alt="A 3-column sheet with dense data and no branding" />
                    <div className="caption">
                      Factory Equipment Sheets offer detailed data for both wholesale buyers and shoppers
                    </div>
                  </div>
                </div>
                <div className="slide-images fade-in fade-from-right">
                  <div className="image-wrapper captioned">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-billboard.png"} alt="A branded advertisement with bullet points, images, and overlays" />
                    <div className="caption">
                      Included Upgrades Billboards are customizable and can be published to any listing platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="slide-wrapper color-block color-block-offset">
            <div className="slide stacked">
                <h2>Solution Development</h2>
              <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-develop.svg"} alt="Double Diamond, highlighting the devliver phase"/>
            </div>
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Ideation & Information Architecture</h3>
                <p>
                   With our background research insights in hand, I began exploring information architecture and level of detail. VI360 came packaged with a number of patterns, allowing us to focus on the presentation layer. My early wireframes aimed to address three key goals:
                </p>
                <ol>
                  <li>Discoverable: Will shoppers notice this new information?</li>
                  <li>Understandable: Does the information make sense to shoppers?</li>
                  <li>Valuable: Does it impact shoppers' perception of value?</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h3>Scoping: Crawl, Walk, Run</h3>
                <p>
                  I crafted low-fidelity mockups exploring three progressive approaches: crawl, walk, and run. These wireframes helped align product, design, and engineering teams quickly around feasible solutions that could be approached as stages or options. The 'crawl' stage focused on basic upgrade listing, 'walk' added visual hierarchy and grouping, while 'run' incorporated rich descriptions and value indicators. Cross-functional collaboration at this stage prevented costly development pivots later.
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

          <section className="slide-wrapper slide-tilt color-block color-block-primary">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h3>User Testing</h3>
                <p>
                  We had a sound understanding of the problem we wanted to solve, and a few options in front of us. Before we moved into the final design phase, I took the Opportunity to recruit the help of actual shoppers on UserTesting.com. We were still concerned about the discoverability of this feature, the clarity of the language, and whether it truly boosted perceived value.
                </p>
                <p>
                  At this stage, business leadership was also very interested in exploring additional levels of detail. The solution might link various features together and introduce a library of articles for shoppers to learn more. So this was something new that we needed to validate.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide img-group">
               <div className="slide-notes fade-in fade-from-left">
                <h4>Qualitative User Testing</h4>
                <p>
                  I recruited 15 vehicle shoppers to review simple prototypes of our crawl and walk concepts. These unmoderated sessions gave us video reactions and valuable, open-ended feedback.
                </p>
                <ul>
                  <li>
                    Shoppers responded positively to the detailed descriptions despite being verbose, containing jargon, and having outdated elements. Shoppers routinely <em>did not read enough</em> to increase understanding, suggesting that the mere presence of supporting detail elevated trust.
                  </li>
                  <li>
                    Our "valued at" language was misunderstood, however, the listed dollar amount clearly boosted each shopper's overall perception of the vehicle's value.
                  </li>
                </ul>
              </div>
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-test-2.png"} alt="high-fidelity variant 2 for user testing" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h4>Quantitative Surveys</h4>
                <p>
                  Taking the hint that our labels could improve, I opened up a survey to 100 shoppers
                </p>
                <ul>
                  <li>
                    Despite being industry-standard language, our shoppers were reading "options" as an additional cost or choice but our solution targetted used vehicles being sold as-configured. We ultimately decided to adopt "Included Upgrades" following the survey feedback.
                  </li>
                  <li>
                    Responses indicated that "originally" did the best job at conveying the past-tense nature of the valuation.
                  </li>
                </ul>
              </div>
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-copy-survey-results.png"} alt="survey results for copy options" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h4>Analytics vs Assumptions</h4>
                <p>
                  When stakeholders pushed for deep-dive upgrade exploration, we pulled up analytics from existing feature writeups. The data showed dramatic underutilization for what was essentially the same feature elsewhere in the product. This data backed up the qualitative evidence that casual scanning of supporting text was sufficient for our current goals and was enough to successfully advocate against the added scope.
                </p>
              </div>
            </div>
          </section>

          <div className="slide-wrapper color-block color-block-offset">
            <div className="slide stacked">
                <h2>Solution Delivery</h2>
              <img className="lazy-load" style={{width: "75ch"}} lazy-src={process.env.PUBLIC_URL + "/img/dd-deliver.svg"} alt="Double Diamond, highlighting the problem discovery phase" />
            </div>
          </div>

          <section className="slide-wrapper color-block color-block-dark">
            <div className="slide img-group stacked">
              <h2>Final Solution</h2>
              <p>
                By leveraging existing data, we created scannable upgrade lists that help dealers justify premium pricing while giving shoppers confidence in their purchasing decisions. The solution integrates seamlessly into existing dealer and shopper workflows without additional data entry or maintenance.
              </p>
              <div className="slide-images fade-in fade-from-bottom">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/vi360-clip-hidef.gif"} alt="high-fidelity outcome" />
                </div>
              </div>
            </div>
          </section>

          

          {/* next up... continue navigating with widget */}

        </article>
      </div>
    </SlideObserver>
  );
}