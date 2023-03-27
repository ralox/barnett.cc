import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/work.css';
import About from './About';


export default function Work() {
  return (
    <section className="page-wrapper">
      <main className="work">
        <div className="intro">
          <h2><span className="highlight">Dave</span>designs ideas and systems.</h2>
          <p className="details">🎨 Product Designer + 💻 Front-End Developer based in Austin 🤠 formerly @ Mosaic</p>
        </div>
        <div className="gallery">
          {/*
          <div className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL + "/img/cohorts.png"} alt="Project 1"/>
            </div>
            <div className="gallery-detail">
              <h3 className="gallery-title">
                Financial Model: Dynamic Dimensions
              </h3>
              <div className="gallery-subtitle">Feature Design @ Mosaic</div>
              <div className="gallery-summary">
                New feature Empowering financial teams and executives to slice and dice model data to match their industries and organizational strategies.
              </div>
            </div>
          </div>
          */}
          <Link to="/work/cohorts" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/cohorts.png"} alt="Project 1"/>
            </div>
            <div className="gallery-detail">
              <h3 className="gallery-title">Financial Model: Cohorts</h3>
              <div className="gallery-subtitle">Feature Design @ Mosaic</div>
              <div className="gallery-summary">
                New feature enabling entrepreneurs and finance professionals to model the impact of groups such as new clients or sales staff changes over time.
              </div>
            </div>
          </Link>
          <Link to="/work/aria" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/aria.png"} alt="Project 1"/>
            </div>
            <div className="gallery-detail">
              <h3 className="gallery-title">ARIA</h3>
              <div className="gallery-subtitle">
                New Product Design and Development @ Quavo
              </div>
              <div className="gallery-summary">
                New SaaS product automating configuration and benchmarking for fraudulent transaction detection and response.
              </div>
            </div>
          </Link>
          <Link to="/work/mylw" className="gallery-item">
            <div className="gallery-photo">
              <img src={process.env.PUBLIC_URL +  "/img/mylw.png"} alt="Project 1"/>
            </div>
            <div className="gallery-detail">
              <h3 className="gallery-title">My Liquid Web</h3>
              <div className="gallery-subtitle">
                Customer Portal Redesign @  Liquid Web
              </div>
              <div className="gallery-summary">
                Complete overhaul, putting the power to manage and extend networks, devices, and services into customer hands.
              </div>
            </div>
          </Link>
        </div>
        <Link to="/ds" className="ds-cta">
          Design System Examples <span className="arrow">→</span>
        </Link>
        <div id="about">
          <About />
        </div>
      </main>
    </section>
  );
}