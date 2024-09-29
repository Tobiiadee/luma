/** @format */
"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/modules/common/ui/button";
import { Form } from "@/modules/common/ui/form";
import FormField from "@/modules/common/components/form-field";
import { Text } from "@/modules/common/ui/text";

// Define the validation schema using Zod
const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city_town: z.string(),
  zipCode: z.number(),
  mobile: z.number(),
  email: z.string(),
});

export function DeliveryForm() {
  // Initialize the form using react-hook-form and zodResolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
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
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center w-full'>
          <FormField
            control={form.control}
            name='firstName'
            label='First Name'
            placeholder='John'
          />

          <FormField
            control={form.control}
            name='lastName'
            label='Last Name'
            placeholder='Doe'
          />
        </div>

        <FormField
          control={form.control}
          name='address'
          label='Address'
          placeholder='123 Main St'
        />
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center w-full'>
          <FormField
            control={form.control}
            name='city_town'
            label='City/Town'
            placeholder='City or Town'
          />

          <FormField
            control={form.control}
            name='zipCode'
            label='Zip Code'
            placeholder='12345'
          />
        </div>

        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center w-full'>
          <FormField
            control={form.control}
            name='mobile'
            label='Mobile Number'
            placeholder='123-456-7890'
          />
          <FormField
            control={form.control}
            name='email'
            label='Email'
            placeholder='you@example.com'
          />
        </div>

        <div className='flex justify-end w-full'>
          <Button
            type='submit'
            variant={"default"}
            className='bg-background text-foreground hover:bg-background/90 mt-8'>
            <Text variant={"p"}>Checkout</Text>
          </Button>
        </div>
      </form>
    </Form>
  );
}
