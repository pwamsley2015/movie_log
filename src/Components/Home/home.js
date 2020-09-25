import React, { Component } from "react";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { withFirebase } from "../Firebase/context";
import MovieCollection from "./MovieCollection";
import SearchBar from "./SearchBar";
import "./home.css";
import SearchResults from "./SearchResults";

class HomePage extends Component {
  constructor(props) {
    super();
    this.state = {
      movieCollection: {},
    };
  }

  componentDidMount() {
    this.props.firebase.getCollectionRef().on("value", (snapshot) => {
      if (snapshot.exists()) {
        this.setState({ movieCollection: snapshot.val() });
      } else {
        this.setState({ movieCollection: {} });
      }
    });
  }

  render() {
    return (
      <div className="home">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Movie Collection App</Navbar.Brand>
        </Navbar>
        <Container fluid className="main">
          <Row>
            <Col>
              <h1>My Collection</h1>
              <MovieCollection movieCollection={this.state.movieCollection} />
            </Col>
            <Col>
              <SearchBar />
              <SearchResults movieCollection={this.state.movieCollection} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withFirebase(HomePage);
