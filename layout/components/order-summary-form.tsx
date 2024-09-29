/** @format */

import FormField from "@/modules/common/components/form-field";
import { Button } from "@/modules/common/ui/button";
import { Form } from "@/modules/common/ui/form";
import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  holderName: z.string(),
  cardNumber: z.string(),
  expiry: z.string(),
  cvc: z.number(),
  pin: z.number(),
  email: z.string(),
});

export default function OrderSummaryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      holderName: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission (type-safe)
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        {/* Use the reusable FormField component */}

        <FormField
          control={form.control}
          name='email'
          label='Email'
          placeholder='you@example.com'
        />

        <FormField
          control={form.control}
          name='holdersName'
          label='Card Holder Name'
          placeholder='John Doe'
        />

        <FormField
          control={form.control}
          name='cardNumber'
          label='Card Number'
          placeholder='1234 **** **** 3456'
        />
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center w-full'>
          <FormField
            control={form.control}
            name='expiry'
            label='Expiry'
            placeholder='MM/YY'
          />

          <FormField
            control={form.control}
            name='cvc'
            label='CVC'
            placeholder='123'
          />
        </div>

        <Total />

        <div className='flex w-full px-4'>
          <Button
            type='submit'
            variant={"default"}
            className='bg-background text-foreground hover:bg-background/90 mt-8 w-full'>
            <Text variant={"p"}>Pay $569.99</Text>
          </Button>
        </div>
      </form>
    </Form>
  );
}

function Total() {
  return (
    <div className='flex flex-col space-y-2 w-full pt-6'>
      <div className='flex items-center justify-between w-full'>
        <Text variant={"p"} className='font-semibold'>
          Sub Total
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $509.99
        </Text>
      </div>
      <div className='flex items-center justify-between w-full'>
        <Text variant={"p"} className='font-semibold'>
          Shipping Cost
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $59.99
        </Text>
      </div>
      <Separator />

      <div className='flex items-center justify-between w-full'>
        <Text variant={"p"} className='font-semibold'>
          Total
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $569.99
        </Text>
      </div>
    </div>
  );
}
