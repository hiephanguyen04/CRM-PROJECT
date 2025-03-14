import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const FacebookIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0489 20V10.8777H15.1097L15.5689 7.32156H12.0489V5.05147C12.0489 4.0222 12.3336 3.32076 13.8112 3.32076L15.6928 3.31999V0.13923C15.3674 0.0969453 14.2505 0 12.9505 0C10.2359 0 8.37739 1.65697 8.37739 4.69927V7.32156H5.30737V10.8777H8.37739V20H12.0489Z"
        fill="white"
      />
    </svg>
  );
};
