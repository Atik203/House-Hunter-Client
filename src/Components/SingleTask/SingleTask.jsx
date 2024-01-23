import React from "react";
import Countdown from "react-countdown";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";

const SingleTask = ({ item, tasks, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, name, category, description, deadline, status, priority } = item;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const deadlineDate = new Date(deadline);
  const now = new Date();
  const isDeadlineOver = deadlineDate < now;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/task-delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Task has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div
      ref={drag}
      className={` ${
        isDragging ? `opacity-20` : `opacity-100`
      } mx-auto mt-8 bg-white rounded-xl overflow-hidden shadow-lg p-6 cursor-grab`}
    >
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
        {category}
      </div>
      <h2 className="text-base font-semibold mb-2">{name}</h2>
      <p className="text-gray-500 text-justify mb-4">{description}</p>
      <div className="flex justify-between text-gray-700">
        {!isDeadlineOver && (
          <p className="">
            Deadline: <Countdown date={deadlineDate} daysInHours />
          </p>
        )}
        {isDeadlineOver && <p>Deadline is Over</p>}
        <p>Priority: {priority}</p>
      </div>
      <div className="flex items-center w-24 text-lg mx-auto justify-between text-white mt-3">
        <Link to={`/dashboard/update-task/${_id}`}>
          {" "}
          <div className="mx-auto bg-red-500 p-2 rounded-sm cursor-pointer  hover:text-black hover:bg-gray-400">
            <FaEdit></FaEdit>
          </div>
        </Link>
        <div
          onClick={() => handleDelete(_id)}
          className="mx-auto bg-red-500 p-2 rounded-sm cursor-pointer  hover:text-black hover:bg-gray-400 "
        >
          <MdDeleteForever></MdDeleteForever>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleTask;
