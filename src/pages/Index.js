import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Caleb Qi's personal website. Hopeless idealist forced to compromise, "
    + 'self loathing and self proclaimed artist'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome 欢迎</Link></h2>
        </div>
      </header>
      <p> Welcome to my website! Feel free to read more
        <Link to="/about"> about me</Link>, check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">statistics</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
