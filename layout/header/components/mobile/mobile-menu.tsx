/** @format */
"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { Menu } from "lucide-react";
import { Text } from "@/modules/common/ui/text";
import useHeaderSearch from "@/modules/store/header-search";

export default function MobileMenu() {
  const { setIsCategory } = useHeaderSearch();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={20} strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent side={"top"} className='rounded-b-lg'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='flex flex-col items-center space-y-6'>
          <SheetClose onClick={() => setIsCategory(true)}>
            <Text variant={"p"}>Category</Text>
          </SheetClose>
          <SheetClose>
            <Text variant={"p"}>Deals</Text>
          </SheetClose>
          <SheetClose>
            <Text variant={"p"}>Delivery</Text>
          </SheetClose>
          <SheetClose>
            <Text variant={"p"}>What's New?</Text>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
