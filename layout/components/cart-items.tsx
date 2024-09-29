/** @format */

"use client";

import { Button } from "@/modules/common/ui/button";
import { Checkbox } from "@/modules/common/ui/checkbox";
import { Text } from "@/modules/common/ui/text";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const cartItems = [
  {
    id: 1,
    image: "books.jpg",
    category: "Books",
    title: "The Book",
    type: "Comedy",
    color: "Green",
    oldPrice: "$10",
    price: "$5.99",
    count: 4,
  },
  {
    id: 2,
    image: "fashion.jpg",
    category: "Fashion",
    title: "D&G",
    type: "null",
    color: "Red",
    oldPrice: "$300",
    price: "$259.99",
    count: 2,
  },
  {
    id: 3,
    image: "sneakers.jpg",
    category: "Sneakers",
    title: "Air Jordan",
    type: "Sports",
    color: "Blue",
    oldPrice: "$200",
    price: "$159",
    count: 1,
  },
  {
    id: 4,
    image: "furniture.jpg",
    title: "Sofa",
    category: "Furniture",
    type: "null",
    color: "Green",
    oldPrice: "$400",
    price: "$329.99",
    count: 1,
  },
];

export default function CartItems() {

  const cartTotal = cartItems.reduce((acc, item) => acc + Number(item.price.replace("$", "")), 0);
  const noOfItems = cartItems.length;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4 w-full'>
      <div className='col-span-2 flex flex-col space-y-6'>
        <CartSelectAll />
        <div className='flex flex-col space-y-6'>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              category={item.category}
              imageSrc={item.image}
              title={item.title}
              type={item.type}
              color={item.color}
              oldPrice={item.oldPrice}
              price={item.price}
              itemCount={item.count}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <CartTotal cartTotal={cartTotal} items={noOfItems} />
    </div>
  );
}

function CartSelectAll() {
  return (
    <div className='flex justify-between items-center border rounded-lg p-4 '>
      <div className='flex  items-center space-x-2'>
        <Checkbox id={"all"} />
        <label
          htmlFor={"all"}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Select All
        </label>
      </div>

      <Button className='rounded-md bg-background hover:bg-background/90 text-foreground'>
        <Text>Delete</Text>
      </Button>
    </div>
  );
}

interface CartItemProps {
  category: string;
  imageSrc: string;
  title: string;
  type: string;
  color: string;
  oldPrice: string;
  price: string;
  itemCount: number;
  id: number;
}

function CartItem({
  title,
  category,
  imageSrc,
  type,
  color,
  oldPrice,
  price,
  itemCount,
  id,
}: CartItemProps) {
  const [count, setCount] = useState(itemCount);

  const addCountHandler = () => {
    if (count === 7) return;
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className='border p-4 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between rounded-lg w-full'>
      <div>
        <div className='flex items-start space-x-2'>
          <Checkbox id={title} />
          <label
            htmlFor={title}
            className='flex items-start space-x-4 cursor-pointer'>
            <div>
              <div className='w-16 aspect-square relative flex items-center justify-center overflow-hidden rounded'>
                <Image
                  src={`/images/${imageSrc}`}
                  alt={title}
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className=''>
              <div className='flex flex-col items-start space-y-0.5'>
                <div className='px-2 py-1 rounded-2xl flex items-center justify-center border'>
                  <Text
                    variant={"p"}
                    className='font-semibold text-background/70 text-[12px]'>
                    {category}
                  </Text>
                </div>

                <div className='flex flex-col space-y-4'>
                  <Text variant={"p"} className='font-bold'>
                    {title}
                  </Text>
                </div>

                <div className='flex items-center space-x-2'>
                  <div className={"flex items-center space-x-1"}>
                    <Text
                      variant={"p"}
                      className='text-background/70 text-[12px]'>
                      Type:
                    </Text>
                    <Text
                      variant={"p"}
                      className='text-background text-[12px] font-semibold'>
                      {type}
                    </Text>
                  </div>

                  <div className={"flex items-center space-x-1"}>
                    <Text
                      variant={"p"}
                      className='text-background/70 text-[12px]'>
                      Color:
                    </Text>
                    <Text
                      variant={"p"}
                      className='text-background text-[12px] font-semibold'>
                      {color}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className='md:self-center flex md:flex-col justify-between md:justify-end md:space-y-2'>
        <div className='flex flex-col md:items-end space-y-0.5'>
          <Text
            variant={"p"}
            className='text-[12px] line-through font-bold text-background/50'>
            {oldPrice}
          </Text>
          <Text variant={"p"} className='font-bold self-end'>
            {price}
          </Text>
        </div>

        <div className='flex space-x-4 items-center'>
          <Button
            variant={"ghost"}
            className='hover:bg-transparent hover:text-background max-h-0 p-0 hover:scale-110 transition'>
            <Trash size={15} strokeWidth={1.5} />
          </Button>
          <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
            <Button
              onClick={addCountHandler}
              variant={"ghost"}
              className='hover:bg-transparent hover:text-background p-0 max-h-0 hover:scale-110 transition'>
              <Plus size={15} strokeWidth={1.5} />
            </Button>
            <Text variant={"p"}>{count}</Text>
            <Button
              onClick={removeCountHandler}
              className='hover:bg-transparent hover:text-background p-0 max-h-0 hover:scale-110 transition'>
              <Minus size={15} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartTotal( { cartTotal, items }: { cartTotal: number, items: number }) {
  return (
    <div className='border p-4 flex flex-col rounded-lg w-full min-h-64 md:h-[50%] mt-6 lg:mt-0 relative'>
      <Text variant={"h3"} className=''>
        Summary Order
      </Text>
      <div className='flex flex-col space-y-4 absolute bottom-4 left-0 w-full px-4'>
        <div className='w-full flex justify-between items-center'>
          <Text variant={"h5"} className='text-background/50'>
            SumTotal:
          </Text>
          <Text variant={"h5"} className=''>
            ${cartTotal}
          </Text>
        </div>

        <div className='w-full flex justify-center'>
          <Button className='w-full py-2 rounded-md bg-background hover:bg-background/90 text-foreground'>
            Buy Now (
            <span>
              <Text variant={"p"}>0{items}</Text>
            </span>
            )
          </Button>
        </div>
      </div>
    </div>
  );
}
