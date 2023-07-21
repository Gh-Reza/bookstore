import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container p-3">
    <div className="row">
      <div className="col row align-items-center">
        <h1 className="h2 text-primary col fw-bold">Bookstore CMS</h1>
        <nav className="col">
          <ul className="list-inline p-0 m-0 d-flex align-items-center">
            <li className="list-inline-item p-1 text-uppercase"><Link className="text-decoration-none text-muted" to="/">Home</Link></li>
            <li className="list-inline-item p-1 text-uppercase"><Link className="text-decoration-none text-muted" to="/catagories">Catagories</Link></li>
          </ul>
        </nav>
      </div>
      <div className="col text-end d-flex align-items-center justify-content-end">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="#0290ff" /></svg>
      </div>
    </div>
  </div>
);

export default Header;
