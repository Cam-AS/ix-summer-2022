import React from 'react';
import './TaskTable.css';
import Spinner from '../common/Spinner';

export default function TaskTable(props) {
  return (
    <div>
      {props.loading ? (
        <Spinner></Spinner>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.name}</td>

                  <td>
                    {/* arrow function used because we want access to variable inside component */}
                    <div onClick={(e) => props.onTaskCompleteToggle(task.id)}>
                      {/* non arrow function used when we want the event as the parameter */}
                      {/* <div onClick={props.onTaskCompleteToggle}> */}
                      <i
                        className={
                          task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'
                        }
                      ></i>
                    </div>
                  </td>

                  <td>
                    <div onClick={(e) => props.onTaskRemove(task.id)}>
                      <i className="bi bi-trash pointer"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
