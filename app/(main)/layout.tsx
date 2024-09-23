/** @format */

import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container mx-auto md:pl-16 md:pr-16 relative min-w-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
