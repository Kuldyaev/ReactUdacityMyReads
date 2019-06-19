import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () =>{
	return (
		<div className='booklist'>
			<div id="booklist-top">
				<Link className='close-addbook'	to='/'>Close page</Link>
                <div id='notfound'>
                    <h2>Sorry, this page is not exist</h2>
                </div>
			</div>
		</div>
	)
}
export default NotFound
