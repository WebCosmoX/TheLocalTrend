import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/admin">Admin Portal</Link>
                    <button class="navbar-toggler" type="button" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li class="nav-item">
                                <Link class="nav-link active" to='/admin'>Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/admin/services">Services</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/admin/artists">Artists</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;