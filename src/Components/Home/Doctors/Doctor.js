
import React, { useEffect, useState } from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://peaceful-sierra-17047.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    console.log(doctors);
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                     doctors.map(doctor =><DoctorDetails key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctor;