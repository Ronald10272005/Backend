import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const books = await bookModel.fetchAllBooks();
  return books;
}

export const createBooks = async (books) => {
  const bookId = await bookModel.insert(books);
  return bookId;
}

export const updateBook = async (books) => {
  const updatedBook = await bookModel.update(books);
  return updatedBook;
}

export const deleteBook = async (id) => {
  const deletedBook = await bookModel.remove(id);
  return deletedBook;
} 