import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">

      <header>
        <h3><a href={data.link} src={process.env.PUBLIC_URL + data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="box">
        <h>{data.desc}</h>
      </div>

    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default Cell;
