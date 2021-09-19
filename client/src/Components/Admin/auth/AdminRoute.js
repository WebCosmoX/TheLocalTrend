import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
    <Fragment>
        <Navbar />
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin/signin',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    </Fragment>
);

export default AdminRoute;