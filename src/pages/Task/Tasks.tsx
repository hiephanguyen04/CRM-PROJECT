// src/pages/Tasks/Tasks.tsx
import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import { tasksData } from "../../data/tasksMockData";
import Pagination from "../../pages/Contacts/components/Pagination";
import { Task, TaskFilter, TasksState } from "../../types/tasks.types";
import "./Tasks.scss";

import ActionBar from "./components/ActionBar";
import TasksFilter from "./components/TasksFilter";
import TasksTable from "./components/TasksTable";
import TaskEditModal from "./models/TaskEditModal";

const Tasks: React.FC = () => {
  // Initialize state
  const [state, setState] = useState<TasksState>({
    selectedTasks: [],
    selectedFilter: "Tout",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showTaskEditModal: false,
    currentTask: null,
    currentPage: 1,
    itemsPerPage: 25,
    totalItems: tasksData.length,
  });

  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("tasks");

  // Filter tasks based on search term and filter
  useEffect(() => {
    let filtered = tasksData;

    // Apply search filter
    if (state.searchTerm) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          task.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          task.associatedContact.name
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
      );
    }

    // Apply task type filter
    if (state.selectedFilter !== "Tout") {
      switch (state.selectedFilter) {
        case "Appel":
        case "E-mail":
        case "À faire":
        case "En retard":
          filtered = filtered.filter(
            (task) => task.status === state.selectedFilter
          );
          break;
        case "Aujourd'hui":
          filtered = filtered.filter((task) => task.dueDate === "29/06/2023"); // For demo, hardcoded "today"
          break;
        case "Demain":
          filtered = filtered.filter((task) => task.dueDate === "30/06/2023"); // For demo, hardcoded "tomorrow"
          break;
        case "P1":
        case "P2":
        case "P3":
          // For demo purposes, we'll just filter some arbitrary tasks
          filtered = filtered.filter(
            (_, index) =>
              index % 3 ===
              (state.selectedFilter === "P1"
                ? 0
                : state.selectedFilter === "P2"
                ? 1
                : 2)
          );
          break;
        default:
          break;
      }
    }

    setTasks(filtered);
    setState((prev) => ({ ...prev, totalItems: filtered.length }));
  }, [state.searchTerm, state.selectedFilter]);

  // Handle task selection
  const handleTaskSelect = (taskId: string) => {
    setState((prevState) => {
      if (prevState.selectedTasks.includes(taskId)) {
        return {
          ...prevState,
          selectedTasks: prevState.selectedTasks.filter((id) => id !== taskId),
        };
      } else {
        return {
          ...prevState,
          selectedTasks: [...prevState.selectedTasks, taskId],
        };
      }
    });
  };

  // Handle select all tasks
  const handleSelectAll = () => {
    setState((prevState) => {
      if (prevState.selectedTasks.length === tasks.length) {
        return { ...prevState, selectedTasks: [] };
      } else {
        return { ...prevState, selectedTasks: tasks.map((task) => task.id) };
      }
    });
  };

  // Handle search
  const handleSearch = (term: string) => {
    setState({ ...state, searchTerm: term });
  };

  // Handle filter changes
  const handleFilterChange = (type: "primary" | "owner", value: string) => {
    setState({
      ...state,
      filterOptions: {
        ...state.filterOptions,
        [type]: value,
      },
    });
  };

  // Handle task filter
  const handleTaskFilter = (filter: TaskFilter) => {
    setState({ ...state, selectedFilter: filter });
  };

  // Handle task status toggle
  const handleTaskStatusToggle = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setState({ ...state, currentPage: page });
  };

  // Handle items per page change
  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setState({ ...state, itemsPerPage: itemsPerPage, currentPage: 1 });
  };

  // Calculate pagination
  const indexOfLastTask = state.currentPage * state.itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - state.itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle task edit modal
  const openTaskEditModal = (task: Task) => {
    setState({ ...state, showTaskEditModal: true, currentTask: task });
  };

  const closeTaskEditModal = () => {
    setState({ ...state, showTaskEditModal: false, currentTask: null });
  };

  const handleSaveTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
    closeTaskEditModal();
  };

  // Handle new task
  const handleNewTask = () => {
    const newTask: Task = {
      id: `task-${tasks.length + 1}`,
      title: "",
      completed: false,
      dueDate: "29/06/2023",
      dueTime: "15:10:50",
      email: "",
      opportunity: "",
      status: "Appel",
      associatedContact: {
        id: "",
        name: "",
      },
      owner: {
        id: "owner-1",
        name: "Sébastien Hanouna",
        avatar: "/assets/images/avatar.jpg",
      },
      creationDate: "29/06/2023",
      creationTime: "15:10:50",
    };
    setState({ ...state, showTaskEditModal: true, currentTask: newTask });
  };

  return (
    <div className="task">
      <div className="app-container">
        <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />

        <div className="content-wrapper">
          <Header username="Sébastien Hanouna" role="CEO, Admin" />

          <main>
            <div className="main-content">
              <ActionBar
                tasksCount={tasks.length}
                onSearch={handleSearch}
                searchTerm={state.searchTerm}
                filterOptions={{
                  primary: [{ label: "Plus de filtre", value: "" }],
                  owner: [{ label: "Tout le monde", value: "" }],
                }}
                selectedFilters={state.filterOptions}
                onFilterChange={handleFilterChange}
                onNewTask={handleNewTask}
              />

              <TasksFilter
                selectedFilter={state.selectedFilter}
                onFilterChange={handleTaskFilter}
              />

              <TasksTable
                tasks={currentTasks}
                selectedTasks={state.selectedTasks}
                onTaskSelect={handleTaskSelect}
                onSelectAll={handleSelectAll}
                allTasksSelected={
                  state.selectedTasks.length === tasks.length &&
                  tasks.length > 0
                }
                onTaskStatusToggle={handleTaskStatusToggle}
                onTaskEdit={openTaskEditModal}
              />

              <Pagination
                currentPage={state.currentPage}
                itemsPerPage={state.itemsPerPage}
                totalItems={tasks.length}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            </div>
          </main>
        </div>

        {/* Task Edit Modal */}
        {state.showTaskEditModal && state.currentTask && (
          <TaskEditModal
            task={state.currentTask}
            onClose={closeTaskEditModal}
            onSave={handleSaveTask}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
