import React from 'react';
import chair from '../../../image/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                    <h1 style={{color: '#3a4256'}}>Your New Smiles <br /> Start Here.</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum, rerum ullam sint minima dolore.
                    </p>
                    <button className="btn-primary"> GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;