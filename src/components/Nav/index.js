import { useContext } from 'react';
//importing components
import { Link } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

const Nav = () => {
  const user = useContext(UserContext)
  console.log('nav', user)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Charcuterie</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Charcuterie_Boards">Charcuterie Boards</Link>
            </li>
            {
              user
                ?
                <li className="nav-item">
                  <Link className="nav-link" to="login">Login</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="favorites">Favorites</Link>
                </li>
            }



            {/* <li className="nav-item">
          <Link className="nav-link" to="">Images</Link>
        </li>
          */}

            <li className="nav-item">
          <Link className="nav-link" to="Faq">FunStuff</Link>
        </li>






        
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Nav;
