/** @format */

import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const categoriesInfo = [
  { name: "furniture", image: "furniture.jpg", noOfItems: 200 },
  { name: "accessories", image: "accessories.jpg", noOfItems: 50 },
  { name: "books", image: "books.jpg", noOfItems: 45 },
  { name: "sneakers", image: "sneakers.jpg", noOfItems: 70 },
  { name: "fashion", image: "fashion.jpg", noOfItems: 28 },
  { name: "travel", image: "travel.jpg", noOfItems: 69 },
];

export default function TopCategories() {
  return (
    <div className='flex flex-col space-y-6'>
      <Text variant={"h2"} className='text-background'>
        Shop Our Top Categories
      </Text>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:space-x-4 items-center'>
        {categoriesInfo.map((category, index) => (
          <CategoryCard
            key={index}
            category={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  image,
}: {
  category: string;
  image: string;
}) {
  return (
    <Link href={`/category/${category}`} className='relative w-full lg:w-56 aspect-[2/2.7] rounded-lg overflow-hidden group cursor-pointer'>
      <div className='absolute top-0 left-0 w-full h-full -z-10 group-hover:scale-110 transition duration-300'>
        <Image
          src={`/images/${image}`}
          alt=''
          fill
          priority
          className='object-cover'
        />
      </div>
      <div className='w-full grid place-items-center mt-4'>
        <Text variant={"h2"} className='tetx-center text-background capitalize'>
          {category}
        </Text>
      </div>
    </Link>
  );
}
