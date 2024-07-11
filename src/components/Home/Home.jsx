import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobsCategoryList from "../JobsCatagoryList/JobsCategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobsCategoryList></JobsCategoryList>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};

export default Home;
