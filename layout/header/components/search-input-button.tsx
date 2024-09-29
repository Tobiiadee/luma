/** @format */

"use client";

import { Button } from "@/modules/common/ui/button";
import { Input } from "@/modules/common/ui/input";
import { Text } from "@/modules/common/ui/text";
import useHeaderSearch from "@/modules/store/header-search";
import { Search } from "lucide-react";
import React from "react";

export default function SearchInputButton() {
  const { setIsSearch } = useHeaderSearch();

  return (
    <Button
      onClick={() => setIsSearch(true)}
      variant={"ghost"}
      className='hover:bg-transparent'>
      <div className='flex items-center sm:w-[40vw] lg:w-[25vw] rounded-2xl px-3 py-1.5 space-x-1 bg-accent/10 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2'>
        {/* Div that looks like an input */}
        <div className='border-none w-full grid place-items-start outline-none bg-transparent text-sm text-muted-foreground placeholder:text-[12px] placeholder:font-normal'>
          <Text variant={"p"} className="text-[12px]"> Search product...</Text>
        </div>
        {/* Search Icon */}
        <Search size={18} strokeWidth={2} className="text-muted-foreground"/>
      </div>
    </Button>
  );
}
