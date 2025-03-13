// src/pages/Opportunities/components/PipelineConfig.tsx
import React, { useState } from "react";

interface PipelineConfigProps {
  onCancel: () => void;
}

interface PipelineStage {
  name: string;
  probability: string;
  duration: number;
  enabled: boolean;
}

const PipelineConfig: React.FC<PipelineConfigProps> = ({ onCancel }) => {
  const [pipelineName, setPipelineName] = useState("Pipeline");
  const [showSuccess, setShowSuccess] = useState(true);

  const [stages, setStages] = useState<PipelineStage[]>([
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: true,
    },
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: false,
    },
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: true,
    },
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: true,
    },
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: true,
    },
    {
      name: "Non traité",
      probability: "Non traité",
      duration: 20,
      enabled: true,
    },
  ]);

  const handleSave = () => {
    // Save pipeline configuration
    onCancel();
  };

  const toggleStageEnabled = (index: number) => {
    const newStages = [...stages];
    newStages[index].enabled = !newStages[index].enabled;
    setStages(newStages);
  };

  const handleDurationChange = (index: number, value: string) => {
    const duration = parseInt(value, 10);
    if (!isNaN(duration)) {
      const newStages = [...stages];
      newStages[index].duration = duration;
      setStages(newStages);
    }
  };

  return (
    <div className="pipeline-config">
      <div className="pipeline-header">
        <div className="pipeline-name-container">
          <label>Nom du Pipeline</label>
          <input
            type="text"
            className="pipeline-name-input"
            value={pipelineName}
            onChange={(e) => setPipelineName(e.target.value)}
          />
        </div>

        <div className="pipeline-success-toggle">
          <label>Probabilités de succès de l'affaire</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={showSuccess}
              onChange={() => setShowSuccess(!showSuccess)}
              id="success-toggle"
            />
            <label htmlFor="success-toggle"></label>
          </div>
        </div>

        <div className="pipeline-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Annuler
          </button>
          <button className="btn-create" onClick={handleSave}>
            Enregistrer
          </button>
        </div>
      </div>

      <div className="pipeline-stages">
        {stages.map((stage, index) => (
          <div className="pipeline-stage" key={index}>
            <div className="stage-header">
              <button className="stage-menu-button">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <h3 className="stage-title">Non traité</h3>
            </div>

            <div className="stage-form">
              <div className="stage-field">
                <label>Nom</label>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="stage-input"
                  value={stage.name}
                  onChange={(e) => {
                    const newStages = [...stages];
                    newStages[index].name = e.target.value;
                    setStages(newStages);
                  }}
                />
              </div>

              <div className="stage-field">
                <label>Probabilité</label>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="stage-input"
                  value={stage.probability}
                  onChange={(e) => {
                    const newStages = [...stages];
                    newStages[index].probability = e.target.value;
                    setStages(newStages);
                  }}
                />
              </div>

              <div className="stage-field">
                <label>Périmée dans (jours)</label>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="toggle-field">
                  <div className="toggle-switch small">
                    <input
                      type="checkbox"
                      checked={stage.enabled}
                      onChange={() => toggleStageEnabled(index)}
                      id={`stage-toggle-${index}`}
                    />
                    <label htmlFor={`stage-toggle-${index}`}></label>
                  </div>
                  <input
                    type="text"
                    className="stage-input small"
                    value={stage.duration.toString()}
                    onChange={(e) =>
                      handleDurationChange(index, e.target.value)
                    }
                    disabled={!stage.enabled}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineConfig;
