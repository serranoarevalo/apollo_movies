import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const UNLIKE_MOVIE = gql`
  mutation unLikeMovie($id: Int!) {
    unLikeMovie(id: $id) @client
  }
`;

function Movie({ id, medium_cover_image, isLiked }) {
  const [likeMovie] = useMutation(LIKE_MOVIE, { variables: { id } });
  const [unlikeMovie] = useMutation(UNLIKE_MOVIE, { variables: { id } });
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
      <button onClick={isLiked ? unlikeMovie : likeMovie}>
        {isLiked ? "Unlike" : "Like"}
      </button>
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
