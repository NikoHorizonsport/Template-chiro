import { forwardRef } from "react";
import arthroseImg from "@assets/Icone_arthrose_1771862626330.png";

export const ArthroseIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={arthroseImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{ mixBlendMode: "multiply" }} />
    </svg>
  )
);

ArthroseIcon.displayName = "ArthroseIcon";
