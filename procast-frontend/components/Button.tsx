import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const buttonType = () => {
    if (variant === "primary") {
      return "text-white bg-primary-100 border-transparent";
    } else if (variant === "secondary") {
      return "text-primary-100 border-primary-100";
    }
  };

  if (loading) {
    return (
      <button
        disabled={true}
        type={type}
        className={`flex items-center gap-2 cursor-pointer justify-center py-2 px-4 font-medium w-full text-base  rounded-lg border   ${buttonType()}`}
      >
        <span className="animate-spin">
          <AiOutlineLoading3Quarters />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`flex items-center gap-2 cursor-pointer justify-center py-2 px-4 font-medium w-full text-sm  rounded-lg border ${buttonType()}`}
    >
      {children}
    </button>
  );
}
