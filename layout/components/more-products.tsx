import ProductCard from "@/modules/common/components/product-card";
import { Button } from "@/modules/common/ui/button";
import { Text } from "@/modules/common/ui/text";
import React from "react";

export default function MoreProducts() {
  return (
    <div className='flex flex-col space-y-10 pt-14'>
      <Text variant={"h2"} className='text-background'>
        More Products To Love
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Button className="rounded-2xl text-foreground bg-background hover:bg-background/90">View More</Button>
      </div>
    </div>
  );
}
