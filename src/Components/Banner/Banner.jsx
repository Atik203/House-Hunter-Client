import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// ..

const Banner = () => {
  return (
    <div className="mx-auto ">
      <div className="relative">
        <img
          src={"https://i.ibb.co/Mkm3LsT/3664.jpg"}
          className="h-[350px] md:h-[400px] lg:h-[700px] w-full transition-opacity opacity-40"
        />
      </div>
      <div
        className="w-2/3 mx-auto absolute top-60 md:top-60 lg:top-72 -mt-16 md:-mt-20 ml-12 md:ml-24 lg:-mt-8 lg:ml-44"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-2xl md:text-3xl my-3 md:my-5 lg:text-5xl text-center text-black font-bold">
          Simplify Your Task Management Experience Effortlessly
        </h1>
        <h3 className="text-center font-medium text-base md:text-xl">
          Organize your projects and enhance collaboration effortlessly. We
          offer the tools you need for streamlined task management and efficient
          progress tracking.
        </h3>
        <div className="text-center mt-3">
          <Link to="/dashboard">
            <button className="btn bg-red-500 border-none text-white hover:bg-gray-400 hover:text-black">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
