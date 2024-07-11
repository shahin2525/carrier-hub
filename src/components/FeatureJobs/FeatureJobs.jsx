import { useEffect } from "react";
import { useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
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
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:ml-10 mt-3">
        {jobs.slice(0, dataLength).map((job) => (
          <FeatureJob key={job.id} job={job}></FeatureJob>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : "text-center"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary text-center"
        >
          Show all Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
