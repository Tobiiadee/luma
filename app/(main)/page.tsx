/** @format */

import BestDeals from "@/layout/components/best-deals";
import ByBrand from "@/layout/components/by-brand";
import Discount from "@/layout/components/discount";
import LandingMain from "@/layout/components/landing-main";
import MoreProducts from "@/layout/components/more-products";
import TopCategories from "@/layout/components/top-categories";
import React from "react";

export default function Index() {
  return (
    <>
      <div className='flex flex-col space-y-14'>
        <LandingMain />
        <TopCategories />
        <BestDeals />
        <ByBrand />
        <Discount />
        <MoreProducts />
      </div>
    </>
  );
}
