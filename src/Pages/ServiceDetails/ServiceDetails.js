import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h2>service details page {serviceId}</h2>
           
            <div>
                <Link to='/Checkout' >
                    <button className='btn btn-primary'>proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
