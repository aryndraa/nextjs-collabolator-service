import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { MenuBarProvider } from "@/contexts/MenuBarContext";
import { ThemeProvider } from "next-themes";
import MenuBarWrapper from "@/components/MenuBarWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procast",
  description: "Group service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${outfit.variable}  antialiased overflow-y-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MenuBarProvider>
            <MenuBarWrapper />
            <main className="lg:ml-20 bg-[#F3F3F3] ">{children}</main>
          </MenuBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
