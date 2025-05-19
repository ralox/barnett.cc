import React from 'react';
import {Link} from 'react-router-dom';


export default function PageFooter(showRecs="true") {
  return (
    <footer className="page-footer">
      <div className="work-links">
        <Link className="link-item" to="/work/upgrades">Merchandising Vehicle Upgrades</Link>
        <Link className="link-item" to="/work/manage-liability">Wholesale Auto Liability</Link>
        <Link className="link-item" to="/work/wholesale-pricing">Wholesale Auto Pricing</Link>
        <Link className="link-item" to="/work/cohorts">Financial Cohorts</Link>
        <Link className="link-item" to="/work/aria">ARIA</Link>
        <Link className="link-item" to="/work/mylw">My Liquid Web</Link>
        <Link className="link-item" to="/advanced-components">Advanced Components</Link>
        <Link className="link-item" to="/advanced-prototyping">Advanced Prototyping</Link>
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