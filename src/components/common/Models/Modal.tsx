// src/components/common/Modal/Modal.tsx
import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  actions?: ReactNode;
}

/**
 * Composant modal réutilisable
 */
const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  children,
  size = "md",
  actions,
}) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        // Fermer uniquement si l'utilisateur clique sur l'overlay et non sur le contenu
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`modal-container modal-${size}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="modal-content">{children}</div>

        {actions && <div className="modal-footer">{actions}</div>}
      </div>
    </div>
  );
};

export default Modal;
