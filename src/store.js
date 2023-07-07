import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import JobSlice from "./features/job/JobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";
import Applyjobs from "./features/allJobs/applyjobSlice";
import Addapplication from "./features/allJobs/applications";
import AppliedApplication from "./features/allJobs/appliedapplications";

export const store = configureStore({
   reducer: {
      user: userSlice,
      job: JobSlice,
      allJobs: allJobsSlice,
      applyJob: Applyjobs,
      applications:Addapplication,
      appliedApplication: AppliedApplication

   }

});
