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
  prefixIcon?: ReactNode;
  placeholder?: string;
}
const Select: React.FC<SelectProps> = ({
  options,
  size = "md",
  error = false,
  className = "",
  prefixIcon,
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
      ${prefixIcon ? "has-prefix" : ""}
    `}
    >
      {prefixIcon && <div className="select-prefix">{prefixIcon}</div>}

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
        <ArowIcon />
      </div>
    </div>
  );
};

export default Select;
