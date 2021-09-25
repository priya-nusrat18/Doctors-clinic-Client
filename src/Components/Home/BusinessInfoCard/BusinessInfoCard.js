import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BusinessInfoCard.css'


const BusinessInfoCard = ({info}) => {
    const {title , description, icon , background}= info;
 
    return (
        <div className="col-md-4 info-card">
            <div className={`info-container justify-content-center d-flex info-${background}`}>
            <div  className="me-3 ">
                <FontAwesomeIcon  className="  info-icon" icon={icon}   />
            </div>
            <div>
                <h6>{title}</h6>
                <small>{description}</small>
            </div>
            </div>
        </div>
    );
};

export default BusinessInfoCard;