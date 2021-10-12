import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const DoctorDetails = ({doctor}) => {
   
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
        {
            doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} alt="/" />
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://peaceful-sierra-17047.herokuapp.com/${doctor.img}`} alt=""/>
        }
       
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default DoctorDetails;