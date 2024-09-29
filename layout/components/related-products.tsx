/** @format */
"use client";

import useScroll from "@/hook/use-scroll";
import ProductCard from "@/modules/common/components/product-card";
import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function RelatedProducts() {
  const { showLeft, scrollLeft, scrollRight, showRight, scrollRef } =
    useScroll();

  // console.log(scrollRef);

  return (
    <div className='flex flex-col space-y-6 relative'>
      <div className='flex justify-between items-center'>
        <Text variant={"h3"} className='text-background'>
          Similar Items You Might Like
        </Text>

        <Button variant={"link"}>
          <Text variant={"p"} className='font-medium text-background'>
            View All
          </Text>
        </Button>
      </div>

      <div
        ref={scrollRef}
        id='hide-scrollbar'
        className=' overflow-x-scroll group'>
        <div className='absolute hidden top-0 -left-16 z-50 opacity-0 pb-16 h-full w-28 group-hover:opacity-100 md:flex justify-center items-center transition-opacity duration-700'>
          {showLeft && (
            <Button
              variant='default'
              className='py-6 px-1 rounded-full bg-background hover:bg-background/90 text-foreground'
              onClick={scrollLeft}>
              <ChevronLeft size={40} strokeWidth={1} />
            </Button>
          )}
        </div>

        <div
          id='hide-scrollbar'
          className='flex w-max space-x-4 items-center overflow-x-scroll py-1'>
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        <div className='absolute hidden top-0 -right-9 z-30 pb-16 opacity-0 group-hover:opacity-100 h-full md:flex justify-center items-center transition-opacity duration-700'>
          {showRight && (
            <Button
              variant='default'
              className='py-6 px-1 rounded-full bg-background hover:bg-background/90 text-foreground'
              onClick={scrollRight}>
              <ChevronRight size={40} strokeWidth={1} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
