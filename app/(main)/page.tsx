/** @format */

import BestDeals from "@/layout/components/best-deals";
import LandingMain from "@/layout/components/landing-main";
import TopCategories from "@/layout/components/top-categories";
import React from "react";

export default function Index() {
  return (
    <>
      <div className='flex flex-col space-y-14'>
        <LandingMain />
        <TopCategories />
        <BestDeals />
      </div>
    </>
  );
}
