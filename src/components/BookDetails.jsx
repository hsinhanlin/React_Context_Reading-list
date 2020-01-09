import React from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { dispatch } = React.useContext(BookContext)

    return (
        <li onClick={() => dispatch({ type: 'remove', id: book.id })}>
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
        </li >
    )
}

export default BookDetails
