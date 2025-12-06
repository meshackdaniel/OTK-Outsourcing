"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useRef,
  useState,
  useEffect,
  MouseEvent as ReactMouseEvent,
  ReactElement,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

interface DropdownProps {
  title: ReactNode; // ← Fully supports <div>, <span>, icons, images, etc.
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Dropdown({
  title,
  children,
  className = "",
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Click outside to close
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

  return (
    <div ref={ref} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button – accepts any ReactNode as title */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`
          flex items-center text-gray-700 gap-3 rounded-lg px-4 py-2.5 text-sm font-medium
          transition-all focus:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500 focus-visible:ring-offset-2 justify-between  w-full
          ${
            disabled
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-gray-100 active:bg-gray-200"
          }
        `}
      >
        {/* Rich title goes here */}
        <span>{title}</span>

        {/* Chevron with smooth rotation */}
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </motion.span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="ms-8" role="menu">
              {Children.map(children, (child) => {
                if (!isValidElement(child)) return child;

                // ✅ Narrow type here
                const element = child as ReactElement<{
                  onClick?: (e: ReactMouseEvent<HTMLElement>) => void;
                }>;

                const handleClick = (e: ReactMouseEvent<HTMLElement>) => {
                  if (typeof element.props.onClick === "function") {
                    element.props.onClick(e);
                  }
                  if (!e.defaultPrevented) {
                    setIsOpen(false);
                  }
                };

                return cloneElement(element, {
                  onClick: element.props.onClick ? handleClick : undefined,
                });
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
