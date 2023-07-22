import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((store) => store.books);
  const itemId = books.length;
  const dispatch = useDispatch();
  const hundelSubmitEvent = (e) => {
    e.preventDefault();
    e.target.reset();
    const newBook = {
      item_id: itemId,
      title,
      author,
      category: 'Nonfiction',
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="container border-top border-2 py-4 pb-5 mb-5">
      <form onSubmit={hundelSubmitEvent} className="border border p-5 bg-white shadow">
        <h3 className="fw-bold text-uppercase color--dark text--opacity">Add new book</h3>
        <div className="row p-3 ps-0">
          <input
            className="border rounded col col-6 me-3 w-5 border-muted"
            type="text"
            name="title"
            placeholder="Book title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border border-muted rounded col me-3 "
            type="text"
            name="author"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="border-0 rounded col me-0 btn btn-primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
