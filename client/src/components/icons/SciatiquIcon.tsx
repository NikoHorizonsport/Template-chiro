import { forwardRef } from "react";
import sciatiquImg from "@assets/Icone_sciatique_1771863963469.png";

export const SciatiquIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={sciatiquImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{ mixBlendMode: "multiply" }} />
    </svg>
  )
);

SciatiquIcon.displayName = "SciatiquIcon";
