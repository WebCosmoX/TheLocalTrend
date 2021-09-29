import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const UpdateArtist = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async e => {
            const response = await ArtistFinder.get(`/${id}`);
            console.log(response.data.artist);
            setName(response.data.artist.name);
            setBio(response.data.artist.bio);
            setRole(response.data.artist.role);
        }
        fetchData();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const updateArtist = await ArtistFinder.put(`/${id}`, {
            name,
            bio,
            role
        });
        console.log(name);
        console.log(updateArtist);
        history.push('/admin/artists');
    }

    return (
        <div className='container admin-services-wrapper'>
            <h2>Artist</h2>

            <Link className="btn btn-warning mt-2 mb-2" to='/admin/artists'>Go Back</Link>
            <Link className="btn btn-warning m-2" to={`/admin/artists/${id}/upload-image`}>Upload Image</Link>

            <form>
                <div className="form-group mb-2">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label>Bio</label>
                    <input type="text" value={bio} onChange={e => setBio(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label>Role</label>
                    <input type="text" value={role} onChange={e => setRole(e.target.value)} className="form-control" />
                </div>
                <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2">Save</button>
            </form>
        </div>
    )
}

export default UpdateArtist;