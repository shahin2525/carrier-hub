import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/utilis";

const JobDetail = () => {
  const { id } = useParams();

  const idInt = parseInt(id);

  const jobs = useLoaderData();
  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    salary,
    job_title,

    contact_information,
  } = job;
  const handleApply = () => {
    saveJobApplication(id);
    console.log("click apply");
    toast.success("apply job successfully");
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Job detail</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <p>
            <span className="text-2xl">Job-description</span> :{" "}
            {job_description}
          </p>
          <p>
            <span className="text-2xl">Job-Responsibility :</span>
            {job_responsibility}
          </p>
          <p>
            <span className="text-2xl">Educational-requirements:</span>
            {educational_requirements}
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-center text-2xl">Job-Details</h1>
          <p>{salary}</p>
          <p>{job_title}</p>
          <h2 className="text-center text-2xl">Contact-Information</h2>
          <p>
            <span>Phone: </span>
            {contact_information.phone}
          </p>
          <p>
            <span>Email :</span> {contact_information.email}
          </p>
          <p>
            <span>Address: </span>
            {contact_information.address}
          </p>
          <button onClick={handleApply} className="btn btn-primary">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
