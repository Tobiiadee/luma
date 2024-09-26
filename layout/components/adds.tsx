/** @format */

import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import React from "react";

export default function Adds() {
  return (
    <div className='relative w-full h-64 rounded-md overflow-hidden p-10 flex justify-between'>
      {/* <div className='absolute bg-[#fcf3cf] w-full h-full'/> */}

      <div className='flex flex-col space-y-6 items-start'>
        <Text variant={"h2"} className='w-[20ch]'>
          Grab upto 50% off on selected headphones
        </Text>

        <Button
          variant={"default"}
          className='rounded-3xl bg-background hover:bg-background/90 text-foreground'>
          <Text variant={"p"}>Buy now</Text>
        </Button>
      </div>

      <div></div>
    </div>
  );
}

