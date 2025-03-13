// src/config/mockData.ts
import { Opportunity, Tag, Task } from "../models/types";
import { Contact, FilterOption, List } from "../types/contacts.types";

export const contactsData: Contact[] = Array(100)
  .fill(null)
  .map((_, index) => ({
    id: `contact-${index + 1}`,
    name: `Romain Gillig`,
    type: "Particulier",
    email: "romain@gillig.studio",
    phone: "06 88 65 26 87",
    opportunity: "Formation 3D",
    owner: {
      name: "Sébastien",
      avatar: "/assets/images/avatar.jpg",
    },
    tags: ["BTP", "BtoB"],
  }));

export const filterOptions: { primary: FilterOption[]; owner: FilterOption[] } =
  {
    primary: [{ label: "Plus de filtre", value: "" }],
    owner: [{ label: "Tout le monde", value: "" }],
  };

export const listsData: List[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    id: `list-${index + 1}`,
    name: "Liste",
    contactCount: 165,
  }));

export const tagsData: Tag[] = [
  { id: "tag-1", name: "Étiquette 1", color: "#3B82F6", contactCount: 165 },
  { id: "tag-2", name: "Étiquette 2", color: "#10B981", contactCount: 165 },
  { id: "tag-3", name: "Étiquette 3", color: "#059669", contactCount: 165 },
  { id: "tag-4", name: "Étiquette 4", color: "#06B6D4", contactCount: 165 },
  { id: "tag-5", name: "Étiquette 5", color: "#FBBF24", contactCount: 165 },
  { id: "tag-6", name: "Étiquette 6", color: "#EF4444", contactCount: 165 },
];

export const colorOptions = [
  "#EF4444",
  "#F87171",
  "#FCA5A5",
  "#B91C1C",
  "#7F1D1D",
  "#991B1B",
  "#3B82F6",
  "#60A5FA",
  "#93C5FD",
  "#1E40AF",
  "#1E3A8A",
  "#2563EB",
  "#10B981",
  "#34D399",
  "#6EE7B7",
  "#065F46",
  "#064E3B",
  "#059669",
  "#FBBF24",
  "#FCD34D",
  "#FDE68A",
  "#92400E",
  "#78350F",
  "#D97706",
  "#06B6D4",
  "#22D3EE",
  "#67E8F9",
  "#0E7490",
  "#164E63",
  "#0891B2",
];
// Mock users with password for authentication
export const users = [
  {
    id: "1",
    email: "sebastien@metaforma.com",
    password: "password123", // In a real app, this would be hashed
    fullName: "Sébastien Hanouna",
    role: "admin",
    position: "CEO, Admin",
    avatar: "/path/to/avatar.jpg",
  },
  // Add more users...
];

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Romain Gillig",
    email: "romain@gillig.studio",
    phone: "06 88 65 26 87",
    type: "Particulier",
    opportunity: "Formation 3D",
    assignedTo: "1", // Sébastien's ID
    tags: ["BTP", "BtoB"],
    createdAt: "2023-06-29T15:10:50",
  },
  // Add more contacts...
];

export const opportunities: Opportunity[] = [
  {
    id: "1",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Non traité",
    value: 1500,
    assignedTo: "1", // Sébastien's ID
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "2",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Injoignable",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "3",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Closing en cours",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "4",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Gagné",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: null,
  },
  {
    id: "5",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Perdu",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "6",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "En négociation",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "7",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Non traité",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "8",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Injoignable",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "9",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Closing en cours",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
  {
    id: "10",
    name: "Affaire Romain",
    contact: "Romain Gillig",
    organization: "Studio Gillig",
    phase: "Gagné",
    value: 1500,
    assignedTo: "1",
    tags: ["BTP", "BtoB"],
    closingDate: "2023-06-29",
  },
];

export const tasks: Task[] = [
  {
    id: "1",
    title: "Titre tâche",
    type: "Appel",
    dueDate: "2023-06-29T15:10:50",
    contact: "1", // Romain's ID
    assignedTo: "1", // Sébastien's ID
    completed: false,
    createdAt: "2023-06-29T15:10:50",
  },
  // Add more tasks...
];

export const tags: Tag[] = [
  {
    id: "1",
    name: "Étiquette 1",
    color: "#0066FF", // Blue
    contactCount: 165,
  },
  // Add more tags...
];
