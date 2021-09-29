import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ServiceFinder from './apis/Service';

const UploadServiceImage = () => {
    const history = useHistory();
    const [image, setImage] = useState('');
    const { id } = useParams();

    const handleChange = e => {
        const imageFile = e.target.files[0];
        console.log(imageFile);
        setImage(imageFile);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        const updatedService = await ServiceFinder.post(`/upload-image/${id}`, formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },

            });
        console.log({ image, formData, updatedService});
        history.push(`/admin/services/${id}/update`);
    }

    return (
        <Fragment>

            <div className='container admin-services-wrapper'>
                <h2>Upload Service Image</h2>
                <Link className="btn btn-warning mt-2 mb-2" to={`/admin/services/${id}/update`}>Go Back</Link>
                <form>
                    <div className="form-group mb-2">
                        <label>Image</label>
                        <input type="file" className="form-control" onChange={handleChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2 mb-2">Save</button>
                </form>
            </div>

        </Fragment>
    )
}

export default UploadServiceImage;
