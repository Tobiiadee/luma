/** @format */

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/modules/common/ui/navigation-menu";
import { Text } from "@/modules/common/ui/text";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <NavigationMenu className="space-x-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              <Text variant={"p"}>Categories</Text>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="space-x-4">
          <Link href={""}>
            <Text variant={"p"}>Deals</Text>
          </Link>
          <Link href={""}>
            <Text variant={"p"}>What's New</Text>
          </Link>
          <Link href={""}>
            <Text variant={"p"}>Delivery</Text>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}