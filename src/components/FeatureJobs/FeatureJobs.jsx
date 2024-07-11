import { useEffect } from "react";
import { useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((data) => data.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center">Feature Jobs</h1>
      <p className="text-xl text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        {jobs.map((job) => (
          <FeatureJob key={job.id} job={job}></FeatureJob>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
