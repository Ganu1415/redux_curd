import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { update } from './StudentSlice';

const EditStudent = () => {
    // acess pathname
    const { pathname } = useLocation();
    // console.log(pathname)
    const studentId = parseInt(pathname.replace("/edit/:", ""))
    // console.log(studentId)

    // Access data by id for store
    const getstoredata = useSelector(state => state.Student.Student_Info.find(e => e.id == studentId))
    console.log(getstoredata)

    // redirect default page
    const navigate = useNavigate();
    // send data for slice
    const dispatch = useDispatch();
    // Create state form Store the onchange value and update state
    const [student, setstudent] = useState({
        id: getstoredata.id,
        name: getstoredata.name,
        email: getstoredata.email
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
        dispatch(update(student));
        // redirect to listStudent component
        navigate('/')
    }
    return (
        <>
            <div className='m-4'>
                <h3>Update Student</h3>
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

export default EditStudent