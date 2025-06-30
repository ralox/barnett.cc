import React from 'react';
import {Link} from 'react-router-dom';
import DarkModeToggle from '../utils/darkmode';

export default function PageHeader() {
  return (
    <header className="page-header">
      <Link role="heading" aria-level="1" to="/" className="title">
        Barnett
      </Link>
      <nav>
        <Link
          className="nav-link"
          to="/"
        >
          Work
        </Link>
        {/*
        <Link
          className="nav-link"
          to="/play"
        >
          Play
        </Link>
        */}
        <Link
          className="nav-link"
          to="/about"
        >
          About
        </Link>
        <span className="non-page-nav">
          <a
            className="nav-link"
            href="https://s3.us-west-2.amazonaws.com/barnett.cc/Barnett-UX-Resume-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="nav-link linkedin-link"
            href="https://www.linkedin.com/in/daveryanbarnett/"
            target="_blank"
            rel="noopener noreferrer"
            title="View LinkedIn Profile"
          >
            <span hidden>View LinkedIn Profile</span>
            <img className="linkedin-img" src={process.env.PUBLIC_URL +  "/img/In-Blue-34.png"} alt="LinkedIn Logo" />
          </a>
          <DarkModeToggle />
        </span>
      </nav>
    </header>
  );
}