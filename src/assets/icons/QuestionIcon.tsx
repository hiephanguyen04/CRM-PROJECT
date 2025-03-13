import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const QuestionIcon: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.12647 14.823C8.52516 15.9364 11.459 15.507 13.4388 13.5198C15.9671 10.983 15.9713 6.8667 13.4388 4.32495C10.9105 1.78882 6.80319 1.78882 4.27491 4.32495C2.29517 6.3121 1.86644 9.2552 2.97681 11.662C3.11901 12.0184 3.2297 12.3045 3.2297 12.5821C3.2297 13.3581 2.48362 14.319 2.981 14.8181C3.47839 15.3172 4.43604 14.5686 5.20524 14.5643C5.48126 14.5643 5.77199 14.6796 6.12647 14.823Z"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.69486 11.7026L8.69904 11.728"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.69522 10.0844C8.68752 9.49331 9.22349 9.24304 9.62208 9.01458C10.1076 8.74609 10.4368 8.31798 10.4368 7.7247C10.4368 6.84538 9.72785 6.13965 8.85708 6.13965C7.9807 6.13965 7.27733 6.84538 7.27733 7.7247"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
