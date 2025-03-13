// src/types/tasks.types.ts

export type TaskStatus = "Appel" | "E-mail" | "À faire" | "En retard";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  dueTime: string;
  email: string;
  opportunity: string;
  status: TaskStatus;
  associatedContact: {
    id: string;
    name: string;
  };
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  creationDate: string;
  creationTime: string;
  description?: string;
  affair?: string;
  company?: string;
}

export interface TasksState {
  selectedTasks: string[];
  selectedFilter: TaskFilter;
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showTaskEditModal: boolean;
  currentTask: Task | null;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export type TaskFilter =
  | "Tout"
  | "Appel"
  | "E-mail"
  | "À faire"
  | "En retard"
  | "Aujourd'hui"
  | "Demain"
  | "P1"
  | "P2"
  | "P3";
