import React, { useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import './AllPatients.css'
const AllPateints = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-sierra-17047.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <section className="dashboard-container">
             <h2 class='pl-5 text-dasboard-title'>All Patients</h2>
             <div className=" dashboard-box">
                 <AppointmentDataTable appointments={appointments} />
                
             </div>
             </section>

    );
};

export default AllPateints;