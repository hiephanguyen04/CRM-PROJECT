// src/pages/Contacts/modals/AddListModal.tsx
import React, { useState } from "react";

interface AddListModalProps {
  onClose: () => void;
  onSave: (name: string) => void;
}

const AddListModal: React.FC<AddListModalProps> = ({ onClose, onSave }) => {
  const [listName, setListName] = useState("");

  const handleSave = () => {
    if (listName.trim()) {
      onSave(listName.trim());
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container modal-sm">
        <div className="modal-header">
          <div className="modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
                fill="#EA580C"
              />
            </svg>
            Ajouter liste
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="modal-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Votre liste"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="form-input"
            />
            <button
              className="form-input-clear"
              onClick={() => setListName("")}
              tabIndex={-1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="form-group add-more">
            <div className="add-more-button">
              <div className="add-icon">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span>Ajouter une liste</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button
            className="btn-save"
            onClick={handleSave}
            disabled={!listName.trim()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListModal;
