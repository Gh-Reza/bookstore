import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Book.css';

const Book = ({
  id, genre, name, author, percentage, chapter, onRemove,
}) => (
  <div className="row border p-4 bg-white shadow">
    <div className="col col-6">
      <p className="text-muted fw-bold genre">{genre}</p>
      <h2 className="mb-0 h4 fw-bold book-title">{name}</h2>
      <p className="mb-2 text-info">{author}</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <button type="button" className="btn ps-0 pe-0 text-info">
            Comments
          </button>
        </li>
        <li className="list-inline-item">
          <button type="button" className="btn ps-0 pe-0 text-info" onClick={() => onRemove(id)}>
            Remove
          </button>
        </li>
        <li className="list-inline-item">
          <button type="button" className="btn ps-0 pe-0 text-info">
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
          <p className="completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="col d-flex justify-content-center align-items-start flex-column">
      <p className="mb-0 text-uppercase completed current-chapter">Current Chapter</p>
      <p className="chapter">{chapter}</p>
      <button type="button" className="btn btn-primary px-4 text-uppercase">Update prograss</button>
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
