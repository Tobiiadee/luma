/** @format */

import Image from "next/image";
import React from "react";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

export default function ItemCard() {
  return (
    <>
      <div className='w-72 h-max shadow-lg rounded-lg p-4'>
        <div className='relative w-full h-52 rounded-md overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            priority
            fill
            className='object-cover'
          />
        </div>

        <div className='flex flex-col space-y-4 mt-8'>
          <div className='flex justify-between items-center'>
            <Text variant={"h5"} className='font-semibold'>
              Watches
            </Text>

            <Text variant={"h5"} className='font-semibold'>
              $299
            </Text>
          </div>

          <div className=''>
            <Text variant={"p"} className=''>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium reprehenderit.
            </Text>
          </div>

          <Button className='rounded-3xl bg-background hover:bg-background/90 text-foreground'>
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}
