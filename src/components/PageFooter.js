import React from 'react';
import {Link} from 'react-router-dom';


export default function PageFooter(showRecs="true") {
  return (
    <footer className="page-footer">
      <div className="work-links">
        Check out my design work
        <Link className="link-item" to="/work/cohorts">Cohorts</Link>
        <Link className="link-item" to="/work/aria">ARIA</Link>
        <Link className="link-item" to="/work/mylw">My Liquid Web</Link>
        {/*<Link className="link-item" to="/work/dimensions">Dynamic Dimensions</Link>*/}
        <Link className="link-item" to="/ds">Design System Bits</Link>
      </div>
      {/*
      <div className="play-links">
        Enjoy some fun stuff
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
      </div>
      
      <div className="contact-links">
        <a className="email-me">✉️</a>
        <a><img className="linkedin-img" src={process.env.PUBLIC_URL +  "/img/In-Blue-34.png"} /></a>
      </div>
      */ }
      <div className="copyright">©️2023 built by Dave Barnett</div>
    </footer>
  );
}