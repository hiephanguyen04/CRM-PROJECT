// src/types/contacts.types.ts

export interface Contact {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  opportunity: string;
  owner: {
    name: string;
    avatar?: string;
  };
  tags: string[];
}

export type TabType = 'contacts' | 'lists' | 'tags' | 'opportunities' | 'tasks';

export interface FilterOption {
  label: string;
  value: string;
}

export interface ContactsState {
  selectedContacts: string[];
  activeTab: TabType;
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showListsModal: boolean;
  showTagsModal: boolean;
  showAddListModal: boolean;
  showEditListModal: boolean;
  showAddTagModal: boolean;
  showEditTagModal: boolean;
  showExportModal: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface List {
  id: string;
  name: string;
  contactCount: number;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  contactCount: number;
}