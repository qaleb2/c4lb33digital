import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Writing/Cell';
import data from '../data/writing';

const Writing = () => (
  <Main
    title="Writing"
    description="My Writing."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/writing">Writing</Link></h2>
          <p>A selection of pieces I'm not too ashamed of</p>
        </div>
      </header>
      {data.map((writing) => (
        <Cell
          data={writing}
          key={writing.title}
        />
      ))}
    </article>
  </Main>
);

export default Writing;
