/** @format */

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import { Bookmark, CircleUser, ListOrdered, Mail, User } from "lucide-react";
import { Text } from "@/modules/common/ui/text";
import { Button } from "@/modules/common/ui/button";

export default function AccountDropdownMobile() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center space-x-2 hover:bg-transparent hover:text-background'>
          <div className='p-1 rounded-full border'>
            <User size={20} />
          </div>
        </DropdownMenuTrigger>
        <NoAuth />
      </DropdownMenu>
    </div>
  );
}

function OnAuth() {
  return (
    <DropdownMenuContent className='w-52 mt-4 pt-2 mr-4'>
      <DropdownMenuItem>
        <Text variant={"p"}>My Account</Text>
        <DropdownMenuShortcut>
          <CircleUser size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text variant={"p"}>Orders</Text>
        <DropdownMenuShortcut>
          <ListOrdered size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text variant={"p"}>Inbox</Text>
        <DropdownMenuShortcut>
          <Mail size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text variant={"p"}>Saved Items</Text>
        <DropdownMenuShortcut>
          <Bookmark size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className='flex justify-center items-center'>
        <Button
          variant={"default"}
          className='bg-background hover:bg-background/90 text-foreground w-[60%]'>
          <Text variant={"p"}>Log Out</Text>
        </Button>
      </DropdownMenuLabel>
    </DropdownMenuContent>
  );
}

function NoAuth() {
  return (
    <DropdownMenuContent className='w-52 mt-4 pb-2 mr-4'>
      <DropdownMenuLabel className='flex justify-center items-center'>
        <Button
          variant={"default"}
          className='bg-background hover:bg-background/90 text-foreground w-[60%]'>
          <Text variant={"p"}>Sign In</Text>
        </Button>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Text variant={"p"}>My Account</Text>
        <DropdownMenuShortcut>
          <CircleUser size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text variant={"p"}>Orders</Text>
        <DropdownMenuShortcut>
          <ListOrdered size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text variant={"p"}>Saved Items</Text>
        <DropdownMenuShortcut>
          <Bookmark size={20} strokeWidth={1.5} />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
