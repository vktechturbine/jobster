import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export const links = [
  {
    id: 1,
    text: 'Dashboards',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'View Created Jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'Create a new Job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'Profile Setting',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: 'Find a new Job',
    path: 'seeking_jobs',
    icon: <img src='/src/assets/images/findjob.svg' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
  {
    id: 6,
    text: 'Jobs Applications',
    path: 'jobs_Applications',
    icon: <img src='/src/assets/images/jobsapplication.svg' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
  {
    id: 7,
    text: 'Applied Jobs',
    path: 'appliedApplications',
    icon: <img src='/src/assets/images/cv.svg' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
];

