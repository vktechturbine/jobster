import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    appliedjobapplications: [],
    loading: false,
    error: null,
};

export const appliedApplications = createAsyncThunk('applications', async (_, thunkAPI) => {
    console.log(thunkAPI.getState().user.user.token)
    const response = await fetch('http://192.168.0.184:3001/job/appliedApplications',{
        headers: {
            Authorization: 'Bearer ' + thunkAPI.getState().user.user.token,
            // "Content-Type":"application/json"
        },
    });
    const result = await response.json();
    console.log(result)
    return result;
})

export const AddApppliedJobs = createSlice({
    name: 'appliedApplications',
    initialState,
    extraReducers: {
        [appliedApplications.pending]: (state) => {
            state.loading = true;
        },
        [appliedApplications.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.appliedjobapplications = action.payload;
        },
        [appliedApplications.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },
       
    }
})

export default AddApppliedJobs.reducer;