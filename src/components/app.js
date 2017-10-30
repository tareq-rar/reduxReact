import React, { Component } from 'react';
import BookList from '../container/book-list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookList />
      </div>
    );
  }
}
