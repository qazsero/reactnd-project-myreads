import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState({query: query})
    if(query !== ''){ this.props.searchAction(query) }
  }


  //Function that joins the shelter status to each book
  updateShelterToSearchResult = (res) => {
    let coincidence
    coincidence = this.props.books.filter((bo) => (bo.id === res.id))
    if(coincidence[0] != null) {
      res.shelf = coincidence[0].shelf
    }
    else {
      res.shelf = 'none'
    }
    return res
  }

  render(){


    /*
        The search results don't know about my personal library, I have to give
        my personal shelf for each book to the search results.
    */
    let searchLibraryResults
    if(Array.isArray(this.props.searchResults) ) {
      searchLibraryResults = this.props.searchResults.map((se) => (this.updateShelterToSearchResult(se)))
    } else {
      searchLibraryResults = []
    }


    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchLibraryResults.map((book) => (
              <Book key={book.id}  book={book} updateShelf={this.props.updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks
