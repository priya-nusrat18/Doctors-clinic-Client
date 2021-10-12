import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../image/doctor.png'
import './MakeAppoinment.css'
const MakeAppoinment = () => {
    return (
       <section className="make-appoinment">
           <div className="container">
               <div className="row">
               <div className="col-md-5 col-sm-6 d-none d-md-block">
               <img className ="makeAppoinment-img" src={doctor} alt="" />
               </div>
               <div className="col-md-7 col-sm-6 col-12 appoinment-wrap text-white py-5">
                        <h5 className="text-primary text-uppercase">
                            Appoinment
                        </h5>
                        <h1 className="my-4">Make An Appoinmant <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At error repellendus nobis impedit placeat enim qui debitis suscipit quaerat quae?</p>
                        <Link to="/doctor/appointment" className="btn-brand">
                    MAKE APPOINMENT
                    </Link>
               </div>
               </div>
           </div>
       </section>
    );
};

export default MakeAppoinment;