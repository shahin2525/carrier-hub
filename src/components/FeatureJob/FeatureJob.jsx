const FeatureJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="my-4 p-2">
      <img className="size-[150px]" src={logo} alt="" />
      <h2 className="text-2xl font-extrabold">{job_title}</h2>
      <h2 className="text-xl font-semibold">{company_name}</h2>
      <div className="flex gap-4">
        <p className="border border-gray-400 p-2 font-extrabold text-[16px] w-[100px] rounded">
          {remote_or_onsite}
        </p>
        <p className="border border-gray-400 p-2 font-extrabold text-[16px] w-[100px] rounded">
          {job_type}
        </p>
      </div>
      <div className="flex">
        <p> {location}</p>
        <p>{salary}</p>
      </div>
      <button className="text-2xl rounded bg-blue-300 p-2 font-semibold w-[200px]">
        View details
      </button>
    </div>
  );
};

export default FeatureJob;
