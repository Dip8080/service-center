import React from 'react';

const Service = ({obj}) => {
    const {id , name, price , description , img} = obj ;
    return (
        <div className='container'>
        <img src={img}className="card-img-top " alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h2 className="card-title">{price}</h2>
          <p className="card-text">{description}.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
};

export default Service;