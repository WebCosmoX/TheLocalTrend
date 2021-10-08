import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const UpdateArtist = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');
    const [spotifyURL, setSpotifyURL] = useState('');
    const [youtubeURL, setYoutubeURL] = useState('');
    const [fbURL, setFbURL] = useState('');
    const [instaURL, setInstaURL] = useState('');
    const [twitterURL, setTwitterURL] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async e => {
            const response = await ArtistFinder.get(`/${id}`);
            console.log(response.data.artist);
            setName(response.data.artist.name);
            setBio(response.data.artist.bio);
            setRole(response.data.artist.role);
            setSpotifyURL(response.data.artist.spotify_url);
            setYoutubeURL(response.data.artist.youtube_url);
            setFbURL(response.data.artist.fb_url);
            setInstaURL(response.data.artist.insta_url);
            setTwitterURL(response.data.artist.twitter_url);
        }
        fetchData();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const updateArtist = await ArtistFinder.put(`/${id}`, {
            name,
            bio,
            role,
            spotify_url: spotifyURL,
            youtube_url: youtubeURL,
            fb_url: fbURL,
            insta_url: instaURL,
            twitter_url: twitterURL
        });

        console.log({
            spotifyURL,
            youtubeURL,
            fbURL,
            instaURL,
            twitterURL
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
            <Link className="btn btn-warning m-2" to={`/admin/artists/${id}/add-song`}>Add Songs</Link>

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

                <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2">Save</button>
            </form>
        </div>
    )
}

export default UpdateArtist;