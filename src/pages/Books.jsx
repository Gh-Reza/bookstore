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

  return (
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
  );
}

export default Books;
