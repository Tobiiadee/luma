/** @format */

import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { categoriesInfo } from "@/layout/components/top-categories";
import useHeaderSearch from "@/modules/store/header-search";
import { useRouter } from "next/navigation";

export default function PopularCategories() {
  // console.log("active");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
      className='absolute top-[115%] sm:top-[150%] left-0 sm:-left-14 lg:left-0 w-screen sm:w-[60vw] lg:w-[40vw] rounded-lg flex flex-col space-y-2 bg-foreground shadow-md px-4 pt-2 pb-4 z-50'>
      <Text variant={"p"} className='font-semibold'>
        Popular Categories
      </Text>
      <Separator />
      <div className='grid  sm:grid-cols-2 gap-2 md:gap-4'>
        {categoriesInfo.map((category, i) => (
          <PopularCategoriesItem
            key={i}
            name={category.name}
            image={category.image}
            noOfItems={category.noOfItems}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function PopularCategoriesItem({
  image,
  name,
  noOfItems,
}: {
  image: string;
  name: string;
  noOfItems: number;
}) {
  const { setIsSearch } = useHeaderSearch();
  const { push } = useRouter();

  const categoryHandler = () => {
    push(`/category/${name}`);
    setIsSearch(false);
  };

  return (
    <div
      onClick={categoryHandler}
      className='relative w-full p-1.5 flex space-x-4 md:space-x-2 bg-background/5 rounded cursor-pointer'>
      <div>
        <div className='w-10 aspect-square relative flex items-center justify-center overflow-hidden rounded'>
          <Image
            src={`/images/${image}`}
            alt=''
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>

      <div className='flex flex-col space-y-1'>
        <Text variant={"p"} className='font-semibold capitalize'>
          {name}
        </Text>
        <Text
          variant={"p"}
          className='font-medium text-background/50 text-[12px]'>
          {noOfItems} items available
        </Text>
      </div>
    </div>
  );
}
