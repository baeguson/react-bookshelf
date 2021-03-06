// @flow
import React from 'react';
import BooksGrid from './BooksGrid';
import type { Book, Shelf } from './flowtypes';

export const parseShelf = (s: string): Shelf => {
  switch (s) {
    case 'currentlyReading':
      return 'Reading';
    case 'read':
      return 'Read';
    case 'wantToRead':
      return 'Want';
    default:
      return 'None';
  }
};
export const serializeShelf = (s: Shelf): string => {
  switch (s) {
    case 'Reading':
      return 'currentlyReading';
    case 'Read':
      return 'read';
    case 'Want':
      return 'wantToRead';
    case 'None':
      return 'none';
    default:
      return 'none';
  }
};

export const shelfName = (name: Shelf): string => {
  switch (name) {
    case 'Reading':
      return 'Currently Reading';
    case 'Read':
      return 'Already Read';
    case 'Want':
      return 'Want to read';
    default:
      return '';
  }
};

type Props = {
  bookList: Array<Book>,
  list: Shelf,
  onMarkBook: (Event, Book) => void
};

const BookShelf = (props: Props) => {
  const { bookList, list, onMarkBook } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelfName(list)}
      </h2>
      <div className="bookshelf-books">
        <BooksGrid bookList={bookList} onMarkBook={onMarkBook} />
      </div>
    </div>
  );
};

export default BookShelf;
