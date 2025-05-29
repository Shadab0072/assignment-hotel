// src/app/layout.tsx
import "../styles/globals.css";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(180deg, #FFFFFF, #DBCFBA, #FEFBF9)",
        }}
        className="min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}