import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const CreateArtist = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');
    const [spotifyURL, setSpotifyURL] = useState('');
    const [youtubeURL, setYoutubeURL] = useState('');
    const [fbURL, setFbURL] = useState('');
    const [instaURL, setInstaURL] = useState('');
    const [twitterURL, setTwitterURL] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const newArtist = await ArtistFinder.post('/add-artist', {
            name,
            bio,
            role,
            spotifyURL,
            youtubeURL,
            fbURL,
            instaURL,
            twitterURL
        });
        console.log(name);
        console.log(newArtist);
        history.push('/admin/artists');
    }

    return (
        <Fragment>

            <div className='container admin-artists-wrapper'>

                <Link className="btn btn-warning mt-2 mb-2" to='/admin/artists'>Go Back</Link>

                <h2>Add a new artist</h2>
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

                    <div className="form-group mb-2">
                        <label>Spotify</label>
                        <input type="text" value={spotifyURL} onChange={e => setSpotifyURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Youtube</label>
                        <input type="text" value={youtubeURL} onChange={e => setYoutubeURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Facebook</label>
                        <input type="text" value={fbURL} onChange={e => setFbURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Instagram</label>
                        <input type="text" value={instaURL} onChange={e => setInstaURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Twitter</label>
                        <input type="text" value={twitterURL} onChange={e => setTwitterURL(e.target.value)} className="form-control" />
                    </div>

                    <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2 mb-2">Add Artist</button>
                </form>
            </div>

        </Fragment>
    )
}

export default CreateArtist;