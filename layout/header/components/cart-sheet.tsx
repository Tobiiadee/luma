/** @format */

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Text } from "@/modules/common/ui/text";
import SheetCart from "@/layout/components/sheet-cart";
import { Button } from "@/modules/common/ui/button";
import { useRouter } from "next/navigation";

export default function CartSheet() {
  const { push } = useRouter();

  return (
    <Sheet>
      <SheetTrigger className='flex items-center space-x-2 hover:bg-transparent hover:text-background'>
        <ShoppingCart size={20} />
        <Text variant={"p"} className="hidden md:block">Cart</Text>
      </SheetTrigger>
      <SheetContent className='flex flex-col w-full'>
        <SheetHeader>
          <SheetTitle>
            <Text variant={"h4"} className='font-semibold'>
              My Cart
            </Text>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <SheetCart />

        <SheetFooter className='w-full absolute bottom-6 left-0'>
          <div className='w-full flex justify-center'>
            <SheetClose
              onClick={() => push("/cart")}
              className='w-[90%] py-2 rounded-md bg-background hover:bg-background/90 text-foreground'>
              View Cart
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
