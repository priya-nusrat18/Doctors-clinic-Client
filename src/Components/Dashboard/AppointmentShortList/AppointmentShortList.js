import React from 'react';

const AppointmentShortList = ({appoinments}) => {
    console.log(appoinments);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appoinments.map((appoinments, index) => 
                        
                    <tr>
                        <td>{appoinments.name}</td>
                        <td>{appoinments.phone}</td>
                        <td>{appoinments.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;