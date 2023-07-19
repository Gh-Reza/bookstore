// import books from '../data/BooksData';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const books = useSelector((store) => store.books);
  return (
    <>
      <div className="container">
        <div className="row gx-3 my-4 ">
          {books.map((book) => (
            <div key={book.id} className="col col-12 mb-3 border-none">
              <Book
                genre={book.category}
                name={book.title}
                author={book.author}
                percentage={25}
                chapter="Chapter 1"
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
