import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import React from "react";

export default function ByBrand() {
  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex justify-between items-center'>
        <Text variant={"h2"} className='text-background'>
          Shop By Brand
        </Text>

        <Button variant={"link"}>
          <Text variant={"p"} className='font-medium text-background'>
            View All
          </Text>
        </Button>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <BrandCard key={index} />
        ))}
      </div>
    </div>
  );
}

function BrandCard() {
  return (
    <div className='flex flex-col sm:flex-row space-y-4 items-center sm:space-x-6 rounded-lg shadow-md p-2 sm:p-4 bg-background/5 cursor-pointer active:scale-100 hover:scale-105 transition'>
      <div>
        <div className='relative w-20 aspect-square rounded-full overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <Text variant={"h3"} className="text-center sm:text-start">Airpod Pro</Text>
        <Text variant={"p"} className='text-center sm:text-start text-background/60 font-semibold'>
          Color: Black and White
        </Text>
      </div>
    </div>
  );
}
