import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-end">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin">Admin Portal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/admin' ? 'active' : null}`} to='/admin'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/admin/services' ? 'active' : null}`} to="/admin/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/admin/artists' ? 'active' : null}`} to="/admin/artists">Artists</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;