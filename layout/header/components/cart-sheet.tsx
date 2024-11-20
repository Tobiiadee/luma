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
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useCartStore from "@/modules/store/cart-store";

export default function CartSheet() {
  const { push } = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Sheet>
      <SheetTrigger className='relative flex items-center space-x-2 hover:bg-transparent hover:text-background'>
        <ShoppingCart size={20} />
        <Text variant={"p"} className='hidden md:block'>
          Cart
        </Text>
        {cartItems.length >= 0 && <Badge className="absolute left-1.5 -top-1" />}
      </SheetTrigger>
      <SheetContent className='flex flex-col sm:min-w-[70%] lg:min-w-[35%]'>
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
              <Text variant={"p"}>View Cart</Text>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function Badge({className}: {className?: string}) {
  return (
    <div className={cn(className, 'absolute w-1.5 aspect-square rounded-full bg-red-600')} />
  );
}
