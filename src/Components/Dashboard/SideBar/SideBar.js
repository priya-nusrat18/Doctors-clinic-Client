import React , {useState , useEffect}  from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { UserContext } from '../../../App';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faPlus, faSignOutAlt, faCalendar, faGripHorizontal, faUsers , faHome} from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const SideBar = ({url }) => {
    const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
    const {email} =loggedInUser;
    const [isDoctor , setIsDoctor]  = useState(false)

    useEffect(() => {
        fetch('https://peaceful-sierra-17047.herokuapp.com/isAdmin' , { 
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({email : email})
        })
        .then(res => res.json())
        .then(data => setIsDoctor(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            
               {isDoctor ? 
               <div> 
                   <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link  to={`${url}`} className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                   <li>
                    <Link to={`${url}/allPatients`}  className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>All Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addDoctor`} className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li></div>
                :
                <>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
               
                <li>
                    <Link  to={`${url}`} className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                </>
                }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;