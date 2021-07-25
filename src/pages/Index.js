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
      <p> Welcome to my website. It was inspired and built on the backs of people who are way more creative and smart at website building than me. And while I
      hate not being original, I mean, only truly great pieces of art happen to be original, right? Anyways, feel free to read more
        <Link to="/about">about me</Link>, or check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">stalk me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
