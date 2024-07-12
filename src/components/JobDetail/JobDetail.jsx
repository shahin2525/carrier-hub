import { useLoaderData } from "react-router-dom";

const JobDetail = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <h1>job detail</h1>
    </div>
  );
};

export default JobDetail;
