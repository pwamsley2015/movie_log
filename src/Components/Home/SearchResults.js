import React, { Component } from "react";
import { withMovieDb } from "../MovieDB";
import MovieCard from "./MovieCard";
class ResultsBase extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.movieDb.addListener(this);
  }

  render() {
    let numResults = this.props.movieDb.numResults;
    if (numResults === 0) {
      return <h1>No search results.</h1>;
    }

    return (
      <div>
        <h1>{numResults} Results.</h1>
        {this.props.movieDb.movies.slice(0, 11).map((movie, i) => (
          <div>
            <MovieCard
              key={i}
              id={movie.id}
              movie={movie}
              inCollection={!!this.props.movieCollection[movie.id]}
            />
            <br key={i} />
          </div>
        ))}
      </div>
    );
  }
}

const SearchResults = withMovieDb(ResultsBase);
export default SearchResults;
