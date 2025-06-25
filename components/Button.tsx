import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer justify-center p-3 font-medium text-white w-full text-sm bg-primary-100 rounded-lg"
    >
      {children}
    </button>
  );
}
