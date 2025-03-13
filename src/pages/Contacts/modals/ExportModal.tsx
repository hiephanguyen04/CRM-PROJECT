// src/pages/Contacts/modals/ExportModal.tsx
import React, { useState } from "react";

interface ExportModalProps {
  onClose: () => void;
  onExport: (format: string, filename: string, options: string[]) => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ onClose, onExport }) => {
  const [format, setFormat] = useState("xlsx");
  const [filename, setFilename] = useState("");
  const [exportOption, setExportOption] = useState("default");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const handleFieldToggle = (field: string) => {
    setSelectedFields((prev) => {
      if (prev.includes(field)) {
        return prev.filter((f) => f !== field);
      } else {
        return [...prev, field];
      }
    });
  };

  const handleExport = () => {
    const options = exportOption === "default" ? ["default"] : selectedFields;
    onExport(format, filename, options);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container modal-md">
        <div className="modal-header">
          <div className="modal-title">Exporter les résultats</div>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="modal-content">
          <div className="export-section">
            <h3>Choisir un format pour l'exportation</h3>
            <div className="format-options">
              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="xlsx"
                  checked={format === "xlsx"}
                  onChange={() => setFormat("xlsx")}
                />
                <span className="radio-label">XLSX (Excel)</span>
              </label>
              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="csv"
                  checked={format === "csv"}
                  onChange={() => setFormat("csv")}
                />
                <span className="radio-label">
                  CSV (valeurs séparées par des virgules)
                </span>
              </label>
            </div>

            <div className="export-info">
              Tous les 88 éléments seront exportés.
            </div>
          </div>

          <div className="export-section">
            <h3>
              Nom de l'exportation{" "}
              <span className="optional">(facultatif)</span>
            </h3>
            <div className="filename-input">
              <input
                type="text"
                placeholder="Nom de l'exportation (il s'agit du nom du fichier exporté)"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
              />
            </div>
          </div>

          <div className="export-section">
            <h3>Sélectionnez les fichiers à exporter</h3>
            <div className="export-options">
              <label className="export-option">
                <input
                  type="radio"
                  name="exportOption"
                  value="default"
                  checked={exportOption === "default"}
                  onChange={() => setExportOption("default")}
                />
                <span className="radio-label">Champs par défaut</span>
              </label>
              <label className="export-option">
                <input
                  type="radio"
                  name="exportOption"
                  value="custom"
                  checked={exportOption === "custom"}
                  onChange={() => setExportOption("custom")}
                />
                <span className="radio-label">Autres champs</span>
              </label>

              {exportOption === "custom" && (
                <div className="custom-fields">
                  <label className="field-option">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes("tags")}
                      onChange={() => handleFieldToggle("tags")}
                    />
                    <span>Étiquettes</span>
                  </label>
                  <label className="field-option">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes("lists")}
                      onChange={() => handleFieldToggle("lists")}
                    />
                    <span>Liste</span>
                  </label>
                  <label className="field-option">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes("customFields")}
                      onChange={() => handleFieldToggle("customFields")}
                    />
                    <span>Champs personnalisés</span>
                  </label>
                  <label className="field-option">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes("accounts")}
                      onChange={() => handleFieldToggle("accounts")}
                    />
                    <span>Comptes</span>
                  </label>
                  <label className="field-option">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes("score")}
                      onChange={() => handleFieldToggle("score")}
                    />
                    <span>Score</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button className="btn-export" onClick={handleExport}>
            Exportation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
