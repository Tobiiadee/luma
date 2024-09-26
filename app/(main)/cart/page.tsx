/** @format */

import { CartBreadcrumb } from "@/layout/components/cart-breadcrumb";
import CartItems from "@/layout/components/cart-items";
import { Text } from "@/modules/common/ui/text";
import React from "react";

export default function Index() {
  return (
    <div className='flex flex-col space-y-6 relative'>
      <CartBreadcrumb />

      <Text variant={"h2"} className='font-medium '>
        My Cart
      </Text>

      <CartItems />
    </div>
  );
}
