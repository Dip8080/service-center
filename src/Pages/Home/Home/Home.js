import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-dark py-4 my-4 shadow'>Iron-skull Fitness</h1>
            <Banner></Banner>
            <Services></Services>

        </div>
    );
};

export default Home;