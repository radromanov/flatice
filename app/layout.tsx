import "@/styles/globals.css";
import { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import Header from "@/components/header/main-header";
import Main from "@/components/content/main-content";
import Footer from "@/components/main-footer";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Flatice",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `flex flex-col min-h-screen bg-background font-sans antialiased`,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
