import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ServiceFinder from './apis/Service';

const CreateService = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const newService = await ServiceFinder.post('/add-service', {
            title,
            description
        });
        console.log(title);
        console.log(newService);
        history.push('/admin/services');
    }

    return (
        <div>
            <div className='container admin-services-wrapper'>

            <Link className="btn btn-warning mt-2 mb-2" to='/admin/services'>Go Back</Link>

                <h2>Add a new service</h2>
                <form>
                    <div className="form-group mb-2">
                        <label>Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <label>Description</label>
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                    </div>
                    <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2 mb-2">Add Service</button>
                </form>
            </div>


        </div>
    )
}

export default CreateService;