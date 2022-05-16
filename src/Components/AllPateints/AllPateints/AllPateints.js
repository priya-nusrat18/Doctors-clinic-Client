import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import './AllPatients.css';
const AllPateints = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portall.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <section className="container oveflow-hidden">
             <h2 class='pl-5 text-dasboard-title'>All Patients</h2>
             <div className="">
                 <AppointmentDataTable appointments={appointments} />             
             </div>
             </section>

    );
};

export default AllPateints;