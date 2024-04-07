import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = ({
  tasks,
  doneTask,
  deleteTask,
  updateTask,
  doneAllTask,
}) => {
  const handleAllDoneBtn = () => {
    doneAllTask();
  };
  return (
    <div>
      {tasks.length === 0 && <EmptyList />}
      {tasks.map(({ id, job, isDone }) => (
        <List
          doneAllTask={doneAllTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          doneTask={doneTask}
          key={id}
          id={id}
          job={job}
          isDone={isDone}
        />
      ))}
      {tasks.length !== 0 && (
        <div className="flex justify-end">
          <button
            onClick={handleAllDoneBtn}
            className=" bg-purple-100 px-3 py-1 border border-purple-700 duration-150 hover:bg-purple-600 hover:text-white"
          >
            All Done
          </button>
        </div>
      )}
    </div>
  );
};

export default ListGroup;
