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
        <main className="upgrades project">
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

          <section>
            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <h2 className="span-100">Project Overview</h2>
                <div className="text-block span-50">
                  <h3>
                    Background
                  </h3>
                  <p>
                    Cox Automotive serves thousands of dealers managing millions of used vehicle sales annually. These sales operate on razor-thin margins, often under $500 per vehicle. We suspected that, with our industry-leading data, we could give our dealers a competitive edge by helping them tell unique stories about each vehicle.
                  </p>
                </div>
                <div className="text-block span-50">
                  <h3>
                    The Design Process
                  </h3>
                  <p>
                    The process I follow mirrors the classic Double Diamond, alternating between phases of diverging research and ideation followed by converging analysis and execution.
                  </p>
                  <p>
                    Each half seeks to answer a basic question:
                  </p>
                  <ol>
                    <li>Do we have the right problem?</li>
                    <li>Do we have the right solution?</li>
                  </ol>
                </div>
                <div className="design-process span-100">
                  <div className="design-phase span-25">
                    Discover
                    <img className="phase-icon" src={process.env.PUBLIC_URL + "/img/dd-discover.svg"} alt="" />
                  </div>
                  <div className="design-phase span-25">
                    Define
                    <img className="phase-icon" src={process.env.PUBLIC_URL + "/img/dd-define.svg"} alt="" />
                  </div>
                  <div className="design-phase span-25">
                    Develop
                    <img className="phase-icon" src={process.env.PUBLIC_URL + "/img/dd-develop.svg"} alt="" />
                  </div>
                  <div className="design-phase span-25">
                    Deliver
                    <img className="phase-icon" src={process.env.PUBLIC_URL + "/img/dd-deliver.svg"} alt="" />
                  </div>
                </div>
              </div>
              {/* jump to solution */}
              </div>
          </section>

          <section>
            <div className="slide-wrapper color-block color-block-offset">
              <div className="slide-grid-temp slide heading-banner">
                <h2>Problem Discovery</h2>
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/dd-discover.svg"} alt="Highlighting the problem discovery phase of the double diamond" />
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-75">
                  <h3>User Research</h3>
                  <p>
                    To discover the details of this sales journey, we looked at the data from our merchandising tools and identified dealerships who were already building unique vehicle highlights. From there, I needed to uncover what the process looked like, how much time and energy went into it, and what was driving value for these dealers.
                  </p>
                  <img className="lazy-load illustration-dealers" lazy-src={process.env.PUBLIC_URL + "/img/dealers.png"} alt=""/>
                  <p>
                    I conducted in-depth, one-on-one interviews with 5 dealership owners and marketing managers to understand their current workflows. My research revealed that, on average, these dealers spent 3 hours each day manually piecing together vehicle specifications. They needed to hunt across unfamiliar makes and models using third-party tools, looking for ways to differentiate each vehicle and optimize returns. Then they had to design and publish these details individually for every unit on their lot.
                  </p>
                  <img className="lazy-load illustration-shoppers" lazy-src={process.env.PUBLIC_URL + "/img/shoppers.png"} alt=""/>
                  <p>
                    To get the other side of the story, I also spoke with 7 active used vehicle shoppers, recruited through UserTesting. I had each shopper walk me through their current search goals, the sites they use, and share a specific listing that caught their eye. These interviews showed two distinct behaviors: <em>feature-driven shoppers</em> seeking specific capabilities, likely at a premium, and <em>value-driven shoppers</em> who quickly dismiss higher-priced options if the justification isn't obvious.
                  </p>
                </div>
                <div className="micro-card-group fade-in fade-from-right span-25">
                    <div className="micro-card">
                      <div className="micro-card-data">12</div>
                      <div className="micro-card-label">interviews</div>
                    </div>
                    <div className="micro-card">
                      <div className="micro-card-data">5</div>
                      <div className="micro-card-label">dealers</div>
                    </div>
                    <div className="micro-card">
                      <div className="micro-card-data">7</div>
                      <div className="micro-card-label">shoppers</div>
                    </div>
                  </div>
              </div>
            </div>

            {/* journey image here */}

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-100">
                  <h3>Competitor Analysis & Data Audit</h3>
                  <p>
                    We then analyzed how competitors and manufacturers highlight unique features. New car builders often inform shoppers of OEM-specific language while research shows that window stickers command high levels of trust.
                  </p>
                  <p>
                    The team pulled 50 window stickers and we combed through looking for patterns and checking that our internal data matched. I noted a handful of consistency and copy issues but the PO and I agreed that it was complete enough to deliver value.
                  </p>
                </div>
                <div className="api-audit image-wrapper fade-in fade-from-bottom span-50">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/api-data-notes.gif"} alt="Marked-up notes on API data, such as outdated trials and incomplete feature lists" />
                </div>
                <div className="window-sticker image-wrapper fade-in fade-from-bottom span-50">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-oem-eval.png"} alt="Example of an official Ford window sticker with light evaluation highlights" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="slide-wrapper color-block color-block-offset">
              <div className="slide-grid-temp slide heading-banner">
                <h2>Problem Definition</h2>
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/dd-define.svg"} alt="Highlighting the defining phase of the double diamond"/>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-100">
                  <h3>Synthesis</h3>
                  <img className="lazy-load" 
                      lazy-src={process.env.PUBLIC_URL + "/img/upgrades-process-notes.png"} 
                      alt="Research plan checklist" 
                      style={{
                      float:"left",
                      width:"clamp(15em,30%,100%",
                      margin:"0 1em 1em 0"
                    }}
                  />
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
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-100">
                  <h3>Added Opportunities</h3>
                  <p>
                    While we had a great answer for the initial problem, we knew there was a bigger picture that would require two additional solutions. The first catering to wholesale buyers and the second to merchandising managers. We won't explore those in detail, but here's a peek:
                  </p>
                </div>
                 <div className="image-wrapper captioned span-50 fade-in fade-from-left">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-fes.png"} alt="A 3-column sheet with dense data and no branding" />
                  <div className="caption">
                    Factory Equipment Sheets offer detailed data for both wholesale buyers and shoppers
                  </div>
                </div>
                <div className="image-wrapper captioned span-50 fade-in fade-from-right">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-billboard.png"} alt="A branded advertisement with bullet points, images, and overlays" />
                  <div className="caption">
                    Included Upgrades Billboards are customizable and can be published to any listing platform
                  </div>
                </div> 
              </div>
            </div>
          </section>

          <section>
            <div className="slide-wrapper color-block color-block-offset">
              <div className="slide-grid-temp slide heading-banner">
                <h2>Solution Development</h2>
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/dd-develop.svg"} alt="Highlighting the devliver phase of the double diamond"/>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-left span-50">
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
                <div className="text-block fade-in fade-from-right span-50">
                  <h3>Scoping: Crawl, Walk, Run</h3>
                  <p>
                    I crafted low-fidelity mockups exploring three progressive approaches: crawl, walk, and run. These wireframes helped align product, design, and engineering teams quickly around feasible solutions that could be approached as stages or options. The 'crawl' stage focused on basic upgrade listing, 'walk' added visual hierarchy and grouping, while 'run' incorporated rich descriptions and value indicators. Cross-functional collaboration at this stage prevented costly development pivots later.
                  </p>
                </div>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="fade-in fade-from-bottom span-100">
                  <div className="image-wrapper captioned">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-initial-ideation.png"} alt="Early low fidelity mock ideation" />
                    <div className="caption">
                      Low fidelity mockups helped product, design, and engineering ideate and align quickly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="image-wrapper span-33">
                      <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-crawl.png"} alt="low fidelity mockup of crawl stage" />
                </div>
                <div className="image-wrapper span-33">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-walk.png"} alt="low fidelity mockup of walk stage" />
                </div>
                <div className="image-wrapper span-33">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-wire-run.png"} alt="low fidelity mockup of run stage" />
                </div>
              </div>
            </div>

            <div className="slide-wrapper callout-block user-testing">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-75">
                  <h3>User Testing</h3>
                  <p>
                    We had a sound understanding of the problem we wanted to solve, and a few options in front of us. Before we moved into the final design phase, I took the Opportunity to recruit the help of actual shoppers on UserTesting.com. We were still concerned about the discoverability of this feature, the clarity of the language, and whether it truly boosted perceived value.
                  </p>
                  <p>
                    At this stage, business leadership was also very interested in exploring additional levels of detail. The solution might link various features together and introduce a library of articles for shoppers to learn more. So this was something new that we needed to validate.
                  </p>
                </div>
                <div className="micro-card-group span-25">
                  <div className="micro-card">
                    <div className="micro-card-data">+15</div>
                    <div className="micro-card-label">shopper interviews</div>
                  </div>
                  <div className="micro-card">
                    <div className="micro-card-data">100</div>
                    <div className="micro-card-label">survey responses</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-50">
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
                <div className="fade-in fade-from-bottom span-50">
                  <div className="image-wrapper">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-test-2.png"} alt="high-fidelity variant 2 for user testing" />
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-100">
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
                <div className="word-cloud fade-in fade-from-bottom span-66">
                  <div className="image-wrapper">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/upgrades-word-cloud.svg"} alt="survey results as a word cloud showing Upgrades and Originally as top votes" />
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-wrapper">
              <div className="slide-grid-temp slide">
                <div className="text-block fade-in fade-from-bottom span-100">
                  <h4>Analytics vs Assumptions</h4>
                  <p>
                    When stakeholders pushed for deep-dive upgrade exploration, we pulled up analytics from existing feature writeups. The data showed dramatic underutilization for what was essentially the same feature elsewhere in the product. This data backed up the qualitative evidence that casual scanning of supporting text was sufficient for our current goals and was enough to successfully advocate against the added scope.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <div className="slide-wrapper color-block color-block-offset">
              <div className="slide-grid-temp slide heading-banner">
                <h2>Solution Delivery</h2>
                <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/dd-deliver.svg"} alt="Highlighting the problem discovery phase of the double diamond" />
              </div>
            </div>

            <div className="slide-wrapper color-block color-block-dark">
              <div className="slide-grid-temp slide">
                <div className="text-block span-100">
                  <h3>Final Solution</h3>
                  <p>
                    We created intuitive vehicle specs which help dealers justify premium pricing while giving shoppers confidence in their purchasing decisions; all with no additional effort from busy dealerships.
                  </p>
                </div>
                <div className="fade-in fade-from-bottom span-100">
                  <div className="image-wrapper">
                    <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/vi360-clip-hidef.gif"} alt="high-fidelity outcome" />
                  </div>
                </div>
              </div>
            </div>
          </section>  

          <section className="upgrades-footer">
            {/* next up... continue navigating with widget */}
          </section>

        </main>
      </div>
    </SlideObserver>
  );
}