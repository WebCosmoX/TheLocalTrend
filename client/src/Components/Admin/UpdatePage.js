import React, { Fragment } from 'react';
import UpdateArtist from './UpdateArtist';
import UpdateService from './UpdateService';

const UpdatePage = () => {
    return (
        <Fragment>
            <div className='container'>
                <h1 className="text-center">Update Page</h1>
                <UpdateService />
                <UpdateArtist />
            </div>
        </Fragment>
    )
}

export default UpdatePage;