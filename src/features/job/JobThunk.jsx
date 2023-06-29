// import { useDispatch } from "react-redux";
import CustomFetch from "../../utils/axios"
import { clearValues } from "./JobSlice";
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'

const authHeader = (thunkAPI) => {
    return {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    };
  };

  
export const createJobThunk = async(job,thunkAPI) => {
    try{
        const resp = await CustomFetch.post('/job/createJob',job,authHeader(thunkAPI));
        thunkAPI.dispatch(clearValues());
        return resp.data;
    }catch(error)
    {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const deleteJobThunk = async(jobId,thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try{
      const resp = await CustomFetch.delete(`/jobs/${jobId}`,authHeader(thunkAPI));
      thunkAPI.dispatch(getAllJobs());
      return resp.data;
    }catch(error){
      thunkAPI.dispatch(hideLoading());
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  export const editJobThunk = async({jobId,job},thunkAPI)=>{
    try{
      console.log(job)
      const resp = await CustomFetch.patch(`/jobs/${jobId}`,authHeader(thunkAPI));
      // thunkAPI.dispatch(clearValues());
      return resp.data;
    }catch(error)
    {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    } 
  }