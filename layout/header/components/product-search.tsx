/** @format */
"use client";

import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductResultSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='absolute top-[150%] -left-12 md:left-0 w-[80vw] sm:w-[60vw] lg:w-[40vw] rounded-lg flex flex-col space-y-2 bg-foreground shadow-md px-4 py-2 z-50'>
      <Text variant={"p"} className='font-semibold'>
        Popular Categories
      </Text>
      <Separator />
      <div className='flex flex-col space-y-3 divide-y'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductResultSearchItem key={i} />
        ))}
      </div>
    </motion.div>
  );
}

function ProductResultSearchItem() {
  return (
    <div className='relative w-full py-1.5 flex items-center justify-between space-x-2 cursor-pointer'>
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

      <Text variant={"p"} className='font-medium'>
        $80.00
      </Text>
    </div>
  );
}
