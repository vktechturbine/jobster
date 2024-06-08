import React from 'react'
import axios from 'axios'
// import env from "react-dotenv";
import  {clearStore} from '../features/user/userSlice';

export const checkForUnauthorizedResponse =(error,thunkAPI) => {
    if(error.response.status === 401){
        thunkAPI.dispatch(clearStore());
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
};

const CustomFetch = axios.create({
    // baseURL:'https://jobsterbackendversion1.onrender.com',
    baseURL:`${import.meta.env.VITE_BASE_URL}`,
    // baseURL:'http://localhost:3001',
})

export default CustomFetch