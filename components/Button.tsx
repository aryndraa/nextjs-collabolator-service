import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
};

export default function Button({
  children,
  onClick,
  type = "primary",
}: ButtonProps) {
  const buttonType = () => {
    if (type === "primary") {
      return "text-white bg-primary-100 border-transparent";
    } else if (type === "secondary") {
      return "text-primary-100 border-primary-100";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 cursor-pointer justify-center py-2 px-4 font-medium w-full text-sm  rounded-lg border ${buttonType()}`}
    >
      {children}
    </button>
  );
}
