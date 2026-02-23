import { forwardRef } from "react";
import hernieImg from "@assets/hernie_discale_1771861735611.png";

export const HernieDiscaleIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={hernieImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" />
    </svg>
  )
);

HernieDiscaleIcon.displayName = "HernieDiscaleIcon";
