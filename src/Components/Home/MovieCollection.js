import React from "react";
import { withFirebase } from "../Firebase/context";
import MovieCard from "./MovieCard";
import "./MovieCollection.css";

const MovieCollection = (props) => {
  const { movieCollection } = props;
  const keys = Object.keys(movieCollection);
  return (
    <div>
      {keys.length === 0
        ? "Search for a movie to add to your collection."
        : keys.map((key, i) => (
            <div>
              <MovieCard
                id={key}
                movie={movieCollection[key]}
                inCollection={true}
              />

              <br />
            </div>
          ))}
    </div>
  );
};

export default withFirebase(MovieCollection);
