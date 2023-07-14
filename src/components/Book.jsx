import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Book.css';

const Book = ({
  genre, name, author, percentage, chapter,
}) => (
  <div className="row border p-3 bg-white shadow">
    <div className="col col-6">
      <p className="text-muted fw-bold genre">{genre}</p>
      <h2 className="mb-0 h4 fw-bold">{name}</h2>
      <p className="mb-2 text-info">{author}</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <button type="button" className="btn ps-0 pe-0 text-info">
            Comments
          </button>
        </li>
        <li className="list-inline-item">
          <button type="button" className="btn ps-0 pe-0 text-info">
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
    <div className="col d-flex align-items-center">
      <div className="row d-flex align-items-center">
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
      <p className="mb-0 text-uppercase completed">Current Chapter</p>
      <p className="chapter">{chapter}</p>
      <button type="button" className="btn btn-primary px-4">Update prograss</button>
    </div>
  </div>
);

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
