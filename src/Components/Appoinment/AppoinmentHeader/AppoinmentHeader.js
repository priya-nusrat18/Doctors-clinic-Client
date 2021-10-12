import React from 'react';
import chair from '../../../image/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './AppoinmentHeader.css'

const AppoinmentHeader = ({handleDateChange}) => {
   
    return (
        <main style={{height: '600px'}} className="mb-4 appoinmemt-header row d-flex align-items-center">
        <div className="col-md-5 col-sm-6 offset-md-1">
            <div className="calendar-wrap">
            <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
                
               
        </div>
        <div className="col-md-6 col-sm-6 ">
        <h1 className="app-h1" style={{color: '#3a4256'}}>Appoinment.</h1>
            <img src={chair} alt="" className="img-fluid app-img pe-5" />
        </div>
    </main>
    );
};

export default AppoinmentHeader;