import React from 'react'

export default function TaskTable(props) {

  // console.log(props)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task) =>
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>
                  <i className={
                    task.complete ?
                      "bi bi-circle-fill" : "bi bi-circle"
                  }></i>
                </td>
                <td>
                  <i className="bi bi-trash"></i>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}
