import React from 'react';
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import NewBookForm from './components/NewBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
