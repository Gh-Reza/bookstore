import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Book.css';

const Book = ({
  id, genre, name, author, percentage, chapter, onRemove,
}) => (
  <div className="row border p-4 bg-white shadow">
    <div className="col col-6">
      <p className="text-muted fw-bold color--dark text--opacity">{genre}</p>
      <h2 className="mb-0 fw-bold book-title color--dark">{name}</h2>
      <p className="mb-2 color--lb">{author}</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <button type="button" className="cbtn ps-0 pe-0 color--lb">
            Comments
          </button>
        </li>
        <li className="list-inline-item">
          <button type="button" className="cbtn ps-0 pe-0 color--lb" onClick={() => onRemove(id)}>
            Remove
          </button>
        </li>
        <li className="list-inline-item">
          <button type="button" className="cbtn ps-0 pe-0 color--lb">
            Edit
          </button>
        </li>
      </ul>
    </div>
    <div className="col d-flex align-items-center p-2 px-5">
      <div className="row d-flex align-items-center border-0 border-end">
        <div className="col">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="col">
          <p className="mb-0 h2">
            {percentage}
            %
          </p>
          <p className="completed color--dark text--opacity">Completed</p>
        </div>
      </div>
    </div>
    <div className="col d-flex justify-content-center align-items-start flex-column">
      <p className="mb-0 text-uppercase color--dark text--opacity completed current-chapter">Current Chapter</p>
      <p className="chapter">{chapter}</p>
      <button type="button" className=" px-4 text-uppercase btn--update">Update prograss</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
