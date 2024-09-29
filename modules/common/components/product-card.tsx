/** @format */

"use client";

import Image from "next/image";
import React from "react";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import StarRating from "./star-rating";

export default function ProductCard() {
  const { push } = useRouter();

  return (
    <>
      <div className='w-max max-w-[13rem] h-max shadow-lg rounded-lg p-2 overflow-hidden'>
        <div
          onClick={() => push("/products/1")}
          className='relative w-full aspect-square active:scale-95 transition rounded-md overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            priority
            fill
            className='object-cover cursor-pointer'
          />
        </div>

        <div className='flex flex-col space-y-2 mt-2'>
          <div className='flex justify-between items-center'>
            <Text variant={"p"} className='font-semibold'>
              Watches
            </Text>

            <Text variant={"p"} className='font-semibold'>
              $299
            </Text>
          </div>

          <div className='flex space-x-2 items-center'>
            <StarRating rating={4.5} size={15}/>
            <Text variant={"p"}>(4.5)</Text>
          </div>

          <div className=''>
            <Text variant={"p"} className='w-[25ch]'>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>

          {/* <Button className='rounded-3xl bg-background hover:bg-background/90 text-foreground'>
            Add To Cart
          </Button> */}
        </div>
      </div>
    </>
  );
}
