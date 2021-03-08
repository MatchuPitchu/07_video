import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import React Bootstrap Icons
import { PlayBtn } from 'react-bootstrap-icons';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="./">
            <PlayBtn color="#fff" size={"2em"} />
          </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-item" activeClassName='active' to="./video">Video</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item" activeClassName='active' to="./about">About</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search a Video" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
      </div>
    )
}

export default Navbar;
