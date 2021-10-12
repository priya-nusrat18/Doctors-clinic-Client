import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const AppoinmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            console.log(success)
                closeModal();
                alert('Appointment created successfully.');
            
        })


        
    }

    return (
        <div>

            <Modal className=""
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="app-form p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <input
              name='name'
              className='form-control'
              placeholder="Your Name"
                {...register("name", { required: true})}
              />
              {errors.name && <span className='text-danger'>Name is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone", { required: true})}name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email", { required: true})}name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender", { required: true})}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">

                            <input
              name='age'
              className='form-control'
              placeholder="Your Age"
              type='number'
                {...register("age", { required: true})}
              />
              {errors.age && <span className='text-danger'>Age is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight", { required: true})}className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};
export default AppoinmentForm;