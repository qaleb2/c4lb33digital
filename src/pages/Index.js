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
      <p> Welcome to my website! It is still a work in progress, and I hope to make this my online portfolio.
      Maybe I will add some personal touches like some of my writing eventually.
      </p>
      <p>
      If you are an employer, please check out my <Link to="/projects">projects</Link>, {' '}
      and detailed <Link to="/resume">resume</Link> {' '} to learn more about my experience and skills.
      You can also go to <Link to="/about"> about</Link> for an intro I wrote for myself. Enjoy!
      </p>
    </article>
  </Main>
);

export default Index;
