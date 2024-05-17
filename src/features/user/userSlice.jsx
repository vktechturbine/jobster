import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CustomFetch from '../../utils/axios';
import { toast } from "react-toastify";
import { addUsertoLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import {clearAllJobsState} from '../allJobs/allJobsSlice';
import { clearValues } from "../job/JobSlice";
// import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
const initialState = {
    isLoading : false,
    isSidebarOpen:false,
    user : getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk('user/registerUser',async(user,thunkAPI) => {
    
   try{
    const resp = await CustomFetch.post('/user/register',user);
   
    return resp.data;
   }catch(error){
    return thunkAPI.rejectWithValue(error.response.data.msg);
   }
});
export const loginUser = createAsyncThunk('user/loginUser',async(user,thunkAPI)=>{

    try{
        const resp = await CustomFetch.post('/user/login',user);
        
        return resp.data;
    }catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})
export const updateUser = createAsyncThunk('user/updateUser',async(user,thunkAPI) =>{
   
    try{
        const resp = await CustomFetch.patch('/user/updateUser',user,{
            headers:{
                Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                
            },
        });
        return resp.data;
    }catch(error){
       if(error.response.status === 401)
       {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('unAuthorized! Logging Out...')
       }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
})
export const clearStore = createAsyncThunk('user/clearStore',async(message,thunkAPI) =>{
    try{
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllJobsState());
        thunkAPI.dispatch(clearValues())
        return Promise.resolve();
    }catch(error)
    {
        return Promise.reject();
    }
})
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logoutUser : (state,{payload}) => {
            state.user = null;
            state.isSidebarOpen = false;
            // toast.success('Logout Successful! ')
            removeUserFromLocalStorage();
            if(payload)
            {
                toast.success(payload);
            }
        },
        toggleSidebar:(state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
          
        },
       
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending,(state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state,{payload}) => {
            const user = payload;
            state.isLoading = false;
            state.user = user;
            addUsertoLocalStorage(user);
            toast.success(`Hello There ${user.name}`);
        }).addCase(registerUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            toast.error(payload);
        }).addCase(loginUser.pending,(state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled,(state,{payload}) => {
            const user = payload;
            state.isLoading = false,
            state.user = user;
            addUsertoLocalStorage(user);
            toast.success(`Welcome Back ${user.name}`)
         }).addCase(loginUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            toast.error(payload);
         }).addCase(updateUser.pending,(state) => {
            state.isLoading = true;
         }).addCase(updateUser.fulfilled,(state,{payload}) => {
            const user = payload;
            state.isLoading = false;
            state.user = user;
            addUsertoLocalStorage(user);
            toast.success("User Updated");
         }).addCase(updateUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            toast.error(payload);
         }).addCase(clearStore.rejected ,() => {
            toast.error(`There Was an error`);
         })
    }
})
export const {toggleSidebar,logoutUser} = userSlice.actions;

export default userSlice.reducer;