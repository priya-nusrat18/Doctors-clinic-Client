import React from 'react';
import doctor from '../../../image/doctor.png'
import './MakeAppoinment.css'
const MakeAppoinment = () => {
    return (
       <section className="make-appoinment">
           <div className="container">
               <div className="row">
               <div className="col-md-5 d-none d-md-block">
               <img src={doctor} alt="" />
               </div>
               <div className="col-md-7 appoinment-wrap text-white py-5">
                        <h5 className="text-primary text-uppercase">
                            Appoinment
                        </h5>
                        <h1 className="my-4">Make An Appoinmant <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At error repellendus nobis impedit placeat enim qui debitis suscipit quaerat quae?</p>
                        <button className="btn-primary">Appoinment</button>
               </div>
               </div>
           </div>
       </section>
    );
};

export default MakeAppoinment;