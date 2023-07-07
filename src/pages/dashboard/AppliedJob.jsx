
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { appliedApplications } from '../../features/allJobs/appliedapplications';
// import { apply_Job } from '../../features/allJobs/applyjobSlice';
// import {JobsContainer} from '../../components/JobsContainer'
const AppliedJobs = () => {


    // const [datas,setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appliedApplications())
    }, [])

    const data = useSelector((state) => {

       
        console.log(state);
        return state.appliedApplication.appliedjobapplications.jobs;

    });

    console.log(data)

    /*    console.log(data?.map(dats => {
           console.log(dats.userName)
       }));  */


    return (
        <table className='table'>
        <thead className='thead-dark'>
            <tr>
                <th style={{ textAlign: "center", background: "#3d89f8" }} scope="col">Position</th>
                <th style={{ textAlign: "center", background: "#3d89f8" }} scope="col">Company</th>
                <th style={{ textAlign: "center", background: "#3d89f8" }} scope="col">Location</th>
                <th style={{ textAlign: "center", background: "#3d89f8" }} scope="col">Job Type</th>
                <th style={{ textAlign: "center", background: "#3d89f8" }} scope="col">Job status</th>
            </tr>
        </thead>
        <tbody>
            {data?.map(dats => (
                <tr>
                    <td style={{ textAlign: "center" }}>{dats.jobId.position}</td>
                    <td style={{ textAlign: "center" }}>{dats.jobId.company}</td>
                    <td style={{ textAlign: "center" }}>{dats.jobId.jobLocation}</td>
                    <td style={{ textAlign: "center" }}>{dats.jobId.jobType}</td>
                    <td style={{ textAlign: "center" }}>{dats.status}</td>
                    
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default AppliedJobs;