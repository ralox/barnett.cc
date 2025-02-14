import React from 'react';
import '../../styles/project.css';
import '../../styles/manage-liability.css';
import SlideObserver from '../../utils/SlideObserver';



export default function ManageLiability() {
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="manage-liability project">
          <div className="project-intro" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/manage-liability.png)"}}>
            <h2 className="project-title">Wholesale Auto: Manage Liability</h2>
            <div className="project-subtitle">Feature Design @ Cox Automotive</div>
            <div className="project-summary">
              Simplified and elevated dealer disclosure on wholesale vehicles, reducing post-sale arbitration by 50 units a week and 
              saving the business roughly $20,000 a week in fees and liabilities.
            </div>
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes">
                <h3>Interested?</h3>
                <p>
                  I'm currently working on telling this story and I may be limited in what details I can share publicly.
                </p>
                <p>
                  If you're interested in hearing more about the process, insights, and outcomes, please contact me.
                </p>
              </div>
            </div>
          </section>

          {/*
          <section className="slide-wrapper reflections">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h3>Reflections</h3>
                <ul>
                  <li>
                    <em className="good-highlight"> Thinking</em> happy thoughts.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          */}
        </article>
      </div>
    </SlideObserver>
  );
}