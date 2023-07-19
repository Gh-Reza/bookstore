import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((store) => store.books);
  const itemId = books[books.length - 1].item_id + 1;
  const dispatch = useDispatch();
  const hundelSubmitEvent = (e) => {
    e.preventDefault();
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
      <form onSubmit={hundelSubmitEvent}>
        <div className="row">
          <input
            className="border-0 rounded col col-6 me-3 w-5"
            type="text"
            name="title"
            placeholder="Book title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border-0 rounded col me-3"
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
