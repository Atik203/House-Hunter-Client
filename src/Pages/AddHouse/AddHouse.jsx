import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHouse = () => {
  const { handleSubmit, register } = useForm();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const {
      name,
      address,
      bedrooms,
      bathrooms,
      roomSize,
      picture,
      rent,
      description,
    } = data;

    const email = user?.email;
    const status = "available";
    const userName = user?.name;
    const number = user?.number;

    const houseData = {
      name,
      address,
      bedrooms,
      bathrooms,
      roomSize,
      picture,
      rent,
      description,
      status,
      email,
    };

    axiosSecure.post("/houses", houseData).then((res) => {
      toast.success("House Added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="card w-full max-w-md shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">House Name</span>
          </label>
          <input
            {...register("name")}
            className="input input-bordered"
            required
            placeholder="Enter House Name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">House Address</span>
          </label>
          <input
            {...register("address")}
            className="input input-bordered"
            required
            placeholder="Enter House Address"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Bedrooms</span>
          </label>
          <input
            {...register("bedrooms")}
            className="input input-bordered"
            required
            placeholder="Enter Number of Bedrooms"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Bathrooms</span>
          </label>
          <input
            type="number"
            {...register("bathrooms")}
            className="input input-bordered"
            required
            placeholder="Enter Number of Bathrooms"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Size</span>
          </label>
          <input
            {...register("roomSize")}
            className="textarea textarea-bordered"
            required
            placeholder="Enter Room Size"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input
            {...register("picture")}
            className="textarea textarea-bordered"
            required
            placeholder="Enter Picture URL"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rent Per Month</span>
          </label>
          <input
            {...register("rent")}
            className="textarea textarea-bordered"
            required
            placeholder="Enter Rent Per Month"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered"
            required
            placeholder="Enter House Description"
          />
        </div>
        <button
          type="submit"
          className="btn bg-red-500 text-white hover:text-black hover:bg-gray-400 mt-4"
        >
          Add House
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddHouse;
