// src/types/opportunity.types.ts

export type OpportunityPhase =
  | "Non traité"
  | "Injoignable"
  | "Closing en cours"
  | "En négociation"
  | "En cours"
  | "Gagné"
  | "Perdu";

export interface Opportunity {
  id: string;
  name: string;
  organization: string;
  contact: string;
  phase: OpportunityPhase;
  value: number;
  closingDate?: string;
  phone?: string;
  email?: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  score?: number;
  reason?: string;
}

export interface OpportunitiesState {
  selectedOpportunities: string[];
  viewMode: "list" | "kanban";
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showCreateModal: boolean;
  showEditModal: boolean;
  currentOpportunity: Opportunity | null;
  pipelineMode: boolean;
}

export const phaseColors: Record<string, string> = {
  "Non traité": "yellow",
  Injoignable: "orange",
  "Closing en cours": "blue",
  "En cours": "blue",
  "En négociation": "teal",
  Gagné: "green",
  Perdu: "red",
};
