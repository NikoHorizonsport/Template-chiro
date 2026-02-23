import { forwardRef } from "react";
import lombalgieImg from "@assets/Icone_lombalgie_1771864375324.png";

export const LombalgieIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={lombalgieImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{ mixBlendMode: "multiply" }} />
    </svg>
  )
);

LombalgieIcon.displayName = "LombalgieIcon";
