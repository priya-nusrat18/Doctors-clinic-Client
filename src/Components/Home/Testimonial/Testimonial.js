import React from 'react';

const Testimonial = ({testimonial}) => {
    const {quote ,from ,  name , img} = testimonial;
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card py-4 ms-3 shadow-sm mb-2">
        <div className="card-body">
            <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-3" src={img} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{from}</p>
            </div>
        </div>
   </div>
        </div>
    );
};

export default Testimonial;