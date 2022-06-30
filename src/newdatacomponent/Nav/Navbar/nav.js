import { Link } from "react-router-dom";

import './nav.css';

const Nav = () => {
  return (
    <div className="container-fluid nav-bg" >
      <div className="row">
        <div className="col-10 mx-auto">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to='/about'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to='/services'>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active_class" className="nav-link active" to='/contact'>Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active_class" className="nav-link active" to='/user'>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active_class" className="nav-link active" to='/cal'>Calculator</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active_class" className="nav-link active" to='/temp'>Temp</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active_class" className="nav-link active" to='/counter'>Counter</Link>
                  </li>

                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default Nav;