import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbars from '../../Shared/Navbar/Navbars';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <Navbars></Navbars>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;