import React, { Component }  from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import AddBook from './AddBook'
import NotFound from './NotFound'

class  App  extends Component {
	constructor(props){
        super(props);
        this.state = { 
            books: [],
            nbooks: [],
            };
        this.changeBookShelf=this.changeBookShelf.bind(this);
    }    
	
    upState() {
        BooksAPI.getAll()
         .then(books => {
                this.setState({ books })
        })
    }  
	
    componentDidMount() {
       this.upState()
    }
    
   
    changeBookShelf(book, value, books){
        if (books.indexOf(book) === -1){this.setState({ nbooks : book })}
        else {this.setState({ nbooks : (books.splice(books.indexOf(book),1))})}
        BooksAPI.update(book, value)
        book.shelf = value;
        books.push(book);
        this.setState({ books })
    }
	
	render(){
		return (
			<div className="App">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
				<Switch>
                    <Route exact path='/' render ={() =>(
                        <BooksList
                                books={this.state.books}
                                onChangeBS={ this.changeBookShelf }
                        />
                    )} />
                    <Route exact path='/search'  render={( {history })=>(
                        <AddBook
                            books={this.state.books}
                            onChangeBS={ this.changeBookShelf }
                        />
                    )} />
                    <Route component = { NotFound } />
                </Switch>
			</div>
		);}
}

	
export default App
