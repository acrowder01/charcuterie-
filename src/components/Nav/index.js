import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Charcuterie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Charcuterie Boards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Images</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#">Faq</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log In</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    );
}


export default Nav;
