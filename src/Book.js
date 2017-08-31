import React, {Component} from 'react'

class Book extends Component {


  updateShelf = (shelf) => {
    this.props.updateShelf(this.props.book, shelf)
  }


  render(){

    //esta variable elige la opcion del estado del libro
    let bookshelf = 'none';
    if(this.props.book.shelf) {
      bookshelf = this.props.book.shelf
    }

    //En caso de no haber thumbnail
    let thumbnail
    if(typeof this.props.book.imageLinks === 'undefined' || typeof this.props.book.imageLinks.thumbnail === 'undefined') {
      thumbnail = "https://dummyimage.com/128x193/aaa/fff.jpg&text=Not+available"
    } else {
      thumbnail = this.props.book.imageLinks.thumbnail
    }

    //En caso de no haber autores
    if(typeof this.props.book.authors === 'undefined') {
      this.props.book.authors = []
    }

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={bookshelf} onChange={(event) => this.updateShelf(event.target.value)} >
                <option value="noValue" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.props.book.authors.map((author, index) => (
            <div key={index} className="book-authors">{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book
