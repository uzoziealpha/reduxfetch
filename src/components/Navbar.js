import React from 'react';

const Navbar = () => {
  return (
    <div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a>
            <img src='ergon.png' alt="pic" className='img-fluid' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Our solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;