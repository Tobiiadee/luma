/** @format */

import { Text } from "@/modules/common/ui/text";
import React from "react";
import Nav from "./nav/nav";
import SearchInput from "./components/search-input";
import { Button } from "@/modules/common/ui/button";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <div className='flex justify-between items-center py-2'>
      <Text variant={"h3"}>LUMA</Text>
      <Nav />
      <SearchInput />
      <div className='flex items-center space-x-4'>
        <Button variant={"ghost"} className='flex items-center space-x-2 hover:bg-transparent hover:text-background'>
          <User size={20} />
          <Text variant={"p"}>Account</Text>
        </Button>

        <Button variant={"ghost"} className='flex items-center space-x-2 hover:bg-transparent hover:text-background'>
          <ShoppingCart size={20} />
          <Text variant={"p"}>Cart</Text>
        </Button>
      </div>
    </div>
  );
}
