// src/pages/Contacts/modals/TagsModal.tsx
import React, { useState } from "react";
import { Tag } from "../../../types/contacts.types";

interface TagsModalProps {
  tags: Tag[];
  onClose: () => void;
  onAddTag: () => void;
  onEditTag: (tagId: string) => void;
}

const TagsModal: React.FC<TagsModalProps> = ({
  tags,
  onClose,
  onAddTag,
  onEditTag,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditTag = (tagId: string) => {
    onEditTag(tagId);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
                fill="#EA580C"
              />
            </svg>
            Étiquettes
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

        <div className="modal-search">
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                fill="currentColor"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="modal-add-button" onClick={onAddTag}>
          <div className="add-icon">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                fill="currentColor"
              />
            </svg>
          </div>
          Ajouter une étiquette
        </button>

        <div className="modal-content">
          <div className="modal-table-header">
            <div className="modal-table-column-name">Nom de l'étiquette</div>
            <div className="modal-table-column-count">Contact</div>
          </div>

          <div className="modal-table-body">
            {filteredTags.map((tag) => (
              <div key={tag.id} className="modal-table-row">
                <div className="modal-table-column-name">
                  <span
                    className="tag-color-indicator"
                    style={{ backgroundColor: tag.color }}
                  ></span>
                  {tag.name}
                </div>
                <div className="modal-table-column-count">
                  {tag.contactCount}
                </div>
                <div className="modal-table-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEditTag(tag.id)}
                  >
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsModal;
