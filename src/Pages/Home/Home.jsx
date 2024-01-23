import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Banner from "./../../Components/Banner/Banner";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
    </div>
  );
};

export default Home;
AOS.init();
