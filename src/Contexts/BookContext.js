import { createContext, useContext, useState } from "react";

const createData = (id, name, auther, price) => {
  return { id, name, auther, price };
};

const defaultBooks = [
  createData(1, "The Hunger Games", "Suzanne Collins", 100.0),
  createData(2, "The Hunger Games", "Suzanne Collins", 200.0),
  createData(3, "The Hunger Games", "Suzanne Collins", 300.0),
];

const BookContext = createContext({});

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(defaultBooks);
  const [openBook, setOpenBook] = useState(false);
  const [editBook, setEditBook] = useState(null);

  const setBook = (book) => {
    if (!editBook) {
      setBooks([...books, book]);
    } else {
      const noneEditedCampaign = books.filter(
        (book) => book.id !== editBook.id
      );
      setBooks([...noneEditedCampaign, book]);
      setEditBook(null);
    }
    setOpenBook(false);
  };

  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const clearBook = () => {
    setEditBook(null);
    setOpenBook(false);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBook,
        openBook,
        setOpenBook,
        deleteBook,
        editBook,
        setEditBook,
        clearBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
