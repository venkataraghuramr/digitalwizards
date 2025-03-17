import type { Metadata } from "next";
import "../client/src/index.css";

export const metadata: Metadata = {
  title: "Digital Wizards | Marketing Agency",
  description: "Digital Wizards is a full-service marketing agency specializing in brand development, digital marketing, web design, and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}