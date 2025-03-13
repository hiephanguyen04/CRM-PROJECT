// src/models/types.ts

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'user';
  avatar?: string;
  position?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'Particulier' | 'Enterprise'; 
  opportunity?: string;
  assignedTo?: string;
  tags: string[];
  createdAt: string;
}

export interface Opportunity {
  id: string;
  name: string;
  contact: string;
  organization: string;
  phase: 'Non traité' | 'Injoignable' | 'Closing en cours' | 'Gagné' | 'Perdu' | 'En négociation';
  value: number;
  assignedTo: string;
  tags: string[];
  closingDate: string | null;
}

export interface Task {
  id: string;
  title: string;
  type: 'Appel' | 'E-mail' | 'À faire';
  dueDate: string;
  contact: string;
  assignedTo: string;
  completed: boolean;
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  contactCount: number;
}