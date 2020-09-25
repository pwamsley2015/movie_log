import React from "react";
import { withFirebase } from "../Firebase";
import { Button, Card } from "react-bootstrap";
import "./MovieCard.css";

const Movie = (props) => {
  const { id, movie, inCollection, firebase } = props;
  const { title, overview = "", release_date = "Unknown Date" } = movie;

  return (
    <Card className="bg-secondary text-white movieCard">
      <Card.Body className="movieCardContent">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{release_date}</Card.Subtitle>
        <Card.Text className="overview">{overview}</Card.Text>
        <Button
          className="colButton"
          variant="primary"
          onClick={() =>
            inCollection
              ? firebase.removeMovieFromCollection(id)
              : firebase.addMovieToCollection(id, title, overview, release_date)
          }
        >
          {inCollection ? "Remove" : "Add"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default withFirebase(Movie);
