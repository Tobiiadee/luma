"use client";

import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StarRating from "@/modules/common/components/star-rating";

export default function ProductResultSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='absolute top-[110%] sm:top-[150%] left-0 sm:-left-14 lg:left-0 w-screen sm:w-[60vw] lg:w-[40vw] rounded-b-lg sm:rounded-lg flex flex-col space-y-2 bg-foreground shadow-md py-2 z-50'>
      <div className='px-4'>
        <Text variant={"p"} className='font-semibold'>
          Results
        </Text>
      </div>

      <Separator />
      <div className='flex flex-col space-y-1'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductResultSearchItem key={i} />
        ))}
      </div>
    </motion.div>
  );
}

function ProductResultSearchItem() {
  return (
    <div className='relative w-full py-1.5 flex items-center justify-between space-x-2 hover:bg-background/10 px-4 cursor-pointer'>
      <div className='flex items-center space-x-4'>
        <div>
          <div className='w-8 aspect-square relative flex items-center justify-center overflow-hidden rounded'>
            <Image
              src={"/images/item1.jpg"}
              alt=''
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
        <Text variant={"p"} className='font-medium'>
          Wireless Earbugs
        </Text>
      </div>

      <div className='flex items-center space-x-2'>
        <StarRating rating={4.5} size={15} />
        <Text variant={"p"}>(4.5)</Text>
      </div>

      <Text variant={"p"} className='font-medium'>
        $80.00
      </Text>
    </div>
  );
}
