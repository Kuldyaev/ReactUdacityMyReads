import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import './App.css'

class BooksList extends Component {
    static propTypes = {
		books: PropTypes.array.isRequired,
	}
    
	render() {
        
        const rBooks = this.props.books.filter(function(book) {
							return book.shelf === 'currentlyReading';
						})
		const tBooks = this.props.books.filter(function(book) {
							return book.shelf === 'wantToRead';
						})		
		const dBooks = this.props.books.filter(function(book) {
							return book.shelf === 'read';
                        }) 
    
		return(
        <div className="list-books">
            
            {(rBooks.length !== 0) && 
                <BookShelf 
                    books={ rBooks }
                    gbooks = { this.props.books }
                    onChangeBS={ this.props.onChangeBS } 
                    header = 'Currently Reading' />
            }
            
            
            {(tBooks.length !== 0) && 
                <BookShelf 
                    books={ tBooks } 
                    gbooks = { this.props.books }
                    onChangeBS={ this.props.onChangeBS } 
                    header = 'Want to Read' />}
            
            
            {(dBooks.length !== 0) && 
                <BookShelf 
                books={ dBooks }
                gbooks = { this.props.books }                
                onChangeBS={ this.props.onChangeBS } 
                header = 'Read' />}
            
            <Link className="open-search" to='/search'></Link>
          </div>
		)
	}
}

export default BooksList
