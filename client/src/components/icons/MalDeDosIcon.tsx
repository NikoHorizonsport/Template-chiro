import { forwardRef } from "react";
import malDeDosImg from "@assets/Icone_mal_de_dos_1771863581249.png";

export const MalDeDosIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <image href={malDeDosImg} x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{ mixBlendMode: "multiply" }} />
    </svg>
  )
);

MalDeDosIcon.displayName = "MalDeDosIcon";
