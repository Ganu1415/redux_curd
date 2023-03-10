import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletetabledata } from './StudentSlice.js'
const ListStuden = () => {
    // send which data delete by id
    const dispatch = useDispatch();
    // access or get data for Slice of initial state
    const getStoredata = useSelector(state => state.Student.Student_Info);
    console.log(getStoredata);

    // delete function get id
    const deletePost = (id) => {
        console.log(id);
        dispatch(deletetabledata(id))
    }
    return (
        <>
            <div className='mt-4'>
                {/* redirect to AddStudent form */}
                <div>
                    <Link to={'/add'}>
                        <button type="button" className="btn btn-primary">Add New Student</button>
                    </Link>
                </div>
                <div className='m-4'>
                    <h4>List Student</h4>
                </div>
                {/* table */}
                <div className='m-4'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStoredata.length > 0 && getStoredata.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>
                                                <Link to={`/edit/:${e.id}`}>
                                                    <button type="button" className="btn btn-success m-2">Update</button>
                                                </Link>
                                                <button type="button" className="btn btn-danger m-2" onClick={() => deletePost(e.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListStuden