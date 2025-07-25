export * from "./auth";

import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  secondaryfill?: string;
};
