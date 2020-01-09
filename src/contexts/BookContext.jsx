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
            return [state.filter(book => book.id !== action.id)]
        default:
            return state
    }

}

const BookContextProvider = (props) => {
    const [books, dispatch] = React.useReducer(
        BookReducer,
        []
    )

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;