/** @format */
"use client";

import { categoriesInfo } from "@/layout/components/top-categories";
import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";
import { PopularCategoriesItem } from "./popular-categories";
import { motion } from "framer-motion";
import Modal from "@/modules/common/ui/modal";
import useHeaderSearch from "@/modules/store/header-search";
import { Button } from "@/modules/common/ui/button";
import { XIcon } from "lucide-react";

export default function MobilePopularCategories() {
  const { isCategory, setIsCategory } = useHeaderSearch();
  return (
    <Modal isOpen={isCategory} onClose={() => setIsCategory(false)}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='absolute top-[1%] left-0 sm:left-[15%] lg:hidden w-screen sm:w-[70vw] lg:w-[40vw] rounded-lg flex flex-col space-y-2 bg-foreground shadow-md px-4 pt-2 pb-4 z-50'>
        <div className='flex justify-between items-center'>
          <Text variant={"p"} className='font-semibold'>
            Popular Categories
          </Text>

          <Button onClick={() => setIsCategory(false)} variant={"ghost"} className="hover:bg-transparent hover:text-background">
            <XIcon size={20} strokeWidth={1.5} />
          </Button>
        </div>

        <Separator />
        <div className='grid sm:grid-cols-2 gap-2 md:gap-4 pt-2'>
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
    </Modal>
  );
}
