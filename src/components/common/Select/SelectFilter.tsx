// src/components/common/Form/Select.tsx
import React, { ReactNode, SelectHTMLAttributes } from "react";
import "./SelectFilter.css";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  size?: "sm" | "md" | "lg";
  error?: boolean;
  prefix?: ReactNode;
  placeholder?: string;
}

/**
 * Composant de sélection réutilisable
 */
const Select: React.FC<SelectProps> = ({
  options,
  size = "md",
  error = false,
  className = "",
  prefix,
  placeholder,
  ...props
}) => {
  return (
    <div
      className={`
      select-wrapper 
      select-${size} 
      ${error ? "select-error" : ""} 
      ${className}
      ${prefix ? "has-prefix" : ""}
    `}
    >
      {prefix && <div className="select-prefix">{prefix}</div>}

      <select className="select-control" {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="select-arrow">
        <svg width="10" height="6" viewBox="0 0 10 6">
          <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
