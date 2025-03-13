// src/pages/Opportunities/components/CreateOpportunityModal.tsx
import React, { useState } from 'react';
import { Opportunity, OpportunityPhase } from '../../../types/opportunity.types';

interface CreateOpportunityModalProps {
  onClose: () => void;
  onSave: (opportunity: Opportunity) => void;
}

const CreateOpportunityModal: React.FC<CreateOpportunityModalProps> = ({
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    organization: '',
    pipeline: 'Pipeline',
    phase: 'Non traité' as OpportunityPhase,
    amount: '1500',
    closingDate: '29/06/2023',
    closingTime: '12:30',
    phone: '+33 6 88 65 26 87',
    email: 'romain@gillig.studio',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new opportunity from form data
    const newOpportunity: Opportunity = {
      id: `opp-${Date.now()}`,
      name: formData.name || 'Affaire Romain',
      organization: formData.organization || 'Studio Gillig',
      contact: formData.contact || 'Romain Gillig',
      phase: formData.phase,
      value: parseInt(formData.amount) || 1500,
      closingDate: formData.closingDate,
      email: formData.email,
      phone: formData.phone,
      owner: {
        id: 'owner-1',
        name: 'Sébastien',
        avatar: '/assets/images/avatar.jpg',
      },
      tags: ['BTP', 'BtoB'],
      score: 10
    };
    
    onSave(newOpportunity);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container opportunity-modal">
        <div className="modal-header">
          <h2>Create new opportunity</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="opportunity-form">
          <div className="form-section">
            <label className="form-label">Nom de la opportunity</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Nom de la transaction"
            />
          </div>

          <div className="form-row">
            <div className="form-section half">
              <label className="form-label">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="form-input"
                placeholder="Romain Gillig"
              />
            </div>

            <div className="form-section half">
              <label className="form-label">Organisation</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="form-input"
                placeholder="Studio Gillig"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-section half">
              <label className="form-label">Choix du pipeline</label>
              <div className="select-wrapper">
                <select
                  name="pipeline"
                  value={formData.pipeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Pipeline">Pipeline</option>
                </select>
                <svg
                  className="select-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="form-section half">
              <label className="form-label">Choix de la phase</label>
              <div className="select-wrapper phase-select">
                <select
                  name="phase"
                  value={formData.phase}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Non traité">Non traité</option>
                  <option value="Injoignable">Injoignable</option>
                  <option value="Closing en cours">Closing en cours</option>
                  <option value="En cours">En cours</option>
                  <option value="En négociation">En négociation</option>
                  <option value="Gagné">Gagné</option>
                  <option value="Perdu">Perdu</option>
                </select>
                <div className="phase-indicator non-traite"></div>
                <svg
                  className="select-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-section">
            <label className="form-label">Montant</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-input"
              placeholder="1500€"
            />
          </div>

          <div className="form-row">
            <div className="form-section half">
              <label className="form-label">Date de fermeture</label>
              <input
                type="text"
                name="closingDate"
                value={formData.closingDate}
                onChange={handleChange}
                className="form-input"
                placeholder="29/06/2023"
              />
            </div>

            <div className="form-section half">
              <label className="form-label">&nbsp;</label>
              <input
                type="text"
                name="closingTime"
                value={formData.closingTime}
                onChange={handleChange}
                className="form-input"
                placeholder="12:30"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-section half">
              <label className="form-label">Téléphone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+33 6 88 65 26 87"
              />
            </div>

            <div className="form-section half">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="romain@gillig.studio"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="btn-create">
              Créer la transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOpportunityModal;