import { ReactNode } from "react";

interface DropdownItemProps {
  children: ReactNode; // ← Any JSX: icons, avatars, badges, multi-line, etc.
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  className?: string;
}

export function DropdownItem({
  children,
  onClick,
  disabled = false,
  className = "",
}: DropdownItemProps) {
  return (
    <div
      role="menuitem"
      onClick={disabled ? undefined : onClick}
      className={`
        flex cursor-pointer items-center gap-3 px-4 py-3 text-sm transition-colors
        ${
          disabled
            ? "cursor-not-allowed text-gray-400"
            : "hover:bg-gray-100 text-gray-900"
        } ${className}
      `}
    >
      {children}
    </div>
  );
}
