/** @format */

import Adds from "@/layout/components/adds";
import BestDeals from "@/layout/components/best-deals";
import Filters from "@/layout/components/filters";
import LandingMain from "@/layout/components/landing-main";
import TopCategories from "@/layout/components/top-categories";
import ItemCard from "@/modules/common/components/item-card";
import React from "react";

export default function Index() {
  return (
    <div className='flex flex-col space-y-14'>
      <LandingMain />
      <TopCategories />
      <BestDeals />
    </div>
  );
}
