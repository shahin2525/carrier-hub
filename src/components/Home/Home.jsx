import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobsCategoryList from "../JobsCatagoryList/JobsCategoryList";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>carrier | home</title>
      </Helmet>
      <Banner></Banner>
      <JobsCategoryList></JobsCategoryList>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};

export default Home;
