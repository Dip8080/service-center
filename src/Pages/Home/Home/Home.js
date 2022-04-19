import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-white-50 py-4 my-4 shadow'>Iron-skull Fitness</h1>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>

        </div>
    );
};

export default Home;