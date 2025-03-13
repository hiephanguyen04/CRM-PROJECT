// src/data/tasksMockData.ts
import { Task, TaskStatus } from "../types/tasks.types";

export const tasksData: Task[] = Array(50)
  .fill(null)
  .map((_, index) => ({
    id: `task-${index + 1}`,
    title: "Titre tâche",
    completed: index % 7 === 0, // Some tasks are completed
    dueDate: "29/06/2023",
    dueTime: "15:10:50",
    email: "romain@gillig.studio",
    opportunity: "Formation 3D",
    status: "Appel" as TaskStatus,
    associatedContact: {
      id: `contact-${index + 1}`,
      name: "Romain Gillig",
    },
    owner: {
      id: "owner-1",
      name: "Sébastien",
      avatar: "/assets/images/avatar.jpg",
    },
    creationDate: "29/06/2023",
    creationTime: "15:10:50",
    description: index % 3 === 0 ? "Description tâche" : undefined,
    affair: "Affaire Romain",
    company: "Studio Gillig",
  }));

// Add some task variety
tasksData[2].status = "E-mail";
tasksData[3].status = "À faire";
tasksData[4].status = "En retard";
tasksData[4].dueDate = "25/06/2023";
tasksData[5].completed = true;
tasksData[6].completed = true;
tasksData[6].status = "Appel";
tasksData[7].completed = true;
tasksData[7].status = "À faire";
tasksData[8].dueDate = "--/--/----";
