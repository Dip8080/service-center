import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
   
    return (
        <div className='container py-4 ms-auto'>
            <h2 className='text-center'> one more step . click proceed to continue.</h2>
            <div className='flex justify-center'>
                <Link to='/Checkout' >
                    <button className='btn btn-primary w-100'>proceed </button>
                </Link>
            </div>
        </div>
    );
};


export default ServiceDetails;
