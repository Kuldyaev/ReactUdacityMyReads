import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'

class BookShelf extends Component {
	static propTypes = {
		 books: PropTypes.array.isRequired,
        gbooks: PropTypes.array.isRequired,
	}
 
	render() {
        return(
        <div className="list-books">
            <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.header}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key={ book.id }>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`) }}></div>
                            <div className="book-shelf-changer">
                              <select 
                                defaultValue={ book.shelf }
                                onChange={e => this.props.onChangeBS(book, e.target.value, this.props.gbooks)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{ book.title}</div>
                          <div className="book-authors">{ Array.isArray(book.authors) ? book.authors.join(', '): '' }</div>
                        </div>
                      </li>
                    ))} 
                    </ol>
                  </div>
                </div>
              </div>
            <Link className="open-search" to='/search'></Link>
          </div>
		)
	}
}

export default BookShelf
