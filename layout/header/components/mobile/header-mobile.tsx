/** @format */
"use client";

import React from "react";
import Logo from "../logo";
import useHeaderSearch from "@/modules/store/header-search";
import SearchInputButton from "../search-input-button";
import CartSheet from "../cart-sheet";
import { ProductSearch } from "../desktop/header-desktop";
import AccountDropdownMobile from "./account-dropdown-mobile";
import MobileMenu from "./mobile-menu";
import MobilePopularCategories from "../mobile-popular-categories";

export default function HeaderMobile() {
  const { isSearch, isCategory } = useHeaderSearch();
  return (
    <>
      <div className='w-full bg-foreground lg:hidden fixed top-0 left-0 flex justify-between items-center py-2 px-4 z-50'>
        <div className='flex space-x-4 items-center'>
          <MobileMenu />
          <Logo />
        </div>

        {!isSearch ? <SearchInputButton /> : <ProductSearch />}
        <div className='flex items-center space-x-4'>
          <AccountDropdownMobile />
          <CartSheet />
        </div>
      </div>

      {isCategory && <MobilePopularCategories />}
    </>
  );
}
