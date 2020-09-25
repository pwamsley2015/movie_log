import * as CONSTANTS from "../../Constants/constants";

class MovieDB {
  constructor() {
    this.movies = [];
    this.numResults = 0;
    this.listeners = [];
  }

  addListener = (listener) => {
    this.listeners.push(listener);
  };

  // --- TMDB API --- //
  handleSearch = (search) => {
    if (search.length != 0) {
      fetch(`${CONSTANTS.TMDB_API_URL}&query=${search}`)
        .then((data) => data.json())
        .then((data) => {
          this.movies = [...data.results];
          this.numResults = data.total_results;
        })
        .then(() => {
          console.log(`NumResults:${this.numResults}`);
        })
        .then(() =>
          this.listeners.forEach((component) => component.forceUpdate())
        );
    }
  };
}

export default MovieDB;
