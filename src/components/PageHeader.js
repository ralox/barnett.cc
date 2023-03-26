import React from 'react';
import {Link} from 'react-router-dom';

export default function PageHeader() {
  return (
    <header className="page-header">
      <Link to="/" className="title">
        <img src={process.env.PUBLIC_URL +  "/img/portrait.png"} className="logo" alt="logo" />
        <h1>Dave Barnett</h1>
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
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="nav-link linkedin-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin-img" src={process.env.PUBLIC_URL +  "/img/In-Blue-34.png"} alt="LinkedIn Logo" />
          </a>
        </span>
      </nav>
    </header>
  );
}