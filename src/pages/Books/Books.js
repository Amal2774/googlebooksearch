import React, { Component } from 'react';
import Search from '../../components/Search/Search.js';
import API from "../../utils/API";

class Books extends Component {

  state = {
    books: [],
    bookSearch: ''
  };

  handleSearch = (e) => {
    console.log(e.target.value);
    this.state({ bookSearch: e.target.value})
  };

  searchBooks = (e) => {
    e.preventDefault();

  }


  render() {
    return (
      <div>
          <Search
            value={this.state.recipeSearch}
            onChange={this.handleSearch}
          />
      </div>
    );
  }
}

export default Books;