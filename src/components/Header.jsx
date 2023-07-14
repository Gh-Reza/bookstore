import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container p-4">
    <div className="row">
      <div className="col row align-items-center">
        <h1 className="h2 text-primary col fw-bold">Bookstore CMS</h1>
        <nav className="col">
          <ul className="list-inline p-0">
            <li className="list-inline-item"><Link className="text-decoration-none text-muted" to="/">Home</Link></li>
            <li className="list-inline-item"><Link className="text-decoration-none text-muted" to="/catagories">Catagories</Link></li>
          </ul>
        </nav>
      </div>
      <div className="col text-end">
        👨‍💼
      </div>
    </div>
  </div>
);

export default Header;
