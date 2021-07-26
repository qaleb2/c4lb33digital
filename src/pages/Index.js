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
      <p> Welcome to my website! I wanted to outsource my existence so that the world could learn more about me.
      Anyways, feel free to read more
        <Link to="/about"> about me</Link>, check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">stalk me</Link>.
      </p>
      <h2>Come on you're not even alive, if you're not backed up on a drive - Grimes in "We Appreciate Power"</h2>
    </article>
  </Main>
);

export default Index;
