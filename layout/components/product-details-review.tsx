/** @format */

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/common/ui/tabs";
import { Text } from "@/modules/common/ui/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronRight,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import StarRating from "@/modules/common/components/star-rating";
import { Button } from "@/modules/common/ui/button";
import { Separator } from "@/modules/common/ui/separator";

export default function ProductDetailsReview() {
  return (
    <div className='mt-6'>
      <DetailsReviewTab />
    </div>
  );
}

function DetailsReviewTab() {
  return (
    <div className=''>
      <Tabs defaultValue='details' className='w-full'>
        <TabsList className='w-full space-x-6 bg-transparent mb-6'>
          <TabsTrigger
            value='details'
            className='bg-transparent focus:bg-transparent'>
            <Text variant={"h3"}>Details</Text>
          </TabsTrigger>
          <TabsTrigger value='reviews' className='bg-transparent'>
            <Text variant={"h3"}>Reviews</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='details' className='w-full'>
          <ProductDescription />
        </TabsContent>
        <TabsContent value='reviews' className='w-full'>
          <ReviewContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProductDescription() {
  return (
    <Text variant={"p"} className='sm:w-[80%]'>
      NIVEA MEN Dry Impact anti-perspirant deodorant offers you powerful
      protection tested in real life situations. NIVEA MEN Dry Impact combines
      48 hours reliable protection against sweat and body odour with care for
      your underarm skin. Clean and inviting, an aromatic fresh blend of tangy
      citrus and herbal notes, Dry Impact fragrance is designed for men who want
      maximum protection. It gives you extra anti-perspirant performance for a
      dry feeling and caring 48h protection against sweat and body odour. For
      the first time NIVEA MEN research developed a formula containing a second,
      additional anti-perspirant agent. This unique “DryPlus system” gives you
      reliable, 48h protection against sweat and body odour. Effective
      regulation of perspiration with DryPlus System.
    </Text>
  );
}

function ReviewContent() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative'>
        <div className='col-span-2 lg:w-[90%] flex flex-col space-y-3 items-start'>
          <FilterReview />
          <div className='col-span-2 flex-flex-col space-y-4 divide-y'>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
        </div>

        <div className='flex flex-col w-full space-y-4 md:col-span-1 lg:pt-14'>
          <div className='flex items-center justify-between space-x-4'>
            <StarRating rating={4.5} />
            <Text variant={"h3"}>4.5</Text>
          </div>
          <Separator />

          <div className=''>
            <ReviewRating />
          </div>
        </div>
      </div>

      <Button variant={"link"} className='text-background mt-6 px-0'>
        <Text variant={"p"}>View More Reviews</Text>
      </Button>
    </>
  );
}

function FilterReview() {
  const [filter, setFilter] = useState("Newest");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='border w-max flex items-center space-x-4 rounded-md border-border bg-foreground px-2 py-1.5'>
        <Text variant={"p"}>{filter}</Text>
        <ChevronDown className='ml-auto h-4 w-4' />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='ml-6'>
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value='Newest'>Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Right'>Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ReviewItem() {
  return (
    <div className='flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 pt-5'>
      <div>
        <div className='relative w-10 aspect-square rounded-full overflow-hidden'>
          <Image
            src='/images/fashion.jpg'
            alt='review 1'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='flex flex-col space-y-1'>
          <Text variant={"p"} className='font-semibold'>
            Reviewer Name
          </Text>
          <StarRating rating={4} />
        </div>

        <Text variant={"p"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          euismod, nisl eget ultrices fermentum, velit ipsum aliquam dolor, id
          euismod augue tortor quis ligula. Sed euismod, nisl eget ultrices
          fermentum, velit ipsum aliquam dolor, id euismod augue tortor quis
          ligula. Sed euismod, nisl eget ultrices fermentum, velit ipsum aliquam
          dolor, id euismod augue tortor quis ligula.
        </Text>

        <div className='w-full flex justify-end'>
          <Text variant={"p"} className='text-background/40 text-[12px]'>
            18-11-2020
          </Text>
        </div>
      </div>
    </div>
  );
}

function ReviewRating() {
  return (
    <div className='flex flex-col space-y-3 w-full'>
      <div className='flex items-center space-x-6'>
        <Text variant={"p"} className='text-background/50'>
          5
        </Text>
        <div className='w-full h-3 bg-background/10 rounded-sm'>
          <div className='w-[50%] h-full bg-yellow-300 rounded-sm'></div>
        </div>
        <div className='w-[3ch]'>
          <Text variant={"p"} className=''>
            20
          </Text>
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <Text variant={"p"} className='text-background/50'>
          4
        </Text>
        <div className='w-full h-3 bg-background/10 rounded-sm'>
          <div className='w-[20%] h-full bg-yellow-300 rounded-sm'></div>
        </div>
        <div className='w-[3ch]'>
          <Text variant={"p"} className=''>
            10
          </Text>
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <Text variant={"p"} className='text-background/50'>
          3
        </Text>
        <div className='w-full h-3 bg-background/10 rounded-sm'>
          <div className='w-[70%] h-full bg-yellow-300 rounded-sm'></div>
        </div>
        <div className='w-[3ch]'>
          <Text variant={"p"} className=''>
            60
          </Text>
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <Text variant={"p"} className='text-background/50'>
          2
        </Text>
        <div className='w-full h-3 bg-background/10 rounded-sm'>
          <div className='w-[10%] h-full bg-yellow-300 rounded-sm'></div>
        </div>
        <div className='w-[3ch]'>
          <Text variant={"p"} className=''>
            8
          </Text>
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <Text variant={"p"} className='text-background/50'>
          1
        </Text>
        <div className='w-full h-3 bg-background/10 rounded-sm'>
          <div className='w-[30%] h-full bg-yellow-300 rounded-sm'></div>
        </div>
        <div className='w-[3ch]'>
          <Text variant={"p"} className=''>
            26
          </Text>
        </div>
      </div>
    </div>
  );
}
