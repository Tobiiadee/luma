/** @format */
"use client";

import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import React from "react";
import ProductDetailsReview from "./product-details-review";
import RelatedProducts from "./related-products";
import ProductDetails, { product } from "./product-details";

export default function ProductDescription() {
  const productImages = product.image.map((image) => image);
  const [productImage, setProductImage] = React.useState(productImages[0]);

  return (
    <>
      <div className='grid lg:grid-cols-2 gap-4 sm:gap-0 w-full'>
        <div className='w-full'>
          <div className='w-full flex flex-col '>
            <div className='flex items-center'>
              <div className='relative w-full lg:w-[90%] aspect-[2/1.7] rounded-md flex justify-center items-center overflow-hidden'>
                <Image
                  src={`/images/${productImage}`}
                  alt=''
                  priority
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-4 gap-2 sm:gap-0 sm:flex sm:space-x-2 items-center mt-4'>
              {productImages.map((image, index) => (
                <ProductDescriptionImages
                  key={index}
                  descImage={image}
                  setProductImage={setProductImage}
                />
              ))}
              {productImages.length > 4 && <MoreImages />}
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

function ProductDescriptionImages({
  descImage,
  setProductImage,
}: {
  descImage: string;
  setProductImage: (value: string) => void;
}) {
  return (
    <div
      onClick={() => setProductImage(descImage)}
      className='cursor-pointer group'>
      <div className='relative w-full sm:w-[5.9rem] aspect-square rounded-sm flex justify-center items-center overflow-hidden '>
        <Image
          src={`/images/${descImage}`}
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
