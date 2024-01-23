import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Banner from "./../../Components/Banner/Banner";
import TargetAudienceSection from "../../Components/AudienceSection/TargetAudienceSection";
import Review from "../../Components/Review/Review";

const Home = () => {
  const axiosSecure = useAxiosSecure();

  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <TargetAudienceSection></TargetAudienceSection>
      {/* <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Discover Our Popular Contests
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Immerse yourself in a world of creativity and innovation. <br />{" "}
        Discover thrilling contests that will challenge your skills and broaden
        your horizons.
      </p> */}
      {/* <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
      >
        {contests?.map((item) => (
          <ContestCard item={item} key={item._id}></ContestCard>
        ))}
      </div> */}
      <div className="my-12">
        {" "}
        <h1 className="text-3xl font-bold text-center mb-12 mt-28 md:mt-20">
          Reviews from Our Customer
        </h1>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
AOS.init();
