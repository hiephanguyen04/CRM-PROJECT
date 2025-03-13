// src/pages/Contacts/modals/EditListModal.tsx
import React, { useEffect, useState } from "react";
import { List } from "../../../types/contacts.types";

interface EditListModalProps {
  list: List;
  onClose: () => void;
  onSave: (id: string, name: string) => void;
}

const EditListModal: React.FC<EditListModalProps> = ({
  list,
  onClose,
  onSave,
}) => {
  const [listName, setListName] = useState(list.name);

  useEffect(() => {
    setListName(list.name);
  }, [list]);

  const handleSave = () => {
    if (listName.trim()) {
      onSave(list.id, listName.trim());
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
            Modifier liste
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

export default EditListModal;
