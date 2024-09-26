/** @format */

"use client";

import { Button } from "@/modules/common/ui/button";
import { Checkbox } from "@/modules/common/ui/checkbox";
import { Text } from "@/modules/common/ui/text";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function CartItems() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
      <div className='col-span-2 flex flex-col space-y-6'>
        <CartSelectAll />
        <div className='flex flex-col space-y-6'>
          {Array.from({ length: 4 }).map((_, i) => (
            <CartItem key={i} />
          ))}
        </div>
      </div>

      <CartTotal />
    </div>
  );
}

function CartSelectAll() {
  return (
    <div className='flex justify-between items-center border rounded-lg p-4 '>
      <div className='flex  items-center space-x-2'>
        <Checkbox id={"all"} />
        <label
          htmlFor={"all"}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Select All
        </label>
      </div>

      <Button className='rounded-md bg-background hover:bg-background/90 text-foreground'>
        <Text>Delete</Text>
      </Button>
    </div>
  );
}

function CartItem() {
  const [count, setCount] = useState(1);

  const addCountHandler = () => {
    if (count === 7) return;
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className='border p-4 flex justify-between rounded-lg w-full'>
      <div>
        <div className='flex  items-start space-x-2'>
          <Checkbox id='title' />
          <label
            htmlFor='title'
            className='flex items-start space-x-4 cursor-pointer'>
            <div>
              <div className='w-16 aspect-square relative flex items-center justify-center overflow-hidden rounded'>
                <Image
                  src={"/images/shop.jpg"}
                  alt=''
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className=''>
              <div className='flex flex-col items-start space-y-0.5'>
                <div className='px-2 py-1 rounded-2xl flex items-center justify-center border'>
                  <Text
                    variant={"p"}
                    className='font-semibold text-background/70 text-[12px]'>
                    Category
                  </Text>
                </div>

                <div className='flex flex-col space-y-4'>
                  <Text variant={"p"} className='font-bold'>
                    Watches
                  </Text>
                </div>

                <div className='flex flex-col md:flex-row items-center md:space-x-2'>
                  <div className={"flex items-center space-x-1"}>
                    <Text
                      variant={"p"}
                      className='text-background/70 text-[12px]'>
                      Type:
                    </Text>
                    <Text
                      variant={"p"}
                      className='text-background text-[12px] font-semibold'>
                      Stereo
                    </Text>
                  </div>

                  <div className={"flex items-center space-x-1"}>
                    <Text
                      variant={"p"}
                      className='text-background/70 text-[12px]'>
                      Color:
                    </Text>
                    <Text
                      variant={"p"}
                      className='text-background text-[12px] font-semibold'>
                      Red
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className='self-center flex flex-col justify-end space-y-2'>
        <div className='flex flex-col items-end space-y-0.5'>
          <Text
            variant={"p"}
            className='text-[12px] line-through font-bold text-background/50'>
            $100
          </Text>
          <Text variant={"p"} className='font-bold self-end'>
            $29.99
          </Text>
        </div>
        <div className='flex space-x-4 items-center'>
          <Button
            variant={"ghost"}
            className='hover:bg-transparent hover:text-background max-h-0 p-0 hover:scale-110 transition'>
            <Trash size={15} strokeWidth={1.5} />
          </Button>
          <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
            <Button
              onClick={addCountHandler}
              variant={"ghost"}
              className='hover:bg-transparent hover:text-background p-0 max-h-0 hover:scale-110 transition'>
              <Plus size={15} strokeWidth={1.5} />
            </Button>
            <Text variant={"p"}>{count}</Text>
            <Button
              onClick={removeCountHandler}
              className='hover:bg-transparent hover:text-background p-0 max-h-0 hover:scale-110 transition'>
              <Minus size={15} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartTotal() {
  return (
    <div className='border p-4 flex flex-col rounded-lg w-full min-h-64 md:h-[50%] relative'>
      <Text variant={"h3"} className=''>
        Summary Order
      </Text>
      <div className='flex flex-col space-y-4 absolute bottom-4 left-0 w-full px-4'>
        <div className='w-full flex justify-between items-center'>
          <Text variant={"h5"} className='text-background/50'>
            SumTotal:
          </Text>
          <Text variant={"h5"} className=''>
            $29.99
          </Text>
        </div>

        <div className='w-full flex justify-center'>
          <Button className='w-full py-2 rounded-md bg-background hover:bg-background/90 text-foreground'>
            Buy Now (
            <span>
              <Text variant={"p"}>04</Text>
            </span>
            )
          </Button>
        </div>
      </div>
    </div>
  );
}
