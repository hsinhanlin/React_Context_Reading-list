import React from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = React.useContext(BookContext)
    return (
        <div className="navBar">
            <h1> Reading List</h1>
            <p>Currently you have {books.length} books</p>
        </div>
    )
}

export default Navbar