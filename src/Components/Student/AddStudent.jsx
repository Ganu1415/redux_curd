import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addformdata } from './StudentSlice';

const AddStudent = () => {
    // redirect default page
    const navigate = useNavigate();
    // send data for slice
    const dispatch = useDispatch();
    // Create state form Store the onchange value and update state
    const [student, setstudent] = useState({
        id: '',
        name: '',
        email: ''
    })
    // update State for the onchange event
    const getdata = (e) => {
        setstudent({ ...student, [e.target.name]: e.target.value });
    }
    // create SUbmit handle function store data and send Slice file
    const SubmitHandle = (e) => {
        e.preventDefault();
        console.log(student);
        // send student data to slice action 
        dispatch(addformdata(student));
        // redirect to listStudent component
        navigate('/')
    }
    return (
        <>
            <div className='m-4'>
                <h3>Add new Student</h3>
            </div>
            {/* Create Form */}
            <div>
                <form onSubmit={SubmitHandle}>
                    <div className='m-3'>
                        <label>
                            Id: <input type="number" name='id' value={student.id} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-3'>
                        <label>
                            Name: <input type="text" name='name' value={student.name} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-3'>
                        <label>
                            Email: <input type="text" name='email' value={student.email} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-3'>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddStudent