import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Caleb Qi  祁乐</h2>
        <p><a href="cqi2@bu.edu">cqi2@bu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> "We're all going to die, all of us, what a circus! That alone should make
            us love each other but it doesn't. We are terrorized and flattened by trivialities, we are eaten up by
            nothing.” - Charles Bukowski
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Caleb Qi <Link to="/">qalbii.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
