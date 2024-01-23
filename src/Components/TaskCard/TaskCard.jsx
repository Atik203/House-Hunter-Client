import TaskHeader from "../TaskHeader/TaskHeader";
import SingleTask from "../SingleTask/SingleTask";
import { useDrop } from "react-dnd";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const TaskCard = ({
  status,
  tasks,
  isPending,
  refetch,
  TODO,
  Ongoing,
  Completed,
  setTasks,
}) => {
  const axiosSecure = useAxiosSecure();

  if (isPending) {
    return (
      <span className="loading text-center mt-20 loading-spinner loading-lg"></span>
    );
  }
  let text = "to-do";
  let bg = "bg-red-500";
  let defaultTask = TODO;
  if (status === "ongoing") {
    defaultTask = Ongoing;
    text = "On-Going";
    bg = "bg-blue-500";
  }
  if (status === "completed") {
    defaultTask = Completed;
    text = "Completed";
    bg = "bg-green-500";
  }
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = async (id) => {
    const newStatus = status;
    try {
      const res = await axiosSecure.patch(`/update-status/${id}`, {
        newStatus,
      });

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
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div
      ref={drop}
      className={`w-72 rounded-md ${isOver ? "bg-slate-200" : ""}`}
    >
      <div className="">
        {" "}
        <TaskHeader text={text} bg={bg} count={defaultTask.length}></TaskHeader>
      </div>
      {defaultTask.length > 0 &&
        defaultTask?.map((item) => (
          <SingleTask
            key={item._id}
            item={item}
            tasks={tasks}
            refetch={refetch}
          ></SingleTask>
        ))}
      <ToastContainer />
    </div>
  );
};

export default TaskCard;
