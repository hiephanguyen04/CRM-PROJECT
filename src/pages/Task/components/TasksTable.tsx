// src/pages/Tasks/components/TasksTable.tsx
import React from "react";
import { Task } from "../../../types/tasks.types";

interface TasksTableProps {
  tasks: Task[];
  selectedTasks: string[];
  onTaskSelect: (taskId: string) => void;
  onSelectAll: () => void;
  allTasksSelected: boolean;
  onTaskStatusToggle: (taskId: string) => void;
  onTaskEdit: (task: Task) => void;
}

const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  selectedTasks,
  onTaskSelect,
  onSelectAll,
  allTasksSelected,
  onTaskStatusToggle,
  onTaskEdit,
}) => {
  const getStatusClassName = (status: string) => {
    return `task-status ${status.replace(" ", "-")}`;
  };

  const getCompletedButtonClass = (task: Task) => {
    let className = "task-completed-button";
    if (task.completed) {
      className += " completed";

      // Add different colors for different statuses
      if (task.status === "En retard") {
        className += " danger";
      } else if (task.status === "À faire") {
        className += " warning";
      }
    }
    return className;
  };

  const handleTaskClick = (task: Task) => {
    onTaskEdit(task);
  };

  const handleTaskStatusClick = (e: React.MouseEvent, taskId: string) => {
    e.stopPropagation(); // Prevent row click
    onTaskStatusToggle(taskId);
  };

  const handleCheckboxClick = (e: React.MouseEvent, taskId: string) => {
    e.stopPropagation(); // Prevent row click
    onTaskSelect(taskId);
  };

  return (
    <div className="tasks-table">
      <table>
        <thead className="task-table-header">
          <tr>
            <th className="checkbox-col">
              <input
                type="checkbox"
                checked={allTasksSelected}
                onChange={onSelectAll}
              />
            </th>
            <th className="task-completed-cell">Réalisé</th>
            <th className="task-title-cell">Titre</th>
            <th className="task-date-cell">Date d'échéance</th>
            <th className="email-col">Email</th>
            <th className="opportunity-col">Opportunité</th>
            <th className="task-status-cell">Statut</th>
            <th className="task-associate-cell">Contact associé</th>
            <th className="task-owner-cell">Responsable</th>
            <th className="task-date-cell">Date de création</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="task-row"
              onClick={() => handleTaskClick(task)}
            >
              <td className="checkbox-col" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => onTaskSelect(task.id)}
                  onClick={(e) => handleCheckboxClick(e, task.id)}
                />
              </td>
              <td className="task-completed-cell">
                <button
                  className={getCompletedButtonClass(task)}
                  onClick={(e) => handleTaskStatusClick(e, task.id)}
                >
                  {task.completed && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              </td>
              <td className="task-title-cell">{task.title}</td>
              <td className="task-date-cell">
                {task.dueDate === "--/--/----" ? (
                  "--/--/----"
                ) : (
                  <>
                    <span
                      className={
                        task.status === "En retard" ? "task-date-highlight" : ""
                      }
                    >
                      <span className="task-due-date">{task.dueDate}</span>
                      <span className="task-due-time">{task.dueTime}</span>
                    </span>
                  </>
                )}
              </td>
              <td className="email-col">
                <div className="email-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {task.email}
              </td>
              <td className="opportunity-col">{task.opportunity}</td>
              <td className="task-status-cell">
                <span className={getStatusClassName(task.status)}>
                  {task.status}
                </span>
              </td>
              <td className="task-associate-cell">
                {task.associatedContact.name}
              </td>
              <td className="task-owner-cell">
                <div className="owner">
                  {task.owner.avatar ? (
                    <img
                      src={task.owner.avatar}
                      alt={`${task.owner.name} Avatar`}
                      className="owner-avatar"
                    />
                  ) : (
                    <div className="owner-avatar-placeholder">
                      {task.owner.name.charAt(0)}
                    </div>
                  )}
                  <span>{task.owner.name}</span>
                </div>
              </td>
              <td className="task-date-cell">
                <span className="task-due-date">{task.creationDate}</span>
                <span className="task-due-time">{task.creationTime}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
