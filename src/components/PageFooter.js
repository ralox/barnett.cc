import React from 'react';
import {Link} from 'react-router-dom';


export default function PageFooter(showRecs="true") {
  return (
    <footer className="page-footer">
      <div className="work-links">
        Check out my design work
        <Link className="link-item" to="/work/upgrades">Included Upgrades</Link>
        <Link className="link-item" to="/work/manage-liability">Manage Liability</Link>
        <Link className="link-item" to="/work/wholesale-pricing">Pricing Strategy</Link>
        <Link className="link-item" to="/work/cohorts">Cohorts</Link>
        <Link className="link-item" to="/work/aria">ARIA</Link>
        <Link className="link-item" to="/work/mylw">My Liquid Web</Link>
        <Link className="link-item" to="/advanced-components">Advanced Figma Components</Link>
      </div>
      {/*
      <div className="play-links">
        Enjoy some fun stuff
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
        <Link className="link-item">Example</Link>
      </div>
      */}
      <div className="copyright">©️2025 Dave Barnett</div>
    </footer>
  );
}