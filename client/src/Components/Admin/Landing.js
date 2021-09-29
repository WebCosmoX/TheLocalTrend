import React, { useState, useEffect } from 'react';
import Services from './Services';
import Artists from './Artists';

import { Link, useHistory } from 'react-router-dom';

import ServiceFinder from './apis/Service';

const Landing = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await ServiceFinder.get('/');
            console.log({ data });
            setServices(data.data.services);
        }

        fetchServices();
    }, []);

    return (
        <div className='container admin-wrapper'>
            <div className="text-center font-weight-light display-1">Admin Portal</div>

            <div class="d-grid gap-2">
                <Link className="btn btn-warning mt-5 mb-2 btn-lg" to='/admin/services'>Service Page</Link>
                <Link className="btn btn-warning mt-5 mb-2 btn-lg" to='/admin/artists'>Artist Page</Link>
            </div>
        </div>

    )
}

export default Landing;