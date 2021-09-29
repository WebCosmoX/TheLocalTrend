import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ServiceFinder from './apis/Service';

const Services = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await ServiceFinder.get('/', {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
                }
            });
            console.log({ data });
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
                services.filter(service => service._id !== id)
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>

            <div className="container admin-services-wrapper">
                <h2>Services</h2>
                <Link className="btn btn-warning mt-2 mb-2" to='/admin/services/add-service'>Add a new service</Link>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr className='bg-primary'>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {services?.length > 0 && services.map(service => (
                            <tr>
                                <td>{service.title}</td>
                                <td>{service.description}</td>
                                <td>
                                    {
                                        service.image && <a target='_blank' href={`https://www.thelocaltrendent.com/api/services/images/${service.image}`}>See Image</a>
                                    }

                                </td>
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
            </div>


        </Fragment>
    )
}

export default Services;