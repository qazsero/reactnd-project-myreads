import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books:books})
      //books.map(book => (console.log(book)))
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.getBooks()
    })
  }

  searchBooks = query => {
    BooksAPI.search(query).then((results) => {
      this.setState({searchResults:results})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BookShelf books={this.state.books} updateShelf={this.updateShelf} />)} />
        <Route exact path="/search" render={() => (<SearchBooks
                                                      searchAction={this.searchBooks}
                                                      searchResults={this.state.searchResults}
                                                      books={this.state.books} />)}
                                                      updateShelf={this.updateShelf} />
      </div>
    )
  }
}

export default BooksApp
