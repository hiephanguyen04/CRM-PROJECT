// src/pages/Opportunities/components/OpportunityList.tsx
import React from "react";
import { Opportunity } from "../../../types/opportunity.types";

interface OpportunityListProps {
  opportunities: Opportunity[];
  selectedOpportunities: string[];
  onSelectOpportunity: (id: string) => void;
  onSelectAll: () => void;
  phaseColors: Record<string, string>;
}

const OpportunityList: React.FC<OpportunityListProps> = ({
  opportunities,
  selectedOpportunities,
  onSelectOpportunity,
  onSelectAll,
  phaseColors,
}) => {
  const isClosingDateOverdue = (dateStr: string | undefined) => {
    if (!dateStr || dateStr === "--/--/----") return false;

    // Parse date in format DD/MM/YYYY
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    return date < new Date();
  };

  return (
    <div className="opportunities-table">
      <table>
        <thead>
          <tr>
            <th className="checkbox-col">
              <input
                type="checkbox"
                checked={
                  selectedOpportunities.length === opportunities.length &&
                  opportunities.length > 0
                }
                onChange={onSelectAll}
              />
            </th>
            <th className="name-col">Nom de la transaction</th>
            <th className="phase-col">Phase</th>
            <th className="tag-col">Étiquette</th>
            <th className="organization-col">Organisation</th>
            <th className="contact-col">Contact</th>
            <th className="owner-col">Responsable</th>
            <th className="value-col">Valeur</th>
            <th className="closing-col">Date closing</th>
            <th className="actions-col"></th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opportunity) => (
            <tr key={opportunity.id} className="opportunity-row">
              <td className="checkbox-col">
                <input
                  type="checkbox"
                  checked={selectedOpportunities.includes(opportunity.id)}
                  onChange={() => onSelectOpportunity(opportunity.id)}
                />
              </td>
              <td className="name-col">{opportunity.name}</td>
              <td className="phase-col">
                <div
                  className={`phase-badge ${phaseColors[opportunity.phase]}`}
                >
                  {opportunity.phase}
                </div>
              </td>
              <td className="tag-col">
                <div className="tags">
                  {opportunity.tags.map((tag) => (
                    <span key={tag} className={`tag ${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="organization-col">{opportunity.organization}</td>
              <td className="contact-col">{opportunity.contact}</td>
              <td className="owner-col">
                <div className="owner">
                  {opportunity.owner.avatar ? (
                    <img
                      src={opportunity.owner.avatar}
                      alt={`${opportunity.owner.name} Avatar`}
                      className="owner-avatar"
                    />
                  ) : (
                    <div className="owner-avatar-placeholder">
                      {opportunity.owner.name.charAt(0)}
                    </div>
                  )}
                  <span>{opportunity.owner.name}</span>
                </div>
              </td>
              <td className="value-col">{opportunity.value}€</td>
              <td className="closing-col">
                {opportunity.closingDate ? (
                  <div
                    className={`closing-date ${
                      isClosingDateOverdue(opportunity.closingDate)
                        ? "overdue"
                        : ""
                    }`}
                  >
                    {opportunity.closingDate}
                  </div>
                ) : (
                  <span className="no-date">--/--/----</span>
                )}
              </td>
              <td className="actions-col">
                <button className="edit-button">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="delete-button">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div className="per-page">
          <span>Éléments par page</span>
          <select defaultValue="25">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="page-info">
          1-25 sur {opportunities.length} éléments
        </div>

        <div className="page-controls">
          <button className="page-button first">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="page-button prev">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div className="page-number">
            <input type="text" defaultValue="01" />
            <span>de 50</span>
          </div>

          <button className="page-button next">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="page-button last">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityList;
