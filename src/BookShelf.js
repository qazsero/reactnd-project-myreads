import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookRow from './BookRow'

class BookShelf extends Component {

  render(){

    let currentlyReading
    let wantToRead
    let read

    console.log(this.props.books)

    currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading')
    wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead')
    read = this.props.books.filter(book => book.shelf === 'read')


    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookRow title="Currently Reading" books={currentlyReading} updateShelf={this.props.updateShelf} />
            <BookRow title="Want to Read" books={wantToRead} updateShelf={this.props.updateShelf} />
            <BookRow title="Read" books={read} updateShelf={this.props.updateShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    )
  }

}

export default BookShelf
