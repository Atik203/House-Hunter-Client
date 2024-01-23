import { useContext } from "react";
import { useForm } from "react-hook-form";
import useTaskId from "../../Hooks/useTaskId";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTask = () => {
  const generateTaskId = useTaskId();
  const { handleSubmit, register } = useForm();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const taskId = generateTaskId();
    const { name, deadline, description, priority, category } = data;
    const email = user?.email;
    const status = "to-do";
    const taskData = {
      name,
      description,
      priority,
      category,
      status,
      email,
      taskId,
      deadline,
    };

    axiosSecure.post("/tasks", taskData).then((res) => {
      toast.success("Added Successfully", {
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
            <span className="label-text">Task Name</span>
          </label>
          <input
            {...register("name")}
            className="input input-bordered"
            required
            placeholder="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Type</span>
          </label>
          <input
            {...register("category")}
            className="input input-bordered"
            required
            placeholder="type"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            {...register("priority")}
            className="select select-bordered"
            required
            placeholder="options"
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            {...register("deadline")}
            className="input input-bordered"
            required
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
            placeholder="description"
          />
        </div>

        <button
          type="submit"
          className="btn bg-red-500 text-white hover:text-black hover:bg-gray-400 mt-4"
        >
          Create Task
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default CreateTask;
