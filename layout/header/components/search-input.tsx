/** @format */

import { Input } from "@/modules/common/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <div className='flex items-center w-[25vw] rounded-2xl px-3 py-1.5 space-x-1 bg-accent/10 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
      <input
        className='border-none w-full outline-none bg-transparent text-sm placeholder:text-muted-foreground placeholder:text-[12px] placeholder:font-normal '
        placeholder='Search...'
      />
      <Search size={14} strokeWidth={1.5} />
    </div>
  );
}
