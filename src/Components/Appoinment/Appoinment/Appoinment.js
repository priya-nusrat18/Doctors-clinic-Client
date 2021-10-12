import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbars from '../../Shared/Navbar/Navbars';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())
    const handleDateChange =date =>{
        setSelectedDate(date);
    }
    return (
        <div className="mb-4 appoinmemt-header">
            <Navbars />
            <AppoinmentHeader handleDateChange ={handleDateChange} />
            <BookAppoinment date = {selectedDate} />
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;