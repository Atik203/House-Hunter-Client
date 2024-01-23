import { useState } from "react";

const useTaskId = () => {
  const [prevTaskId, setPrevTaskId] = useState(null);

  const generateTaskId = () => {
    let newTaskId = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    if (newTaskId === prevTaskId) {
      newTaskId += 1;
    }
    setPrevTaskId(newTaskId);
    return newTaskId;
  };

  return generateTaskId;
};

export default useTaskId;
