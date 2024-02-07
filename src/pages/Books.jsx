// import books from '../data/BooksData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { getAllBooks, removeBook } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const books = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (books.loading) {
    return (
      <div
        style={{
          height: '100vh',
        }}
        className="d-flex justify-content-center align-items-center w-100 h-100 bg-light"
      >
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
      </div>
    );
  }

  return books.length > 0 ? (
    <>
      <div className="container">
        <div className="row gx-3 my-4 ">
          {books.map((book) => (
            <div key={book.item_id} className="col col-12 mb-3 border-none">
              <Book
                id={book.item_id}
                genre={book.category}
                name={book.title}
                author={book.author}
                percentage={25}
                chapter="Chapter 1"
                onRemove={handleRemove}
              />
            </div>
          ))}
        </div>
        <AddBook />
      </div>
    </>
  ) : (
    <div className="container">
      <div className="row text-center">
        <div className="col">Empty</div>
      </div>
      <AddBook />
    </div>
  );
}

export default Books;
