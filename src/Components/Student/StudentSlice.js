import { createSlice } from "@reduxjs/toolkit";
// import createSlice from toolkit
const StudentSlice = createSlice({
    // first stage
    name: 'Student',
    // 2nd stage initialState for the store data 
    initialState: {
        // array
        Student_Info: []
    },
    // 3rd satge reducers 
    reducers: {
        // all functionality in the reducers for eg.add data ,edit data, delete data, update data.
        // access data form form to action.paload
        addformdata(state, action) {
            // console.log(action.payload);
            state.Student_Info.push(action.payload);
        },
        // delete store  data 
        deletetabledata(state, action) {
            // console.log(action.payload);
            state.Student_Info = state.Student_Info.filter(e => e.id !== action.payload);
        },
        update(state, action) {
            console.log(action.payload)
            // Destructure action payload data
            const { id, name, email } = action.payload;
            // find the store data id and action.payload id  are same this condition all data is updated 
            const existid = state.Student_Info.find(e => e.id == id)
            if (existid) {
                // finded store data == action.payload data
                existid.name = name
                existid.email = email
            }
        }
    }
})
// send the data and access the other conponents 
export const { addformdata, deletetabledata, update } = StudentSlice.actions
export default StudentSlice.reducer