/** @format */

import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import React from "react";

export default function LandingMain() {
  return (
    <div className=' px-14 flex items-center w-full h-[60vh] lg:h-[80vh] rounded-b-md '>
      <div className='absolute left-0 top-0 w-full h-[60vh] lg:h-[80vh] overflow-hidden -z-10'>
        <Image src={"/images/shop.jpg"} alt='' priority fill className='object-cover' />
      </div>

        {/* <div className="absolute top-0 left-0 bg-background/10"></div> */}
      <div className='-ml-6 md:ml-0 flex flex-col space-y-4 items-start'>
        <Text variant={"h1"} className='w-[20ch]'>
          Shopping and Departmental Store
        </Text>

        <Text variant={"p"} className="w-[40ch] font-semibold">
          Shopping is a relaxing hobby for me, which is also troubling for the
          bank balance.
        </Text>

        <Button
          variant={"default"}
          className='rounded-3xl bg-background hover:bg-background/90 text-foreground'>
          <Text variant={"p"}>Shop now</Text>
        </Button>
      </div>
    </div>
  );
}
