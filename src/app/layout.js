import "./globals.css";

export const metadata = {
  title: "Super cursor",
  description: "This cursor is super cool | I name it splash cursor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
