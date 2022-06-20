import React from "react";

export const TaskTable = ({ taskItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {taskItems.map((task) => (
          <tr key={task.name}>
            <td>{task.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
