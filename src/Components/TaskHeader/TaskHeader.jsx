import React from "react";

const TaskHeader = ({ bg, count, text }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 uppercase gap-2 rounded-md text-white p-3`}
    >
      {text}:
      <div className="bg-white text-black w-6 rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TaskHeader;
