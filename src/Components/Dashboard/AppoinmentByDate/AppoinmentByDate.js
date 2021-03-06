import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';


const AppoinmentByDate = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { email } = loggedInUser;
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appoinments, setAppoinments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://doctors-portall.herokuapp.com/appoinmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: email })
        })
            .then(res => res.json())
            .then(data => setAppoinments(data))

    }, [selectedDate])
    return (
        <section className="container oveflow-hidden">
            <h2 class='pl-5 text-dasboard-title'>Appointments</h2>
            <div className="row">

                <div className=" col-md-5 col-sm-12 col-12">
                    <Calendar className="" onChange={handleDateChange} value={new Date()} />
                </div>

                <div className=" col-md-7 col-sm-12 col-12">
                    {
                        appoinments.length ?
                            <AppointmentShortList appoinments={appoinments} ></AppointmentShortList>
                            :
                            <div className="p-5">
                                <h4 className="lead text-center">No Appointments for this Date</h4>
                            </div>

                    }
                </div>
            </div>


        </section>
    );
};

export default AppoinmentByDate;