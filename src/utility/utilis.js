const getStoredApplication = () => {
  const storedJob = localStorage.getItem("job-application");
  if (storedJob) {
    return JSON.parse(storedJob);
  }
  return [];
};

const saveJobApplication = (id) => {
  const savedJob = getStoredApplication();
  const existsJob = savedJob.find((jobId) => jobId === id);
  if (!existsJob) {
    savedJob.push(id);
    localStorage.setItem("job-application", JSON.stringify(savedJob));
  }
};
export { saveJobApplication, getStoredApplication };
