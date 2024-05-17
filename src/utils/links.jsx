import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: 'Seeking_job',
    path: 'seeking_jobs',
    icon: <img src='/src/assets/images/job.png' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
  {
    id: 6,
    text: 'Jobs Applications',
    path: 'jobs_Applications',
    icon: <img src='/src/assets/images/cv.png' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
  {
    id: 7,
    text: 'Applied Jobs',
    path: 'appliedApplications',
    icon: <img src='/src/assets/images/cv.png' style={{width:'2rem',marginLeft:'2px',textAlign:'center',marginBottom:'-5px',paddingTop:'2px'}}></img>
  },
];

