/** @format */
"use client";

import useScroll from "@/hook/use-scroll";
import ProductCard from "@/modules/common/components/product-card";
import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import React from "react";

export default function BestDeals() {
  const { showLeft, scrollLeft, scrollRight, showRight, scrollRef } =
    useScroll();

  // console.log(scrollRef);

  return (
    <div className='flex flex-col space-y-6 relative'>
      <div className='flex justify-between items-center'>
        <Text variant={"h2"} className='text-background'>
          Today's Best Deals
        </Text>
        <div className='flex space-x-2 items-center'>
          <Button
            variant='default'
            disabled={!showLeft}
            className='py-0 px-2 max-h-3 rounded-sm bg-transparent text-background '
            onClick={scrollLeft}>
            <MoveLeft size={20} strokeWidth={1.5} />
          </Button>

          <Button
            variant='default'
            disabled={!showRight}
            className='py-0 px-2 max-h-3 rounded-sm bg-transparent text-background '
            onClick={scrollRight}>
            <MoveRight size={20} strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        id='hide-scrollbar'
        className=' overflow-x-scroll group'>
        <div
          id='hide-scrollbar'
          className='flex w-max space-x-4 items-center overflow-x-scroll py-1'>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
