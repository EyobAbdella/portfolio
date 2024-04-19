import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Eyob Tech",
    template: "%s - Eyob",
  },
  description:
    "Eyob Tech - A proficient full-stack developer with expertise in Python, JavaScript, Django, React.js, Node.js, Tailwind CSS, and HTML and CSS. Experienced in web applications, Frontend, and Backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
