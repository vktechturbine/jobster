import React from 'react'
import {SearchContainer} from '../../components/SearchContainer';
import { JobsContainer } from '../../components/JobsContainer';

// import {JobsContainer} from '../../components/JobsContainer'
const AllJobs = () => {
  
  console.log("BASE url :=> ",import.meta.env.BASE_URL)
  return (
    <>
      <SearchContainer/>
      <JobsContainer/>
    </>
  )
}

export default AllJobs