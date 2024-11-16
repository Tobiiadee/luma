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
    <div className='container mx-auto pb-10 lg:px-16 relative min-w-screen'>
      <Header />
      <div className='mt-20'>{children}</div>
      <Footer />
    </div>
  );
}
