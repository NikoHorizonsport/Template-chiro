import { forwardRef } from "react";
import cervicaleImg from "@assets/icone_cervicale_1771863435720.png";

export const CervicalesIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={cervicaleImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{ mixBlendMode: "multiply" }} />
    </svg>
  )
);

CervicalesIcon.displayName = "CervicalesIcon";
