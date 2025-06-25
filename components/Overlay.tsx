import React from "react";

export default function Overlay({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen fixed inset-0 bg-black/30 flex items-center justify-center">
      {children}
    </div>
  );
}
