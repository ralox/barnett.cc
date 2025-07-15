import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import DarkModeToggle from '../utils/darkmode';


export default function PageHeader() {
  const location = useLocation();
  const showReturn = location.pathname !== "/";

  return (
    <header className="page-header">
      { showReturn ?
        <Link to="/" className="back-nav nav-link">
          <svg className="inline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64"/>
            <path d="M61 32L3 32" stroke="black" stroke-width="6" stroke-linecap="round"/>
            <path d="M25.627 9L2.99954 31.6274" stroke="black" stroke-width="6" stroke-linecap="round"/>
            <path d="M25.627 54.6274L2.99954 32" stroke="black" stroke-width="6" stroke-linecap="round"/>
          </svg>
          Go Back
        </Link>
        :
        <Link role="heading" aria-level="1" to="/" className="title">
          Barnett
        </Link>
      }
      <nav>
        <Link
          className="nav-link"
          to="/about"
        >
          About
        </Link>
        <span className="non-page-nav">
          <a
            className="nav-link"
            href="https://s3.us-west-2.amazonaws.com/barnett.cc/Barnett-UX-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <svg className="inline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1220_7347)">
              <rect width="64" height="64"/>
              <path d="M3 61L3 14" stroke-width="6" stroke-linecap="round"/>
              <path d="M51 61V40" stroke-width="6" stroke-linecap="round"/>
              <path d="M3 61H51" stroke-width="6" stroke-linecap="round"/>
              <path d="M3 14H25" stroke-width="6" stroke-linecap="round"/>
              <path d="M27 37.9411L60.9411 4.00001" stroke-width="6" stroke-linecap="round"/>
              <path d="M61 24.5714L61 3.99997" stroke-width="6" stroke-linecap="round"/>
              <path d="M40 4H61.2143" stroke-width="6" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1220_7347">
              <rect width="64" height="64" fill="none"/>
              </clipPath>
              </defs>
            </svg>
          </a>
          <DarkModeToggle />
        </span>
      </nav>
    </header>
  );
}