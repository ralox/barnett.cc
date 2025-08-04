import React, {useEffect} from 'react';
import '../../styles/project.css';
import '../../styles/manage-liability.css';
import SlideObserver from '../../utils/SlideObserver';



export default function ManageLiability() {
  useEffect(() => {
    document.title = "Wholesale Auto Liability | Work | Barnett UX";
  },[]);
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <main className="manage-liability project">
          <div className="project-intro">
            <h1 className="project-title">Wholesale Auto Liability</h1>
            <div className="project-subtitle">Feature Design @ Cox Automotive</div>
            <div className="project-summary">
              Simplified and elevated dealer disclosure on wholesale vehicles, reducing post-sale arbitration by 50 units a week and 
              saving the business roughly $20,000 a week in fees and liabilities.
            </div>
            <img className="project-hero-img" src={process.env.PUBLIC_URL + "/img/manage-liability.png"} alt="Abstract image of warning icons commonly seen on vehicle dashboards" />
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes nda-locked">
                <h2>Non-Disclosure Agreement</h2>
                <p>
                  This project falls under an active NDA. More information about the process, insights, and outcomes may be shared in an interview setting.
                </p>
              </div>
            </div>
          </section>

          {/*
          <section className="slide-wrapper reflections">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h2>Reflections</h2>
                <ul>
                  <li>
                    <em className="good-highlight"> Thinking</em> happy thoughts.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          */}
        </main>
      </div>
    </SlideObserver>
  );
}