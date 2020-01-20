import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, medium_cover_image }) {
  return (
    <div className="column is-one-fifth">
      <Link to={`/${id}`}>
        <div
          className="has-background-dark card"
          style={{
            height: 350,
            backgroundImage: `url(${medium_cover_image})`,
            backgroundSize: "cover",
            borderRadius: 5
          }}
        ></div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  rating: PropTypes.number,
  description_intro: PropTypes.string,
  language: PropTypes.string,
  medium_cover_image: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;
