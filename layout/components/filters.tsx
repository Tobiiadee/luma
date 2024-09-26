/** @format */

import { Text } from "@/modules/common/ui/text";
import { ChevronDown } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";

const filterArray = [
  "type",
  "price",
  "review",
  "color",
  "material",
  "offer",
  "all filters",
];

export default function Filters() {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex space-x-6'>
        {filterArray.map((filter, i) => (
          <Filter key={i} text={filter} />
        ))}
      </div>

      <SortDropdown />
    </div>
  );
}

function Filter({ text }: { text: string }) {
  return (
    <div className='flex items-center space-x-2 bg-background/10 px-2 py-1 rounded-xl cursor-pointer'>
      <Text variant={"p"} className='capitalize font-medium'>
        {text}
      </Text>
      <ChevronDown size={16} strokeWidth={1.5} />
    </div>
  );
}

function SortDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Sort />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Sort() {
  return (
    <div className='flex items-center space-x-2 bg-background/10 px-2 py-1 rounded-xl cursor-pointer'>
      <Text variant={"p"}>Sort</Text>
      <ChevronDown size={16} strokeWidth={1.5} />
    </div>
  );
}
