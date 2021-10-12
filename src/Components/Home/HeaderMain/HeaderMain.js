
import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../image/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center header-main-section">
            <div className="col-md-4 banner-content offset-md-1 col-sm-6 col-12">
                    <h1 style={{color: '#3a4256'}}>Your New Smiles <br /> Start Here.</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum, rerum ullam sint minima dolore.
                    </p>
                   
                    <Link to="/doctor/appointment" className="btn-brand">
                    GET APPOINMENT
                    </Link>
            </div>
            <div className="col-md-6 col-sm-6 ">
                <img src={chair} alt="" className="img-fluid header-main-img" />
            </div>
        </main>
    );
};

export default HeaderMain;