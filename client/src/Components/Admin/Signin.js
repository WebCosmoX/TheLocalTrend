import React, { useState, useEffect, Fragment } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Auth from './apis/Auth'

const Signin = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const [redirectUser, setRedirectUser] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            history.push('/admin');
        }
        console.log(loggedInUser);
    }, []);

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const user = { username, password };
            const response = await Auth.post(
                '/',
                user
            );
            console.log({ url: Auth });
            console.log(response.data.result);
            setUser(response.data.result.username);
            localStorage.setItem('user', response.data.result.username);
            setRedirectUser(true);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    const redirectUserToAdminPortal = () => {
        if (redirectUser) {
            return <Redirect to='/admin' />
        }
    }

    return (

        <Fragment>
            {/* {redirectUserToAdminPortal()} */}

            <div className='mt-5 mb-5'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            className="form-control"
                            type="text"
                            value={username}
                            placeholder="Enter a username"
                            onChange={({ target }) => setUsername(target.value)}

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            placeholder="Enter a password"
                            onChange={({ target }) => setPassword(target.value)} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                    >Login</button>
                </form>
            </div>
        </Fragment>

    )
}

export default Signin;