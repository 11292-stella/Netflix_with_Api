import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/netflix_logo.png"
            alt="logo"
            className="img-fluid"
            style={{ width: "120px", height: "auto" }}
          />
        </a>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/tvshow" className="navbar-brand text-light">
                TVshow
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="navbar-brand text-light">
                Profile
              </Link>
            </li>
            <li className="nav-item dropdown">
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/mylist" className="text-light">
                    My List
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Movies
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button className="btn btn-dark">
              <i className="bi bi-search"></i>
            </button>
            <button className="btn btn-dark">Kids</button>
            <button className="btn btn-dark">
              <i className="bi bi-bell"></i>
            </button>
            <a className="navbar-brand" href="#">
              <img
                src="/kids_icon.png"
                alt="avatar"
                className="img-fluid"
                style={{ width: "50px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MyNav
