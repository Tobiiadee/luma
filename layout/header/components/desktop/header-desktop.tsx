/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/modules/common/ui/button";
import { Search } from "lucide-react";
import useHeaderSearch from "@/modules/store/header-search";
import { motion } from "framer-motion";
import Modal from "@/modules/common/ui/modal";
import SearchInputButton from "../search-input-button";
import AccountDropdown from "../account-dropdown";
import CartSheet from "../cart-sheet";
import PopularCategories from "../popular-categories";
import ProductResultSearch from "../product-search";
import Logo from "../logo";
import Nav from "../../nav/nav";

export default function HeaderDesktop() {
  const { isSearch } = useHeaderSearch();

  return (
    <div className='w-full hidden bg-foreground md:pl-16 md:pr-16 fixed top-0 left-0 lg:flex justify-between items-center py-2 z-50'>
      <div className='flex space-x-14 items-center'>
        <Logo />
        <Nav />
      </div>

      {!isSearch && <SearchInputButton />}
      <div className='flex items-center space-x-4'>
        <AccountDropdown />
        <CartSheet />
      </div>
    </div>
  );
}

export function ProductSearch() {
  const [query, setQuery] = useState("");
  const { isSearch, setIsSearch } = useHeaderSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  const closeModalHandler = () => {
    setIsSearch(false);
  };

  return (
    <div className='flex justify-end sm:relative'>
      <motion.div
        initial={{ width: "150px", originX: 0 }} // Initial width
        animate={{ width: isSearch ? "50vw" : "150px" }} // Toggle width
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='flex items-center rounded-2xl px-3 py-1.5 space-x-1 bg-foreground'>
        <input
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
          className='border-none w-full outline-none bg-transparent text-sm placeholder:text-muted-foreground placeholder:text-sm placeholder:font-normal '
          placeholder='Search product...'
        />
        <Button variant={"ghost"} size={"icon"} className="rounded-full bg-background/20">
          <Search size={18} strokeWidth={2} className='text-muted-foreground' />
        </Button>
      </motion.div>

      <Modal isOpen={isSearch} onClose={closeModalHandler}>
        {isSearch && query === "" ? (
          <PopularCategories />
        ) : (
          <ProductResultSearch />
        )}
      </Modal>
    </div>
  );
}
