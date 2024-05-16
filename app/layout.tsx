import "@/styles/globals.css";
import { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import Header from "@/components/header/main-header";
import Footer from "@/components/main-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CSPostHogProvider } from "./_analytics/provider";

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
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
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
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
