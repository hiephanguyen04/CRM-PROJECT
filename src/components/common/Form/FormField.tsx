// src/components/common/Form/FormField.tsx
import React, { ReactNode } from 'react';
import './FormField.css';

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  helper?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  tooltip?: string;
}

/**
 * Conteneur réutilisable pour les champs de formulaire
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  helper,
  required = false,
  children,
  className = '',
  tooltip,
}) => {
  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <div className="form-field-label">
          <label htmlFor={htmlFor}>
            {label}
            {required && <span className="required-mark">*</span>}
          </label>
          
          {tooltip && (
            <div className="tooltip-icon" title={tooltip}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" 
                  fill="currentColor" 
                />
              </svg>
            </div>
          )}
        </div>
      )}
      
      <div className="form-field-control">
        {children}
      </div>
      
      {(error || helper) && (
        <div className={`form-field-message ${error ? 'error' : 'helper'}`}>
          {error || helper}
        </div>
      )}
    </div>
  );
};

export default FormField;