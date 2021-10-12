import React from 'react';
import fluoride from '../../../image/fluoride.png'
import cavity from '../../../image/cavity.png'
import whitening from '../../../image/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            name:'Fluoride Treatment',
            img:fluoride
        },
        {
            name:'Cavity Fillings',
            img:cavity
        },
        {
            name:'Teeth Whitening',
            img:whitening
        }
    ]
    return (
        <section className=" services-container mb-4 mt-5">
            
            <div className="text-center section-header">
                <h4 className="" style={{color:'#1cc7c1'}}>OUR SERVICES</h4>
                <h2 className="" style={{color:'#3a4256'}}>Service We Provides</h2>
            </div>
            <div className='d-flex justify-content-center'>
          <div className="row w-75 mt-5 pt-5"> 
          {
            serviceData.map(service => <ServiceDetails service={service} />)
          }
          </div>
      </div>
        </section>
    );
};

export default Services;