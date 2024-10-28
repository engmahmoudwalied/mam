"use client";

import "../globals.css";
import Sidebar from "../ui-components/Sidebar";
import { useState, useEffect, ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1024); // شاشات أقل من lg
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  if (isMobile) {
    return (
      <html lang="ar">
        <body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1c1d21",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>يرجى فتح الصفحة من جهاز كمبيوتر</p>
        </body>
      </html>
    );
  }

  return (
    <html lang="ar">
      <body style={{ display: "flex", backgroundColor: "#1c1d21" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
