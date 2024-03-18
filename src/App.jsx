import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Buy groceries", isDone: true },
    { id: 3, job: "Call mom", isDone: false },
    { id: 4, job: "Go for a run", isDone: false },
    { id: 5, job: "Read a book", isDone: true },
  ]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
 const doneTask=(id) => {
  setTasks(tasks.map((task)=>task.id===id ? ({...task,isDone:!task.isDone}):task))
 }
const deleteTask=(id) => {
  setTasks(tasks.filter((task)=>task.id!==id))
}
const updateTask=(id,newJob) => {
  setTasks(tasks.map((task)=>task.id===id? {...task,job:newJob}:task))
}
const doneAllTask=() => {
  setTasks(tasks.map((task)=>({...task,isDone:true})))
}
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup doneAllTask={doneAllTask} updateTask={updateTask} deleteTask={deleteTask} doneTask={doneTask} tasks={tasks} />
    </div>
  );
};

export default App;
