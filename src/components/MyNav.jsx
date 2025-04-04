import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="public/netflix_logo.png"
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Tv Shows
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recently Added
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Movies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Recently Added
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My list
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                My list
              </a>
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
                src="public/kids_icon.png"
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
