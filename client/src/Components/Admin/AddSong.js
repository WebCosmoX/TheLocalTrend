import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const AddSong = () => {
    const history = useHistory();
    const [songName, setSongName] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [spotifyURL, setSpotifyURL] = useState('');
    const [youtubeURL, setYoutubeURL] = useState('');
    const [songImage, setSongImage] = useState('');
    const { id } = useParams();

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song_name', songName);
        formData.append('album_name', albumName);
        formData.append('song_spotify_url', spotifyURL);
        formData.append('song_youtube_url', youtubeURL);
        formData.append('song_image', songImage);

        console.log({ formData });

        const addedSong = await ArtistFinder.put(`/${id}/add-song`, formData, {
            headers: {
                "Content-type": "multipart/form-data",
            }
        });
        console.log({ formData, addedSong });
        history.push(`/admin/artists`);
    }

    const handleChange = e => {
        const imageFile = e.target.files[0];
        console.log(imageFile);
        setSongImage(imageFile);
    }

    return (
        <Fragment>

            <div className='container admin-artists-wrapper'>
                <h2>Add Song</h2>
                <Link className="btn btn-warning mt-2 mb-2" to={`/admin/artists/${id}/update`}>Go Back</Link>
                <form>
                    <div className="form-group mb-2">
                        <label>Song Name</label>
                        <input type="text" value={songName} onChange={e => setSongName(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Album Name</label>
                        <input type="text" value={albumName} onChange={e => setAlbumName(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Spotify URL</label>
                        <input type="text" value={spotifyURL} onChange={e => setSpotifyURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Youtube URL</label>
                        <input type="text" value={youtubeURL} onChange={e => setYoutubeURL(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Song Image</label>
                        <input type="file" className="form-control" onChange={handleChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit} className="btn btn-primary mt-2 mb-2">Save</button>
                </form>
            </div>

        </Fragment>
    )
}

export default AddSong;
