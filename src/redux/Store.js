import { configureStore } from "@reduxjs/toolkit";
// import reducer from student slice 
import StudentReducer from '../Components/Student/StudentSlice'

// import configureStore in toolkit and store one vaireble
export const store = configureStore({
    reducer: {
        // Store the Slices 
        // this Studen name is a Slice name and this name is same 
        Student: StudentReducer,
    },
})
