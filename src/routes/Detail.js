import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MOVIE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, { variables: { id } });
  return (
    <div
      className="hero is-fullheight"
      style={{
        backgroundImage: "linear-gradient(-95deg , #FE7236, #D754AD)"
      }}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-two-thirds">
              <h1
                className="title has-text-white"
                style={{ marginBottom: 40, fontSize: 60 }}
              >
                {loading ? "Loading..." : data.movie.title}
              </h1>
              {!loading && (
                <div>
                  <h2 className="subtitle has-text-white is-size-3">
                    {data.movie.language} · {data.movie.rating}⭐️
                  </h2>
                  <h4 class="subtitle has-text-white is-size-4 column is-paddingless is-half">
                    {data.movie.description_intro}
                  </h4>
                </div>
              )}
            </div>
            {!loading && (
              <div className="column">
                <div
                  style={{
                    width: "100%",
                    height: "75vh",
                    backgroundImage: `url(${data.movie.medium_cover_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    borderRadius: 7
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
