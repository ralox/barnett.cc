import React, {useEffect} from 'react';
import Recs from '../components/Recs';
import {Link} from 'react-router-dom';
import '../styles/work.css';


export default function Work() {
  useEffect(() => {
      document.title = "Barnett UX";
  },[]);
  return (
    <section className="page-wrapper">
      <main className="work">
        <div className="intro">
          <div className="intro-bio">
            <img className="intro-photo" src={process.env.PUBLIC_URL +  "/img/port-blue.png"} alt="Portrait of Dave"/>
            <h1 className="page-title">Product leader <br/>Designer <br/>& Developer</h1>
            <p className="details">With 12 years of experience solving <br/>complex design challenges and <br/>mastering new tools and tech stacks</p>
          </div>
          <div className="intro-callouts">
            <p>Let me help with</p>
            <ul>
              <li className="callout-item">Design Systems</li>
              <li className="callout-item">Accessibility</li>
              <li className="callout-item">Team Workshopping</li>
              <li className="callout-item">Agentic AI / MCP</li>
            </ul>
          </div>
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
              <img src={process.env.PUBLIC_URL +  "/img/upgrades.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Merchandising Vehicle Upgrades</h2>
              <div className="gallery-subtitle">Cox Automotive</div>
              <div className="gallery-summary">
                Leveraging build data to empower and scale dealership marketing.
              </div>
            </div>
          </Link>
          <Link to="/work/cohorts" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/cohorts.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Financial Model Cohorts</h2>
              <div className="gallery-subtitle">Mosaic</div>
              <div className="gallery-summary">
                Accelerating CFO forecasts for clients, investments, and staff over time.
              </div>
            </div>
          </Link>
          <Link to="/work/aria" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/aria.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">ARIA</h2>
              <div className="gallery-subtitle">
                Quavo
              </div>
              <div className="gallery-summary">
                Enabling automated fraudulent transaction detection and response.
              </div>
            </div>
          </Link>
          <Link to="/work/mylw" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/mylw.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">My Liquid Web</h2>
              <div className="gallery-subtitle">
                Liquid Web
              </div>
              <div className="gallery-summary">
                Empowering customers to build and manage network devices and services.
              </div>
            </div>
          </Link>
          <Link to="/work/manage-liability" className="gallery-item nda-locked">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/manage-liability.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Wholesale Auto Liability</h2>
              <div className="gallery-subtitle">Cox Automotive</div>
              <div className="gallery-summary">
                Building auction transparency and trust while reducing financial liability.
              </div>
            </div>
          </Link>
          <Link to="/work/wholesale-pricing" className="gallery-item nda-locked">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/wholesale-pricing.png"} alt=""/>
            </div>
            <div className="gallery-detail">
              <h2 className="gallery-title">Wholesale Auto Pricing</h2>
              <div className="gallery-subtitle">Cox Automotive</div>
              <div className="gallery-summary">
                Enriching administrative pricing tools for wholesale vehicles.
              </div>
            </div>
          </Link>
        </div>
        <Recs />
      </main>
    </section>
  );
}