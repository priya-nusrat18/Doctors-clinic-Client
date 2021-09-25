import React from 'react';

import wilson from '../../../image/Ellipse 1.png'
import ema from '../../../image/Ellipse 2.png'
import aliza from '../../../image/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';
import  './Testimonials.css'

const Testimonials = () => {
    const TestimonialsData =[
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.',
            name:'Wilson',
            img: wilson,
            from : 'California',
        },
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.',
            name:'Wilson',
            img: ema,
            from :'New-York',
        },
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.',
            name:'Wilson',
            img: aliza,
            from : 'Florida',
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck d-flex  mt-5">
                    {
                        TestimonialsData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;