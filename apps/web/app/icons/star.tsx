import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Star({ fill = "currentColor", secondaryfill, ...props }: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill={fill}>
        <path
          d="M13.4814 16.29C13.3623 16.29 13.2421 16.2617 13.1328 16.2041L8.99998 14.0322L4.86718 16.2041C4.61428 16.3364 4.30757 16.314 4.07717 16.147C3.84667 15.979 3.73148 15.6944 3.77928 15.4131L4.56928 10.8125L1.22648 7.55419C1.02238 7.35499 0.948182 7.05659 1.03698 6.78519C1.12488 6.51369 1.35928 6.31599 1.64248 6.27489L6.26158 5.60349L8.32697 1.41799C8.58087 0.906285 9.41878 0.906285 9.67268 1.41799L11.7381 5.60349L16.3572 6.27489C16.6404 6.31589 16.8748 6.51369 16.9627 6.78519C17.0516 7.05669 16.9773 7.35499 16.7732 7.55419L13.4304 10.8125L14.2204 15.4131C14.2683 15.6943 14.153 15.979 13.9225 16.147C13.7916 16.2417 13.6367 16.29 13.4814 16.29Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Star;
