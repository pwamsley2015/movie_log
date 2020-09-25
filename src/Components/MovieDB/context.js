import React from "react";

const MovieDbContext = React.createContext(null);

export const withMovieDb = (Component) => (props) => (
  <MovieDbContext.Consumer>
    {(movieDb) => <Component {...props} movieDb={movieDb} />}
  </MovieDbContext.Consumer>
);

export default MovieDbContext;
