import React from 'react';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';
import {faClock , faMapMarker , faPhone} from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const BusinessInfos=[
        {
            title: 'Opening hour',
    description:'we are open 7 days',
    icon : faClock,
    background: 'primary'
}, 
{
    title: 'Visit our location',
description:'Brooklyn NewYork 10003 USA',
icon : faMapMarker,
background: 'dark'
},
{
    title: 'Call Us Now',
description:'+324356777',
icon : faPhone,
background: 'primary'
}
    ]
    return (
      <section className='d-flex justify-content-center'>
          <div className="row info-row w-75"> 
          {
            BusinessInfos.map( info => <BusinessInfoCard info={info} />)
          }
          </div>
      </section>
    );
};

export default BusinessInfo;                                                                                                                                                                                                                                                                                                                         