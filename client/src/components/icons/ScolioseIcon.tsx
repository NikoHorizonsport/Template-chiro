import { forwardRef } from "react";
import scolioseImg from "@assets/Icone_scoliose_1771862626367.png";

export const ScolioseIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={scolioseImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" />
    </svg>
  )
);

ScolioseIcon.displayName = "ScolioseIcon";
