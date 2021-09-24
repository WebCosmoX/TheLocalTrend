import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ServiceFinder from './apis/Service';

const Landing = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await axios.get('http://localhost:5000/api/services');
            console.log(data.data.services);
            setServices(data.data.services);
        }
        fetchServices();
    }, []);

    const updateService = async (e, id) => {
        e.stopPropagation();
        history.push(`/admin/services/${id}/update`);
    }

    const deleteService = async (e, id) => {
        e.stopPropagation();
        try {
            await ServiceFinder.delete(`/${id}`);
            setServices(
                services.filter(service => service._id != id)
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='container admin-wrapper'>
            <div className="text-center font-weight-light display-1">Admin Portal</div>

            <h2>Services</h2>
            <table class="table table-hover table-dark table-striped">
                <thead>
                    <tr className='bg-primary'>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {services.length > 0 && services.map(service => (
                        <tr>
                            <td>{service.title}</td>
                            <td>{service.description}</td>
                            <td>
                                <button
                                    className="btn btn-dark"
                                    onClick={e => updateService(e, service._id)}
                                >Edit</button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={e => deleteService(e, service._id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>


            <h2>Artists</h2>


        </div>

    )
}

export default Landing;