import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurmentID: process.env.REACT_APP_MEASUREMENT_ID,
};

const PREDEFINED_USER = "PREDEFINED_USER";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  // --- User API --- //
  user = (uid) => this.db.ref(`users/${uid}`);

  getCollectionRef = () => {
    return this.user(PREDEFINED_USER).child("/collection");
  };

  getMovieRef = (movieID) => {
    return this.getCollectionRef().child(movieID);
  };
  addMovieToCollection = (movieID, title, overview, release_date) => {
    this.getMovieRef(movieID).set({ title, overview, release_date });
  };

  removeMovieFromCollection = (movieID) => {
    this.getMovieRef(movieID).remove();
  };
}

export default Firebase;
