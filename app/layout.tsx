/** @format */

import { ThemeProvider } from "next-themes";
import "@fontsource-variable/inter";
import "@fontsource-variable/nunito";
import "./globals.css";
import { Toaster } from "@/modules/common/ui/sonner";

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
          enableSystem={false}
          disableTransitionOnChange>
          <div id='overlay' />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
