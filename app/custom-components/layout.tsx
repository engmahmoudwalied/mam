// app/layout.js
import "../globals.css";
import Sidebar from "../ui-components/Sidebar"; // تأكد من المسار الصحيح

export const metadata = {
  title: "مشروعي",
  description: "وصف المشروع الخاص بي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ display: "flex", backgroundColor: "#1c1d21" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
