import React from 'react';
import Services from './Services';
import Artists from './Artists';

const Landing = () => {

    return (
        <div className='container admin-wrapper'>
            <div className="text-center font-weight-light display-1">Admin Portal</div>

            <Services />

            <Artists />

        </div>

    )
}

export default Landing;