import books from '../data/BooksData';
import Book from '../components/Book';

const Books = () => (
  <div className="container py-4">
    <div className="row gx-3">
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
  </div>
);

export default Books;
