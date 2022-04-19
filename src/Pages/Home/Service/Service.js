import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Service = ({obj}) => {
    const {id , name, price , description , img} = obj ;
    const nevigate = useNavigate()
    const Handlebutton = id =>{
      nevigate(`/service/${id}`)
    }
    return (
        <div className='container'>
        <img src={img}className="card-img-top " alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h2 className="card-title">{price}</h2>
          <p className="card-text">{description}.</p>
        <button onClick={()=>Handlebutton(id)} className="btn btn-dark rounded text-success">click me</button>
        </div>
      </div>
    );
};

export default Service;