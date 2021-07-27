import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">

      <header>
        <h3>{data.title}</h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>

      <div className="post">
        <h>{data.subtitle}</h>
      </div>

    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default Cell;