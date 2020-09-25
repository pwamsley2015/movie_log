import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDb from "./Components/MovieDB/movieDb";
import MovieDbContext from "./Components/MovieDB/context";

import Firebase from "./Components/Firebase/firebase";
import FirebaseContext from "./Components/Firebase/context";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <MovieDbContext.Provider value={new MovieDb()}>
        <App />
      </MovieDbContext.Provider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
