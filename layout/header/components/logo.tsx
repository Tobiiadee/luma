/** @format */

import { Text } from "@/modules/common/ui/text";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Text variant={"h3"}>LUMA</Text>
    </Link>
  );
}
