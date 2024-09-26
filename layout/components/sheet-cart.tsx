/** @format */

import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SheetCart() {
  return (
    <div className='mt-8 flex flex-col space-y-6 md:space-y-4'>
      <SheetCartItem />
      <SheetCartItem />
      <SheetCartItem />
    </div>
  );
}

function SheetCartItem() {
  return (
    <div className='border-b border-background/20 cursor-pointer'>
      <div className='flex justify-between items-start space-x-6 pb-3'>
        <div className='flex space-x-4'>
          <div className='self-center'>
            <div className='w-14 relative aspect-square rounded flex items-center justify-center overflow-hidden'>
              <Image
                src={"/images/shop.jpg"}
                alt=''
                fill
                className='object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col items-start space-y-1 md:space-y-0.5'>
            <div className='px-2 py-1 rounded-2xl flex items-center justify-center border'>
              <Text variant={"p"} className='font-semibold text-background/70 text-[12px]'>
                Category
              </Text>
            </div>

            <div className='flex flex-col space-y-4 ml-1'>
              <Text variant={"p"} className='font-bold'>
                Watches
              </Text>
            </div>
          </div>
        </div>

        <div className='self-center flex flex-col justify-end space-y-2'>
          <Text variant={"p"} className='font-bold self-end'>
            $29.99
          </Text>

          <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
            <Button variant={"ghost"} className="hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0">
              <Plus size={15} strokeWidth={1.5} />
            </Button>
            <Text variant={"p"}>1</Text>
            <Button className="hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0">
              <Minus size={15} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
