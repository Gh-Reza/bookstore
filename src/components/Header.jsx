import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container p-3">
    <div className="row">
      <div className="col row align-items-center">
        <h1 className="h2 text-primary col fw-bold">Bookstore CMS</h1>
        <nav className="col">
          <ul className="list-inline p-0 m-0 d-flex align-items-center">
            <li className="list-inline-item p-1 border-bottom border-2"><Link className="text-decoration-none text-muted" to="/">Home</Link></li>
            <li className="list-inline-item p-1 border-bottom border-2"><Link className="text-decoration-none text-muted" to="/catagories">Catagories</Link></li>
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
