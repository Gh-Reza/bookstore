import books from '../data/BooksData';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => (
  <div className="container">
    <div className="row gx-3 my-4 ">
      {books.map((book) => (
        <div key={book.id} className="col col-12 mb-3 border-none">
          <Book
            genre={book.genre}
            name={book.title}
            author={book.author}
            percentage={book.percentage}
            chapter={book.chapter}
          />
        </div>
      ))}
    </div>
    <AddBook />
  </div>
);

export default Books;
