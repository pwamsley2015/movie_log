import React from "react";
import { withMovieDb } from "../MovieDB";
import { Button } from "react-bootstrap";
import "./SearchBar.css";

class SearchBarBase extends React.Component {
  constructor(props) {
    super();
    this.state = { search: "" };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.movieDb.handleSearch(this.state.search);
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="search_bar"
          name="search"
          value={search}
          onChange={this.onChange}
          type="text"
          placeholder="Search for movie..."
        />{" "}
        <Button variant="outline-dark" type="submit">
          Search
        </Button>
      </form>
    );
  }
}

const SearchBar = withMovieDb(SearchBarBase);
export default SearchBar;
