/** @format */
"use client";

import StarRating from "@/modules/common/components/star-rating";
import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import { Dot, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";
import ProductDetailsReview from "./product-details-review";
import RelatedProducts from "./related-products";
import { useRouter } from "next/navigation";

export default function ProductDescription() {
  return (
    <>
      <div className='grid lg:grid-cols-2 gap-4 sm:gap-0 w-full'>
        <div className='w-full'>
          <div className='w-full flex flex-col '>
            <div className='flex items-center'>
              <div className='relative w-full lg:w-[90%] aspect-square rounded-md flex justify-center items-center overflow-hidden'>
                <Image
                  src={"/images/item1.jpg"}
                  alt=''
                  priority
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-4 gap-2 sm:gap-0 sm:flex sm:space-x-2 items-center mt-4'>
              {Array.from({ length: 4 }).map((_, index) => (
                <ProductDescriptionImages key={index} />
              ))}
              <MoreImages />
            </div>
          </div>
        </div>
        <ProductDetails />
      </div>

      <ProductDetailsReview />

      <RelatedProducts />
    </>
  );
}

function ProductDescriptionImages() {
  return (
    <div className='cursor-pointer group'>
      <div className='relative w-full sm:w-[5.9rem] aspect-square rounded-sm flex justify-center items-center overflow-hidden '>
        <Image
          src={"/images/item1.jpg"}
          alt=''
          priority
          fill
          className='object-cover group-hover:scale-110 transition cursor-pointer'
        />
      </div>
    </div>
  );
}

function MoreImages() {
  return (
    <div className='w-full sm:w-[5.9rem] aspect-square rounded-sm flex justify-center items-center border border-background/50 cursor-pointer'>
      <Text variant={"p"} className='font-semibold text-[10px]'>
        +{5} more
      </Text>
    </div>
  );
}

function ProductDetails() {
  return (
    <div className='w-full flex flex-col space-y-4 lg:space-y-2 '>
      <div className='flex items-center justify-between'>
        <div className='w-6 aspect-square rounded-full relative overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            priority
            fill
            className='object-cover cursor-pointer'
          />
        </div>

        <Text
          variant={"p"}
          className='font-medium text-background/40 uppercase'>
          HJYU-230HU
        </Text>
      </div>

      <div className='flex flex-col space-y-1'>
        <Text variant={"h2"} className='text-center lg:text-start'>
          Shoes Reebook
        </Text>
        <div className='flex space-x-2 items-center'>
          <StarRating rating={4.5} />
          <Text variant={"p"}>(4.5)</Text>
        </div>
      </div>

      <div className='w-full flex justify-end'>
        <Text variant={"h3"} className=''>
          $299.00
        </Text>
      </div>

      <div className='flex flex-col space-y-1'>
        <div className='flex items-center'>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Color
          </Text>
          <Dot size={34} className='text-background/60' />
          <Text variant={"p"} className='text-background/60 font-semibold'>
            White
          </Text>
        </div>

        <div className='flex space-x-4 '>
          {Array.from({ length: 3 }).map((_, index) => (
            <Color key={index} />
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-1'>
        <div className='flex items-center'>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Sizes
          </Text>
          <Dot size={34} className='text-background/60' />
          <Text variant={"p"} className='text-background/60 font-semibold'>
            EU
          </Text>
        </div>

        <div className='grid grid-cols-4 gap-2'>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductSize key={index} />
          ))}
        </div>
      </div>

      <div className='flex items-center space-x-6 pt-6'>
        <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
          <Button
            variant={"ghost"}
            className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
            <Plus size={15} strokeWidth={1.5} />
          </Button>
          <Text variant={"p"}>1</Text>
          <Button className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
            <Minus size={15} strokeWidth={1.5} />
          </Button>
        </div>

        <Text variant={"p"}>
          Only <span className='font-semibold'>12 items</span> left
        </Text>
      </div>

      <div className='flex items-center space-x-4 pt-8'>
        <BuyNowButton />
        <AddToCartButton />
      </div>
    </div>
  );
}

function Color() {
  return (
    <div className='cursor-pointer group'>
      <div className='w-10 aspect-[1/1.5] rounded-sm relative group-hover:border-2 border-background/50 overflow-hidden'>
        <Image
          src={"/images/item1.jpg"}
          alt=''
          priority
          fill
          className='object-cover cursor-pointer'
        />
      </div>
    </div>
  );
}

function ProductSize() {
  return (
    <div className='border rounded-md flex items-center justify-center py-1 px-2 cursor-pointer hover:bg-background/10'>
      <Text variant={"p"} className='text-[12px]'>
        12.5
      </Text>
    </div>
  );
}

function AddToCartButton() {
  return (
    <Button className='w-[90%] py-2 rounded-md bg-transparent hover:bg-background/10 text-background border'>
      <Text variant={"p"}>Add To Cart</Text>
    </Button>
  );
}

function BuyNowButton() {
  const { push } = useRouter();

  return (
    <Button
      onClick={() => push("/checkout")}
      className='w-[90%] py-2 rounded-md bg-background hover:bg-background/90 text-foreground'>
      <Text variant={"p"}>Buy Now</Text>
    </Button>
  );
}
