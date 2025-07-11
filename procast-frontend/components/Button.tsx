import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const buttonType = () => {
    if (variant === "primary") {
      return "text-white bg-primary-100 border-transparent";
    } else if (variant === "secondary") {
      return "text-primary-100 border-primary-100";
    }
  };

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
