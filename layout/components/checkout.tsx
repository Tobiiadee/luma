/** @format */

"use client";

import React, { useState } from "react";
import { CheckoutBreadcrumb } from "./checkout-breadcrumb";
import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import { Button } from "@/modules/common/ui/button";
import { Trash } from "lucide-react";
import { Checkbox } from "@/modules/common/ui/checkbox";
import { DeliveryForm } from "./delivery-form";
import { Label } from "@/modules/common/ui/label";
import { RadioGroup, RadioGroupItem } from "@/modules/common/ui/radio-group";
import OrderSummaryForm from "./order-summary-form";
import { MasterCard, VisaCard } from "@/lib/assets/svgs";

export default function Checkout() {
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
            <ItemsForShipping />
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
    <div className='border p-4 rounded-lg flex flex-col space-y-4 mt-10 lg:mt-0'>
      <Text variant={"h3"} className=''>
        Order Summary
      </Text>
      <div className='flex flex-col space-y-2'>
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

function ItemsForShipping() {
  return (
    <div className='flex flex-col space-y-4'>
      <ItemForShipping />
    </div>
  );
}

function ItemForShipping() {
  return (
    <div className='border p-4 rounded-lg flex space-x-4 sm:space-x-10 items-center'>
      <div className='flex items-center'>
        <div className='relative w-24 lg:w-28 aspect-square rounded-md flex justify-center items-center overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            priority
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col space-y-2'>
          <Text variant={"h3"}>Airpod Pro</Text>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Color: Black
          </Text>
        </div>

        <div className='flex flex-col space-y-2'>
          <Text variant={"h3"}>$509.99</Text>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Quantity: 1
          </Text>
        </div>
      </div>
    </div>
  );
}

function DeliveryInfo() {
  const [returningCustomer, setReturningCustomer] = useState(false);

  const handleReturningCustomer = () => {
    setReturningCustomer(!returningCustomer); // Set state based on checkbox state
  };

  return (
    <div className='flex flex-col space-y-6 w-full'>
      <div className='flex items-center space-x-2'>
        <Checkbox onClick={handleReturningCustomer} id='delivery' />
        <label
          htmlFor='delivery'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          <Text variant={"p"}>Returning customer?</Text>
        </label>
      </div>
      <div className='lg:border lg:p-4 rounded-lg flex flex-col space-y-6 w-full'>
        <div className='flex items-center justify-between w-full'>
          <Text variant={"h3"} className=''>
            Delivery Information
          </Text>

          {returningCustomer ? (
            <Button className='bg-background/10 hover:bg-background/20 font-semibold rounded-lg text-background'>
              <Text variant={"p"} className='font-medium'>
                Edit
              </Text>
            </Button>
          ) : (
            <Button className='bg-background/10 hover:bg-background/20 font-semibold rounded-lg text-background'>
              <Text variant={"p"} className='font-medium'>
                Save Information
              </Text>
            </Button>
          )}
        </div>

        {returningCustomer ? <ReturningCustomer /> : <DeliveryForm />}
      </div>
    </div>
  );
}

function ReturningCustomer() {
  return (
    <div className='flex flex-col space-y-1'>
      <Text variant={"p"} className='font-semibold text-background/60'>
        John Doe
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        13 Mercyland Estate
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        +234 567 8901
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        you@example.com
      </Text>
    </div>
  );
}
