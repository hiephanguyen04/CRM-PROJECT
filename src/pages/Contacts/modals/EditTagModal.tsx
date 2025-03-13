// src/pages/Contacts/modals/EditTagModal.tsx
import React, { useEffect, useState } from "react";
import { Tag } from "../../../types/contacts.types";
import { colorOptions } from "@/config/mockData";

interface EditTagModalProps {
  tag: Tag;
  onClose: () => void;
  onSave: (id: string, name: string) => void;
}

const EditTagModal: React.FC<EditTagModalProps> = ({
  tag,
  onClose,
  onSave,
}) => {
  const [tagName, setTagName] = useState(tag.name);
  const [selectedColor, setSelectedColor] = useState(tag.color);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    setTagName(tag.name);
    setSelectedColor(tag.color);
  }, [tag]);

  const handleSave = () => {
    if (tagName.trim()) {
      onSave(tag.id, tagName.trim());
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setShowColorPicker(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container modal-sm">
        <div className="modal-header">
          <div className="modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
                fill="#EA580C"
              />
            </svg>
            Modifier étiquette
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
            <div className="color-selector">
              <button
                className="color-button"
                style={{ backgroundColor: selectedColor }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              ></button>
            </div>
            <input
              type="text"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              className="form-input"
            />
            <button
              className="form-input-clear"
              onClick={() => setTagName("")}
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

          {showColorPicker && (
            <div className="color-picker">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                ></button>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button
            className="btn-save"
            onClick={handleSave}
            disabled={!tagName.trim()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTagModal;
