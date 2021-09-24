import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ArtistFinder from './apis/Service';

const UpdateArtist = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async e => {
            const response = await ArtistFinder.get(`/${id}`);
            console.log(response.data);
        }
        fetchData();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const updateArtist = await ArtistFinder.put(`/${id}`, {
            name,
            bio
        });
        console.log(name);
        console.log(updateArtist);
        history.push('/admin');
    }

    return (
        <div>
            <h2>Artist</h2>
            <form>
                <div className="form-group mb-2">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label>Bio</label>
                    <input type="text" value={bio} onChange={e => setBio(e.target.value)} className="form-control" />
                </div>
                <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2">Save</button>
            </form>
        </div>
    )
}

export default UpdateArtist;