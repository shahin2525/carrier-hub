import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/utilis";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob, setDisplayJobs] = useState([]);

  const handleFilterJob = (text) => {
    if (text === "all") {
      setDisplayJobs(appliedJobs);
    } else if (text === "remote") {
      const remoteJob = appliedJobs.filter(
        (remote) => remote.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJob);
    } else if (text === "onsite") {
      const onsiteJob = appliedJobs.filter(
        (onsite) => onsite.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJob);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (jobs.length > 0) {
      const appliedJob = jobs.filter((job) => storedJobIds.includes(job.id));

      setAppliedJobs(appliedJob);
      setDisplayJobs(appliedJob);
    }
  }, [jobs]);

  return (
    <div>
      <h1>Applied Jobs : {appliedJobs.length}</h1>
      <details className="dropdown mb-32">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <div onClick={() => handleFilterJob("all")}>
            <a>All</a>
          </div>
          <div onClick={() => handleFilterJob("remote")}>
            <a>Remote</a>
          </div>
          <div onClick={() => handleFilterJob("onsite")}>
            <a>Onsite</a>
          </div>
        </ul>
      </details>
      <ul>
        {displayJob.map((job) => (
          <div key={job.id}>
            <span>
              {job.job_title} {job.company_name} {job.remote_or_onsite}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
