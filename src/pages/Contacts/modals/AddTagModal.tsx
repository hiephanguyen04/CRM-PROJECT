// src/pages/Contacts/modals/AddTagModal.tsx
import { colorOptions } from '@/config/mockData';
import React, { useState } from 'react';


interface AddTagModalProps {
  onClose: () => void;
  onSave: (name: string, color: string) => void;
}

const AddTagModal: React.FC<AddTagModalProps> = ({ onClose, onSave }) => {
  const [tagName, setTagName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleSave = () => {
    if (tagName.trim()) {
      onSave(tagName.trim(), selectedColor);
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
            Ajouter étiquette
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
              placeholder="Votre étiquette"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              className="form-input"
            />
            <button 
              className="form-input-clear" 
              onClick={() => setTagName('')}
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
              <span>Ajouter une étiquette</span>
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
            disabled={!tagName.trim()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTagModal;