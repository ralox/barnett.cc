import React, {useEffect} from 'react';
import '../../styles/project.css';
import '../../styles/mylw.css';
import SlideObserver from '../../utils/SlideObserver';


export default function MyLW() {
  useEffect(() => {
    document.title = "My Liquid Web | Work | Barnett UX";
  },[]);
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="mylw project">
          <div className="project-intro">
            <h1 className="project-title">My Liquid Web</h1>
            <div className="project-subtitle">Customer Portal Redesign @ Liquid Web</div>
            <div className="project-summary">
              Unified brand strategy while optimizing an abstract and interwoven information architecture to empower customers 
              and reduce reliance on technical support for routine tasks.
            </div>
            <img className="project-hero-img" src={process.env.PUBLIC_URL + "/img/mylw.png"} alt="Customper portal homescreen on a monitor beside a laptop showing the server health analytics screen." />
          </div>

          <section className="slide-wrapper logo-intro">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Why the redesign?</h2>
                <p>
                  Liquid Web's customer portal was dated and grew organically (read: erratically) for years. New ownership and a marketing facelift also meant that our sales identity was well out-of-sync with our user tools. Enter yours truly, the only in-house designer.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="no-stretch">
                  <img src={process.env.PUBLIC_URL + "/img/lw-logo.png"} alt="Liquid Web logo" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">
                <h2>Okay, what was I working with?</h2>
                <ul>
                  <li>Poor information architecture made finding anything a chore and there was <em>a lot</em> to find.</li>
                  <li>The dedicated mobile site was an isolated and poorly maintained codebase.</li>
                  <li>Overly technical UIs were costing a fortune to support.</li>
                  <li>Our pretty new rebrand was highly inconsistent.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark">
            <div className="slide txt-img">
              <div className="slide-images img-group fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-mobile-first.png"} alt="mobile menu and home screen" />
                </div>
              </div>
              <div className="slide-notes fade-in">
                <h2>My first mobile first</h2>
                <p>
                  One of the first considerations I made in the new design was to plan for a responsive site. Liquid Web's mobile site remained in beta for years and it was often neglected as features were tacked onto the main system. I was keen to deliver a single solution for all devices.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark">
            <div className="slide">
              <div className="slide-images txt-img fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-mobile-symbols.png"} alt="overview of sketch symbols with mobile variants" />
                </div>
              </div>
              <div className="slide-notes">
                <p>As the Sketch library grew, components were simultaneously built with desktop and mobile variants.</p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Untangling the web</h2>
                <p>
                  With every networking device and service you can imagine, organizing the tool was a huge challenge. I did my best to condense everything into easily scannable categories.
                </p>
                <p>
                  Of course, all levels were supported by a search and the site map could be found in the footer.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-home.png"} alt="Portal home page" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper quick-common">
            <div className="slide txt-img">
              <div className="slide-images fade-in fade-from-left">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-quick-common.png"} alt="Quick actions and common tasks" />
                </div>
              </div>
              <div className="slide-notes fade-in fade-from-right">
                <h2>Untangling the web... continued</h2>
                <p>
                  Most categories would include quick actions and nested destinations. The home screen would also house common tasks based on a customer's products and services, deep-linking them to popular actions without breaking the structure.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">
                <h2>Time to teach customers to fish</h2>
                <p>
                  Technical support costs were an issue. To promote self-service, a bold and persistent knowledgebase link found its way into the header. To augment that, I planned a dedicated space along the footer to house contextual articles relevant to the page being viewed.
                </p>
              </div>
              <div className="slide-images fade-in fade-from-right">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-help-articles.png"} alt="Contextual help article list" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-primary">
            <div className="slide txt-img">
              <div className="slide-images fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-domains.png"} alt="Domains description" />
                </div>
              </div>
              <div className="slide-notes fade-in">  
                <h2>Making domains a first-class citizen</h2>
                <p>
                  Domain management was always an afterthought next to our hosting services. If you talked to users and looked around at other hosting services, it was clear that most people thought of their entire hosting setup in terms of their website and that meant its domain name!
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper slide-tilt color-block color-block-dark">
            <div className="slide">
              <div className="slide-images img-group fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-domain-overview.png"} alt="A bird's eye view of domain tools" />
                </div>
              </div>
              <div className="slide-notes mobile-help-text">
                <p>This birds eye view shows the domain registration feature.</p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">  
                <h2>A better mental model</h2>
                <p>
                  By making the domain a top-level category, I was able to logically nest all sorts of networking toys such as content delivery networks, security certificates, and cloud backups inline with the site they served. And, of course, this also gave us the perfect space for the usual DNS records and registration.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper domain-images">
            <div className="slide">
              <div className="slide-images img-group fade-in">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-domain-dash-1.png"} alt="The domain dashboard" />
                </div>
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-domain-dash-2.png"} alt="Domain DNS settings" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper hosting-intro  slide-tilt color-block color-block-dark"> 
            <span className="slide-background"
                style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/lw-host-dash-bg.png)"}}
            ></span>
            <div className="slide txt-solo">
              <div className="slide-notes fade-in">  
                <h2>Hosting first and foremost</h2>
                <p>
                  At its heart, Liquid Web is a hosting company and that means servers and network administration. Customers would always need to quickly diagnose issues, understand server performance, and scale services up or down to meet demands.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes fade-in fade-from-left">  
                <h2>Turning data into information</h2>
                <p>
                  Server dashboards have some common patterns and I needed to match those with the rest of the brand, but this time I also chose to rely heavily on color and minimal visualizations to draw attention to common indicators of server health.
                </p>
              </div>
              <div className="slide-images img-group fade-in fade-from-right">
                <div className="image-wrapper">
                  <img className="lazy-load" lazy-src={process.env.PUBLIC_URL + "/img/lw-host-dash.png"} alt="Hosting dashboard" />
                </div>
              </div>
            </div>
          </section>

          <section className="slide-wrapper">
            <div className="slide txt-solo">
              <div className="slide-notes fade-in fade-from-bottom">  
                <h2>What impact did this have?</h2>
                <p>
                  While I moved on before it was launched and it's no doubt evolved since, the basic structures are still alive and well today! They even hired me on a short-term contract to continue refining the design and the developers kept me in-the-loop as it took shape. <em className="good-highlight">With my departure, Liquid Web placed greater resources into filling and expanding the role of UX in an org which was developer-designed for 17 years</em>.
                </p>
              </div>
            </div>
          </section>

          <section className="slide-wrapper reflections">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h2>Reflections</h2>
                <ul>
                  <li>
                    <em className="good-highlight">Interwoven information architecture doesn't have right answers</em>. While I'm proud of the solution I arrived at, it was by no means perfect and I don't know that's even possible. The nature of these services is that they are intertwined and often co-dependent in a way which makes them difficult to put into rational buckets. I used search and bubbled-up actions as a bandaid but I wish that I had access to someone skilled in IA at the time.
                  </li>
                  <li>
                    <em className="good-highlight">Mobile first is more than responsive design</em>. When being responsive, it's often a matter of shrinking a page down and asking "does this look alright" but that doesn't answer the queston of contextual priority, accessibility, and different interactive mediums. This was the first project where I had to answer the question "how does this work without hover states?"
                  </li>
                  <li>
                    <em className="good-highlight">Solo design can be dangerous</em>. Without a team around to critique and offer insights, I'm confident that I made many easily-avoidable mistakes. Perhaps another designer might have called me out on color contrasts, over-reliance on iconography, or challenged my take on what's mobile-friendly.
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