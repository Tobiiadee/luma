/** @format */

import DeployButton from "@/modules/common/components/deploy-button";
import { EnvVarWarning } from "@/modules/common/components/env-var-warning";
import HeaderAuth from "@/modules/common/components/header-auth";
import { ThemeSwitcher } from "@/modules/common/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import '@fontsource-variable/inter';
import '@fontsource-variable/nunito';
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Luma",
  description:
    "Shop the latest trends and essentials at Luma. Discover a wide range of products from fashion to home goods, with fast shipping and exclusive deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-foreground text-background'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
