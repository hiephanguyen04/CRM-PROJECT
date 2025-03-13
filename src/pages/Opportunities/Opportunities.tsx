// src/pages/Opportunities/Opportunities.tsx
import React, { useState } from "react";
import { generateOpportunities } from "../../data/opportunityMockData";
import {
  OpportunitiesState,
  Opportunity,
  phaseColors,
} from "../../types/opportunity.types";
import CreateOpportunityModal from "./components/CreateOpportunityModal";
import OpportunityKanban from "./components/OpportunityKanban";
import OpportunityList from "./components/OpportunityList";
import PipelineConfig from "./components/PipelineConfig";

import "./Opportunities.css";

interface OpportunitiesProps {
  // onNavigate: (page: AppPage) => void;
}

const Opportunities: React.FC<OpportunitiesProps> = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(
    generateOpportunities()
  );
  const [activeMenuItem, setActiveMenuItem] = useState<string>("opportunities");

  const [state, setState] = useState<OpportunitiesState>({
    selectedOpportunities: [],
    viewMode: "kanban",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showCreateModal: false,
    showEditModal: false,
    currentOpportunity: null,
    pipelineMode: false,
  });

  // Filter opportunities based on search term
  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      opportunity.organization
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase()) ||
      opportunity.contact.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  // Calculate total value of all filtered opportunities
  const totalValue = filteredOpportunities.reduce(
    (sum, opportunity) => sum + opportunity.value,
    0
  );

  // Group opportunities by phase
  const opportunitiesByPhase = {
    "Non traité": filteredOpportunities.filter(
      (opp) => opp.phase === "Non traité"
    ),
    Injoignable: filteredOpportunities.filter(
      (opp) => opp.phase === "Injoignable"
    ),
    "Closing en cours": filteredOpportunities.filter(
      (opp) => opp.phase === "Closing en cours"
    ),
    "En cours": filteredOpportunities.filter((opp) => opp.phase === "En cours"),
    "En négociation": filteredOpportunities.filter(
      (opp) => opp.phase === "En négociation"
    ),
    Gagné: filteredOpportunities.filter((opp) => opp.phase === "Gagné"),
    Perdu: filteredOpportunities.filter((opp) => opp.phase === "Perdu"),
  };

  // Calculate total value per phase
  const calculatePhaseTotal = (phase: string) => {
    return opportunitiesByPhase[phase].reduce((sum, opp) => sum + opp.value, 0);
  };

  // Handle opportunity selection
  const handleOpportunitySelect = (opportunityId: string) => {
    setState((prev) => {
      if (prev.selectedOpportunities.includes(opportunityId)) {
        return {
          ...prev,
          selectedOpportunities: prev.selectedOpportunities.filter(
            (id) => id !== opportunityId
          ),
        };
      } else {
        return {
          ...prev,
          selectedOpportunities: [...prev.selectedOpportunities, opportunityId],
        };
      }
    });
  };

  // Handle select all opportunities
  const handleSelectAll = () => {
    if (state.selectedOpportunities.length === filteredOpportunities.length) {
      setState({ ...state, selectedOpportunities: [] });
    } else {
      setState({
        ...state,
        selectedOpportunities: filteredOpportunities.map(
          (opportunity) => opportunity.id
        ),
      });
    }
  };

  // Handle search term change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchTerm: e.target.value });
  };

  // Toggle view mode between list and kanban
  const toggleViewMode = (mode: "list" | "kanban") => {
    setState({ ...state, viewMode: mode });
  };

  // Open create opportunity modal
  const openCreateModal = () => {
    setState({ ...state, showCreateModal: true });
  };

  // Close create opportunity modal
  const closeCreateModal = () => {
    setState({ ...state, showCreateModal: false });
  };

  // Create new opportunity
  const handleCreateOpportunity = (opportunity: Opportunity) => {
    setOpportunities([opportunity, ...opportunities]);
    closeCreateModal();
  };

  // Toggle pipeline configuration mode
  const togglePipelineMode = () => {
    setState({ ...state, pipelineMode: !state.pipelineMode });
  };

  // Handle mass actions (selected opportunities)
  const handleMassAction = (
    action: "assign" | "lost" | "won" | "move" | "delete"
  ) => {
    switch (action) {
      case "assign":
        // Logic to assign selected opportunities
        break;
      case "lost":
        setOpportunities(
          opportunities.map((opp) =>
            state.selectedOpportunities.includes(opp.id)
              ? { ...opp, phase: "Perdu" }
              : opp
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
      case "won":
        setOpportunities(
          opportunities.map((opp) =>
            state.selectedOpportunities.includes(opp.id)
              ? { ...opp, phase: "Gagné" }
              : opp
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
      case "move":
        // Logic to move selected opportunities to a different phase
        break;
      case "delete":
        setOpportunities(
          opportunities.filter(
            (opp) => !state.selectedOpportunities.includes(opp.id)
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
    }
  };

  // Deselect all opportunities
  const deselectAll = () => {
    setState({ ...state, selectedOpportunities: [] });
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <main className="main-content opportunities-content">
          {state.pipelineMode ? (
            <PipelineConfig onCancel={togglePipelineMode} />
          ) : (
            <>
              <div className="opportunities-header">
                <button
                  className="action-button add-opportunity"
                  onClick={openCreateModal}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                      fill="currentColor"
                    />
                  </svg>
                  Ajout opportunité
                </button>

                <div className="opportunities-count">
                  {totalValue}€ • {filteredOpportunities.length} affaires
                </div>

                <div className="view-actions">
                  <button
                    className={`view-button ${
                      state.viewMode === "list" ? "active" : ""
                    }`}
                    onClick={() => toggleViewMode("list")}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button
                    className={`view-button ${
                      state.viewMode === "kanban" ? "active" : ""
                    }`}
                    onClick={() => toggleViewMode("kanban")}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div className="filter-actions">
                  <button className="filter-button">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                        fill="currentColor"
                      />
                    </svg>
                    Plus de filtre
                  </button>

                  <button className="filter-button">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                        fill="currentColor"
                      />
                    </svg>
                    Tout le monde
                  </button>

                  <div className="search-field">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        fill="currentColor"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Titre, contact, responsable..."
                      value={state.searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>

                  <button className="setting" onClick={togglePipelineMode}>
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {state.viewMode === "list" ? (
                <OpportunityList
                  opportunities={filteredOpportunities}
                  selectedOpportunities={state.selectedOpportunities}
                  onSelectOpportunity={handleOpportunitySelect}
                  onSelectAll={handleSelectAll}
                  phaseColors={phaseColors}
                />
              ) : (
                <OpportunityKanban
                  opportunitiesByPhase={opportunitiesByPhase}
                  phaseColors={phaseColors}
                  phaseTotals={Object.keys(opportunitiesByPhase).reduce(
                    (acc, phase) => {
                      acc[phase] = calculatePhaseTotal(phase);
                      return acc;
                    },
                    {} as Record<string, number>
                  )}
                />
              )}

              {state.selectedOpportunities.length > 0 &&
                state.viewMode === "list" && (
                  <div className="selection-actions">
                    <div className="selection-info">
                      {state.selectedOpportunities.length} élément(s)
                      sélectionné(s) •
                      <button className="deselect-button" onClick={deselectAll}>
                        tout désélectionner
                      </button>
                    </div>

                    <div className="selection-buttons">
                      <button
                        className="selection-action-button assign"
                        onClick={() => handleMassAction("assign")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            fill="currentColor"
                          />
                        </svg>
                        Me l'assigner
                      </button>

                      <button
                        className="selection-action-button lost"
                        onClick={() => handleMassAction("lost")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                            fill="currentColor"
                          />
                        </svg>
                        Perdu
                      </button>

                      <button
                        className="selection-action-button won"
                        onClick={() => handleMassAction("won")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="currentColor"
                          />
                        </svg>
                        Gagné
                      </button>

                      <button
                        className="selection-action-button move"
                        onClick={() => handleMassAction("move")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"
                            fill="currentColor"
                          />
                        </svg>
                        Déplacer vers
                      </button>

                      <button
                        className="selection-action-button delete"
                        onClick={() => handleMassAction("delete")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                            fill="currentColor"
                          />
                        </svg>
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
            </>
          )}
        </main>
      </div>

      {state.showCreateModal && (
        <CreateOpportunityModal
          onClose={closeCreateModal}
          onSave={handleCreateOpportunity}
        />
      )}
    </div>
  );
};

export default Opportunities;
