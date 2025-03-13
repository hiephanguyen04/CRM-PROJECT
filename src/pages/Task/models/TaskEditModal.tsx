// src/pages/Tasks/modals/TaskEditModal.tsx
import React, { useEffect, useState } from "react";
import { Task } from "../../../types/tasks.types";

interface TaskEditModalProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  task,
  onClose,
  onSave,
}) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: checked,
    });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({
      ...editedTask,
      dueDate: e.target.value,
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({
      ...editedTask,
      dueTime: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="modal-overlay">
      <div className="task-edit-modal">
        <div className="task-edit-header">
          <h2 className="task-edit-title">Éditer tâche</h2>
          <button className="task-edit-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <form className="task-edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Titre de la tâche"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                className="form-control"
                name="status"
                value={editedTask.status}
                onChange={handleChange}
              >
                <option value="Appel">Appel</option>
                <option value="E-mail">E-mail</option>
                <option value="À faire">À faire</option>
                <option value="En retard">En retard</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Date d'échéance"
                value={editedTask.dueDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Heure"
                value={editedTask.dueTime}
                onChange={handleTimeChange}
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-textarea"
              placeholder="Note"
              name="description"
              value={editedTask.description || ""}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Responsable"
              value="Sébastien Hanouna"
              readOnly
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Affaire"
              name="affair"
              value={editedTask.affair || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Contact associé"
              value={editedTask.associatedContact.name}
              readOnly
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Entreprise"
              name="company"
              value={editedTask.company || ""}
              onChange={handleChange}
            />
          </div>

          <div className="task-form-footer">
            <label className="task-complete-checkbox">
              <input
                type="checkbox"
                name="completed"
                checked={editedTask.completed}
                onChange={handleCheckboxChange}
              />
              Marquer comme réalisée
            </label>

            <div className="task-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn-save">
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
