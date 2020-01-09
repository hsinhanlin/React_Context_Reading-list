import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'remove':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}

const BookContextProvider = (props) => {
    const [books, dispatch] = React.useReducer(
        BookReducer,
        [],
        () => {
            const localData = localStorage.getItem('books');
            return localData ? JSON.parse(localData) : []
        })

    React.useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;