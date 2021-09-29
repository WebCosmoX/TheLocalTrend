import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const UploadArtistImage = () => {
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
        formData.append('profile_image', image);
        const updatedArtist = await ArtistFinder.post(`/upload-image/${id}`, formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },

            });
        console.log({ image, formData, updatedArtist});
        history.push(`/admin/artists`);
    }

    return (
        <Fragment>

            <div className='container admin-artists-wrapper'>
                <h2>Upload Artist Image</h2>
                <Link className="btn btn-warning mt-2 mb-2" to={`/admin/artists/${id}/update`}>Go Back</Link>
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

export default UploadArtistImage;
