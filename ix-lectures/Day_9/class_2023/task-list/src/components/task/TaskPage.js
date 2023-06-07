import React, { useState, useEffect } from 'react';

// import the task service
import TaskService from '../../services/task-service';

// import the Task class from the models folder
import { Task } from '../../models/Task';

// import components from components folder
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      onInitialLoad();
    }
    // In the case of empty array, the function only fires
    // once when the component is initialized

    // If we put a variable reference and that variable changes
    // this function fires again (anything react manages, state, props, references)
  }, []);

  async function onInitialLoad() {
    // We try catch here so if there is an error
    // we can show that error to the user
    try {
      const tasks = await TaskService.fetchTasks();
      setTasks(tasks);
    } catch (err) {
      // TODO: handle error correctly
      console.log(err);
    }
  }

  async function onTaskCreate(name) {
    // create the Task
    const task = await TaskService.createTask(new Task(null, name, false));

    // add the task to the tasks state
    setTasks([...tasks, task]);
  }

  async function onTaskCompleteToggle(taskId) {
    // toggle the task completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    const updatedTask = await TaskService.updateTask(taskToToggle);

    // update the tasks state with the new updated state
    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? updatedTask : task;
      })
    );
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);

    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>

        <hr></hr>

        <p>Our firebase Task List</p>

        <TaskInput onTaskCreate={onTaskCreate}></TaskInput>
        <TaskTable
          onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
          tasks={tasks}
        ></TaskTable>
      </div>
    </div>
  );
}
