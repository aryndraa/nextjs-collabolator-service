import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MenuBar from "@/components/MenuBar";
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
    <html
      lang="en"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning={true}
    >
      <body className={`${outfit.variable}  antialiased overflow-y-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <div className="lg:hidden">
              <MenuBarWrapper />
            </div>
            <div className=" block">
              <MenuBar />
            </div>
          </div>

          <main className="lg:ml-20 bg-[#F3F3F3] ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
