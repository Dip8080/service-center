import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container ' id='services'>
            <h5 className='my-4 text-center'>Our services</h5>
            <div className='services-cont  '>
                {
                    services.map(x=><Service key={x.id} obj={x}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;