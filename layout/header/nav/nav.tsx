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
import useHeaderSearch from "@/modules/store/header-search";
import { ProductSearch } from "../components/desktop/header-desktop";


export default function Nav() {
  const { isSearch } = useHeaderSearch();
  
  return (
    <>
      <NavigationMenu className='space-x-2'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-transparent hover:bg-transparent'>
              <Text variant={"p"}>Categories</Text>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='px-4 py-2 rounded-xl'>
              <NavigationMenuLink>
                <Text variant={"p"}>Link</Text>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        {!isSearch ? (
          <NavigationMenuList className='space-x-4'>
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
        ) : (
          <ProductSearch />
        )}
      </NavigationMenu>
    </>
  );
}
