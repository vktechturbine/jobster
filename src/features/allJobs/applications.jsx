import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    jobapplications: [],
    loading: false,
    error: null,
};

export const applications = createAsyncThunk('applications', async (_, thunkAPI) => {
    console.log("base url")
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/job/applications`,{
        headers: {
            Authorization: 'Bearer ' + thunkAPI.getState().user.user.token,
            // "Content-Type":"application/json"
        },
    });
    const result = await response.json();

    return result;
})
export const selection_status = createAsyncThunk('selection_status',async(job,thunkAPI) => {
  
     const response = await fetch(`${import.meta.env.VITE_BASE_URL}/job/applicationRequest`,{
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

export const Addapplication = createSlice({
    name: 'applyjobs',
    initialState,
    extraReducers: {
        [applications.pending]: (state) => {
            state.loading = true;
        },
        [applications.fulfilled]: (state, action) => {
            state.loading = false;
            state.jobapplications = action.payload;
        },
        [applications.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },
        [selection_status.pending]: (state) => {
            state.loading = true;
        },
        [selection_status.fulfilled]: (state, action) => {
            state.loading = false;
            toast.success(action.payload.message);
        },
        [selection_status.rejected]: (state, action) => {
            state.loading = true;
            toast.error('not applied');
            // state.error = action.payload;
        }
       
    }
})

export default Addapplication.reducer;