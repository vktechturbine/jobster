import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    jobs: [],
    loading: false,
    error: null,
};
export const getAllData = createAsyncThunk('applyAlljobs', async (_, thunkAPI) => {
    console.log(thunkAPI.getState().user.user.token)
    const response = await fetch('http://192.168.0.184:3001/job/apply_for_jobs',{
        headers: {
            Authorization: 'Bearer ' + thunkAPI.getState().user.user.token,
            // "Content-Type":"application/json"
        },
    });
    const result = await response.json();
    console.log(result)
    return result;
})

export const apply_Job = createAsyncThunk('appliedjob',async(job,thunkAPI) => {
    console.log(job);
     const response = await fetch('http://192.168.0.184:3001/job/add_apply_for_jobs',{
        method:'POST',
        body:JSON.stringify(job),
        headers:{
            Authorization: 'Bearer ' + thunkAPI.getState().user.user.token,
            "Content-Type":"application/json"
        }
    })
    const result = response.json();
    return result;
    
}) 
export const Applyjobs = createSlice({
    name: 'applyjobs',
    initialState,
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.jobs = action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },
        [apply_Job.pending]: (state) => {
            state.loading = true;
        },
        [apply_Job.fulfilled]: (state, action) => {
            state.loading = false;
            // state.jobs = action.payload;
            // console.log(action.payload);
            toast.success(action.payload.message);
        },
        [apply_Job.rejected]: (state, action) => {
            state.loading = true;
            toast.error('not applied');
            // state.error = action.payload;
        }
    }
})

export default Applyjobs.reducer;