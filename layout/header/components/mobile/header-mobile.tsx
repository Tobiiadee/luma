/** @format */
"use client";

import React from "react";
import Logo from "../logo";
import useHeaderSearch from "@/modules/store/header-search";
import SearchInputButton from "../search-input-button";
import AccountDropdown from "../account-dropdown";
import CartSheet from "../cart-sheet";
import Nav from "../../nav/nav";
import { ProductSearch } from "../desktop/header-desktop";
import AccountDropdownMobile from "./account-dropdown-mobile";

export default function HeaderMobile() {
  const { isSearch } = useHeaderSearch();
  return (
    <div className='w-full bg-foreground lg:hidden md:pl-16 md:pr-16 fixed top-0 left-0 flex justify-between items-center py-2 px-4 z-50'>
      <div className='flex space-x-14 items-center'>
        <Logo />
        {/* <Nav/> */}
      </div>

      {!isSearch ? <SearchInputButton /> : <ProductSearch />}
      <div className='flex items-center space-x-4'>
        <AccountDropdownMobile />
        <CartSheet />
      </div>
    </div>
  );
}
