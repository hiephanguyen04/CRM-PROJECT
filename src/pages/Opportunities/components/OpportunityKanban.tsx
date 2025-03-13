// src/pages/Opportunities/components/OpportunityKanban.tsx
import React from "react";
import { Opportunity } from "../../../types/opportunity.types";

interface OpportunityKanbanProps {
  opportunitiesByPhase: Record<string, Opportunity[]>;
  phaseColors: Record<string, string>;
  phaseTotals: Record<string, number>;
}

const OpportunityKanban: React.FC<OpportunityKanbanProps> = ({
  opportunitiesByPhase,
  phaseColors,
  phaseTotals,
}) => {
  const renderOpportunityCard = (opportunity: Opportunity) => {
    return (
      <div className="opportunity-card" key={opportunity.id}>
        {opportunity.closingDate &&
          opportunity.closingDate !== "--/--/----" && (
            <div className="card-date">{opportunity.closingDate}</div>
          )}
        <div className="card-title">{opportunity.name}</div>
        <div className="card-details">
          <div className="card-company">{opportunity.organization}</div>
          <div className="card-contact">{opportunity.contact}</div>
        </div>
        <div className="card-tags">
          {opportunity.tags.map((tag) => (
            <span key={tag} className={`card-tag ${tag}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-value">{opportunity.value}€</div>
          <div className="card-owner">
            {opportunity.owner.avatar ? (
              <img
                src={opportunity.owner.avatar}
                alt="Owner Avatar"
                className="card-owner-avatar"
              />
            ) : (
              <div className="owner-avatar-placeholder">
                {opportunity.owner.name.charAt(0)}
              </div>
            )}
            {opportunity.score && (
              <div className="owner-score">{opportunity.score}</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="kanban-container">
      {Object.keys(opportunitiesByPhase).map((phase) => (
        <div className="kanban-column" key={phase}>
          <div className={`column-header ${phaseColors[phase]}`}>
            <div className="column-title">
              <span className={`status-indicator ${phaseColors[phase]}`}></span>
              <span className="phase-name">{phase}</span>
              <span className="phase-count">
                {opportunitiesByPhase[phase].length}
              </span>
            </div>
            <div className="column-total">{phaseTotals[phase]}€</div>
          </div>
          <div className="column-cards">
            {opportunitiesByPhase[phase].map((opportunity) =>
              renderOpportunityCard(opportunity)
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpportunityKanban;
