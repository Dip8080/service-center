import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
   
    return (
        <div className='py-4 w-50 ms-auto'>
            <h2 className=''> one more step . please click proceed .</h2>
            <div>
                <Link to='/Checkout' >
                    <button className='btn btn-primary '>proceed </button>
                </Link>
            </div>
        </div>
    );
};


export default ServiceDetails;
