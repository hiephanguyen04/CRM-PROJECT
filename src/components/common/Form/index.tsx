// src/components/common/Form/Input.tsx
import React, { InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

/**
 * Composant d'entrée réutilisable
 */
const Input: React.FC<InputProps> = ({
  prefix,
  suffix,
  size = "md",
  error = false,
  className = "",
  clearable = false,
  onClear,
  ...props
}) => {
  const hasValue = props.value !== undefined && props.value !== "";

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div
      className={`
      input-wrapper 
      input-${size} 
      ${error ? "input-error" : ""} 
      ${className}
      ${prefix ? "has-prefix" : ""}
      ${suffix || (clearable && hasValue) ? "has-suffix" : ""}
    `}
    >
      {prefix && <div className="input-prefix">{prefix}</div>}

      <input className="input-control" {...props} />

      {(suffix || (clearable && hasValue)) && (
        <div className="input-suffix">
          {suffix}

          {clearable && hasValue && (
            <button
              type="button"
              className="input-clear-button"
              onClick={handleClear}
              tabIndex={-1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
