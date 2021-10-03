import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ServiceFinder from './apis/Service';

const UpdateService = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async e => {
            const response = await ServiceFinder.get(`/${id}`);
            console.log(response.data.service);
            setTitle(response.data.service.title);
            setDescription(response.data.service.description);
        }
        fetchData();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const updatedService = await ServiceFinder.put(`/${id}`, {
            title,
            description
        });
        console.log(title);
        console.log(updatedService);
        history.push('/admin/services');
    }

    return (
        <div className='container admin-services-wrapper'>

            <h2>Service</h2>
            <Link className="btn btn-warning mt-2 mb-2" to='/admin/services'>Go Back</Link>
            <Link className="btn btn-warning m-2" to={`/admin/services/${id}/upload-image`}>Upload Image</Link>
            <form>
                <div className="form-group mb-2">
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label>Description</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                </div>
                <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2">Save</button>
            </form>
        </div>
        
    )
}

export default UpdateService;