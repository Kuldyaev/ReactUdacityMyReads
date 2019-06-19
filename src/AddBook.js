import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {
	constructor(props){
		super(props);
		this.state={
            query: '',
            sbooks:[],
		};
	}
    
  
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        if (query){
        BooksAPI.search(query)
            .then((books) => {
               if (books.length >0){this.setState({ sbooks: books })}
               else {this.setState({ sbooks: [] })}
        })} else this.setState({ sbooks: [] })   
    }
    
    clearQuery = () => {
        this.updateQuery('')
    }
 
	
	render() {
        const { query, sbooks } = this.state
        const { books } = this.props
        
		return (
        	<div className='booklist'>
                <div className='list-books-top'>
                    <Link to='/' className='back-button'></Link>
                    <input
                        className='search-books'
                        type='text'
                        placeholder='Search request'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <button className='showAll' onClick={this.clearQuery}>
                        Clean request form
                    </button>
                </div>
                
                { (query !== '') && (sbooks.length !== 0) &&
                     <BookShelf 
                        books={ sbooks } 
                        gbooks = { books }
                        onChangeBS={ this.props.onChangeBS } 
                        header = 'Books' />
               }
               { (query !== '') && (sbooks.length === 0) &&
                    <div className='booklist'>
                        <div id="booklist-top">
                            <div id='notfound'>
                                <h2>Sorry, no books matched this request</h2>
                            </div>
                        </div>
                    </div>
               }
               
               { query === '' && 
                    <div className='booklist'>
                        <div id="booklist-top">
                            <div id='notfound'>
                                <h2>Please change search request </h2>
                            </div>
                        </div>
                    </div>
               }
               
               
 			</div>
            
          
		)
	}
}

export default AddBook
