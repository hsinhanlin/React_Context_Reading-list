import React from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
    const { dispatch } = React.useContext(BookContext)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'add', book: {
                title,
                author
            }
        })
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="enter book title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="enter author name"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
            />
            <input type="submit" value="add book" />
        </form >
    )
}

export default NewBookForm
