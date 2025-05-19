import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/work.css';
import About from './About';


export default function Work() {
  useEffect(() => {
      document.title = "Barnett UX";
  },[]);
  return (
    <section className="page-wrapper">
      <main className="work">
        <div className="intro">
          <h1 class="page-title"><span className="highlight">Dave</span>designs ideas and systems.</h1>
          <p className="details">🎨 Product Designer + 💻 Front-End Developer | former Lead UX Architect @CoxAutomotive</p>
        </div>
        <div className="cta-group">
          <Link to="/advanced-prototyping" className="cta-btn">
            Explore an advanced Figma prototype <span className="arrow">→</span>
          </Link>
          <Link to="/advanced-components" className="cta-btn">
            Learn useful component techniques <span className="arrow">→</span>
          </Link>
        </div>
        <div className="gallery">
          <Link to="/work/upgrades" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/upgrades.png"} alt="Project 1"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Merchandising Vehicle Upgrades</h2>
              <div className="gallery-subtitle">Multi-Feature Strategy @ Cox Automotive</div>
              <div className="gallery-summary">
                Leveraging build data to empower and scale dealership marketing.
              </div>
            </div>
          </Link>
          <Link to="/work/cohorts" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/cohorts.png"} alt="Project 4"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Financial Model Cohorts</h2>
              <div className="gallery-subtitle">Feature Design @ Mosaic</div>
              <div className="gallery-summary">
                Accelerating CFO forecasts for clients, investments, and staff over time.
              </div>
            </div>
          </Link>
          <Link to="/work/aria" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/aria.png"} alt="Project 5"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">ARIA</h2>
              <div className="gallery-subtitle">
                New Product Design and Development @ Quavo
              </div>
              <div className="gallery-summary">
                Enabling automated fraudulent transaction detection and response.
              </div>
            </div>
          </Link>
          <Link to="/work/mylw" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/mylw.png"} alt="Project 6"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">My Liquid Web</h2>
              <div className="gallery-subtitle">
                Customer Portal Redesign @  Liquid Web
              </div>
              <div className="gallery-summary">
                Empowering customers to build and manage network devices and services.
              </div>
            </div>
          </Link>
          <Link to="/work/manage-liability" className="gallery-item nda-locked">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/manage-liability.png"} alt="Project 2"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Wholesale Auto Liability</h2>
              <div className="gallery-subtitle">Feature Design @ Cox Automotive</div>
              <div className="gallery-summary">
                Building auction transparency and trust while reducing financial liability.
              </div>
            </div>
          </Link>
          <Link to="/work/wholesale-pricing" className="gallery-item nda-locked">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/wholesale-pricing.png"} alt="Project 3"/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Wholesale Auto Pricing</h2>
              <div className="gallery-subtitle">Internal Tools @ Cox Automotive</div>
              <div className="gallery-summary">
                Enriching administrative pricing tools for wholesale vehicles.
              </div>
            </div>
          </Link>
        </div>
        <div id="about">
          <About />
        </div>
      </main>
    </section>
  );
}