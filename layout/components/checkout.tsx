/** @format */

"use client";

import React from "react";
import { CheckoutBreadcrumb } from "./checkout-breadcrumb";
import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import { Label } from "@/modules/common/ui/label";
import { RadioGroup, RadioGroupItem } from "@/modules/common/ui/radio-group";
import OrderSummaryForm from "./order-summary-form";
import { MasterCard, VisaCard } from "@/lib/assets/svgs";
import { DeliveryInfo } from "./checkout-delivery-info";
import useCheckoutStore from "@/modules/store/checkout-store";

export const metadata = {
  title: "Checkout - Your Store",
  description: "Review your items and shipping information before completing your purchase.",
};

export default function Checkout() {
  const checkoutItems = useCheckoutStore((state) => state.checkoutItems);

  return (
    <div className='flex flex-col space-y-10 relative'>
      <div className='flex flex-col space-y-2'>
        <CheckoutBreadcrumb />
        <Separator />
      </div>

      <div className='flex flex-col space-y-6'>
        <Text variant={"h3"} className=''>
          Review Item And Shipping
        </Text>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-6 w-full'>
          <div className='col-span-2 flex flex-col space-y-6'>
            <div className='flex flex-col space-y-4'>
              {checkoutItems.map((item) => (
                <ItemForShipping
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  color={item.color}
                  quantity={item.quantity}
                  size={item.size}
                />
              ))}
            </div>
            <DeliveryInfo />
          </div>

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className='lg:border h-max lg:p-4 rounded-lg flex flex-col space-y-4 mt-10 lg:mt-0'>
      <Text variant={"h3"} className=''>
        Order Summary
      </Text>
      <div className='flex flex-col space-y-3 lg:space-y-2'>
        <Text variant={"h5"} className='font-semibold'>
          Paymant Details
        </Text>
        <Separator />
      </div>

      <div className=''>
        <RadioGroup defaultValue='credit_card'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='credit_card' id='r1' />
            <Label htmlFor='r1'>Credit Card</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='cash_on_delivery' id='r2' />
            <Label htmlFor='r2'>Cash On Delivery</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='paypal' id='r3' />
            <Label htmlFor='r3'>Paypal</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='flex items-center space-x-4'>
        <MasterCard />
        <VisaCard />
      </div>

      <OrderSummaryForm />
    </div>
  );
}

function ItemForShipping({
  img,
  title,
  price,
  color,
  quantity,
  size,
}: {
  img: string;
  title: string;
  price: string;
  color: string;
  quantity: number;
  size?: string;
}) {
  return (
    <div className='border p-4 rounded-lg flex space-x-4 sm:space-x-10 items-center'>
      <div className='flex items-center'>
        <div className='relative w-20 aspect-square rounded-md flex justify-center items-center overflow-hidden'>
          <Image
            src={`/images/${img}`}
            alt=''
            priority
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col space-y-2'>
          <Text variant={"h3"}>{title}</Text>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Color: {color}
          </Text>
        </div>

        <div className='flex flex-col space-y-2'>
          <Text variant={"h3"} className="text-end">${price}</Text>
          <div className='flex space-x-4 items-center'>
            {size && (
              <Text variant={"p"} className='text-background/60 font-semibold'>
                Size: {size}
              </Text>
            )}
            <Text variant={"p"} className='text-background/60 font-semibold'>
              Quantity: {quantity}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
