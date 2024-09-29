/** @format */

import { ProductBreadcrumb } from "@/layout/components/product-breadcrumb";
import ProductDescription from "@/layout/components/product-description";
import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";

export default function Index() {
  return (
    <div className='flex flex-col space-y-6 relative'>
      <div className='flex flex-col space-y-2'>
        <ProductBreadcrumb />
        <Separator />
      </div>
      <ProductDescription />
    </div>
  );
}
