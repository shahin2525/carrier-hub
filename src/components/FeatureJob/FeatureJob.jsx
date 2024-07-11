const FeatureJob = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <img className="size-[150px]" src={logo} alt="" />
    </div>
  );
};

export default FeatureJob;
