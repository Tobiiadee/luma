/** @format */

import { Button } from "@/modules/common/ui/button";
import { SheetClose } from "@/modules/common/ui/sheet";
import { Text } from "@/modules/common/ui/text";
import useCartStore from "@/modules/store/cart-store";
import { CartItemType } from "@/types";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SheetCart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const sheetCartItems = cartItems.slice(0, 3);

  return (
    <div className='mt-8 flex flex-col space-y-6 md:space-y-4'>
      {sheetCartItems.map((item) => (
        <SheetCartItem
          key={item.itemId}
          category={item.category}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          color={item.color}
          itemId={item.itemId}
        />
      ))}
    </div>
  );
}

function SheetCartItem({
  category,
  image,
  title,
  price,
  quantity,
  itemId,
}: CartItemType) {
  const { push } = useRouter();
  const [itemCount, setItemCount] = useState(quantity);

  const addCountHandler = () => {
    setItemCount(itemCount + 1);
  };

  const minusCountHandler = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };

  const modPrice = Number(price).toFixed(2);

  return (
    <div className='border-b border-background/20'>
      <div className='flex justify-between items-start space-x-6 pb-3'>
        <SheetClose onClick={() => push(`/products/${itemId}`)}>
          <div className='flex space-x-4'>
            <div className='self-center'>
              <div className='w-14 relative aspect-square rounded flex items-center justify-center overflow-hidden'>
                <Image
                  src={`/images/${image}`}
                  alt=''
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className='flex flex-col items-start space-y-1 md:space-y-0.5'>
              <div className='px-2 py-1 rounded-2xl flex items-center justify-center border'>
                <Text
                  variant={"p"}
                  className='font-semibold text-background/70 text-[12px]'>
                  {category}
                </Text>
              </div>

              <div className='flex flex-col space-y-4 ml-1'>
                <Text variant={"p"} className='font-bold'>
                  {title}
                </Text>
              </div>
            </div>
          </div>
        </SheetClose>

        <div className='self-center flex flex-col justify-end space-y-2'>
          <Text variant={"p"} className='font-bold self-end'>
            ${modPrice}
          </Text>

          <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
            <Button
              onClick={addCountHandler}
              variant={"ghost"}
              className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
              <Plus size={15} strokeWidth={1.5} />
            </Button>
            <Text variant={"p"}>{itemCount}</Text>
            <Button
              onClick={minusCountHandler}
              className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
              <Minus size={15} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
