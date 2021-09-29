import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArtistFinder from './apis/Artist';

const Artists = () => {
    const history = useHistory();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchArtists = async () => {
            const data = await ArtistFinder.get('/');
            console.log({ data });
            setArtists(data.data.artists);
        }

        fetchArtists();
    }, []);

    const updateArtist = async (e, id) => {
        e.stopPropagation();
        history.push(`/admin/artists/${id}/update`);
    }

    const deleteArtist = async (e, id) => {
        e.stopPropagation();
        try {
            await ArtistFinder.delete(`/${id}`);
            setArtists(
                artists.filter(artist => artist._id !== id)
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>


            <div className="container admin-artists-wrapper">

                <h2>Artists</h2>
                <Link className="btn btn-warning mt-2 mb-2" to='/admin/artists/add-artist'>Add a new artist</Link>

                <table class="table table-hover table-dark table-striped">
                    <thead>
                        <tr className='bg-primary'>
                            <th scope='col'>Name</th>
                            <th scope='col'>Bio</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {artists?.length > 0 && artists.map(artist => (
                            <tr>
                                <td>{artist.name}</td>
                                <td>{artist.bio}</td>
                                <td>{artist.role}</td>
                                <td>
                                    {
                                        artist.profile_image && <a target='_blank' href={`https://www.thelocaltrendent.com/api/artists/images/${artist.profile_image}`}>See Image</a>
                                    }

                                </td>
                                <td>
                                    <button
                                        className="btn btn-dark"
                                        onClick={e => updateArtist(e, artist._id)}
                                    >Edit</button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={e => deleteArtist(e, artist._id)}
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

export default Artists;