import React from 'react';

const ServiceDetails = ({service}) => {
    const {name , img} = service;
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <div className="card-wrapper mb-2" style={{padding:'30px' , border: '1px solid #ddd'}}>
            <img style={{height:'50px'}} src={img} alt="" />
            <h5 className="service-title mt-3 mb-3">{name}</h5>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, nobis.</p>
            </div>
        </div>
    );
};

export default ServiceDetails;