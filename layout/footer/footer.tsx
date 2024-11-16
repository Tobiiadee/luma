import { Separator } from "@/modules/common/ui/separator";
import { Text } from "@/modules/common/ui/text";
import React from "react";
import Logo from "../header/components/logo";
import FooterLinks from "./components/footer-links";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='flex flex-col space-y-10 w-full mt-14'>
      <Separator />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='col-span-1 flex flex-col space-y-6'>
          <Logo />
          <Text variant={"p"}>
            Luma is a modern e-commerce platform designed with a focus on
            seamless user experience and elegant design. It offers a curated
            selection of products, showcasing responsive layouts, fast load
            times, and secure transactions. Built with cutting-edge
            technologies, Luma demonstrates my expertise in web development,
            from creating intuitive navigation to integrating dynamic product
            displays and payment solutions. Explore the future of online
            shopping with a store that highlights clean code, innovation, and
            user-centric design.
          </Text>
        </div>
        <FooterLinks />
      </div>
      <FooterFlex />
    </div>
  );
}

function FooterFlex() {
  return (
    <div className='flex flex-col space-y-4'>
      <Separator />
      <div className='grid grid-cols-2 gap-4 sm:flex sm:space-x-4 w-full'>
        <FooterFlexLink href='Become a seller' />
        <FooterFlexLink href='help center' />
        <FooterFlexLink href='terms of service' />
        <FooterFlexLink href='privacy policy' />
      </div>
    </div>
  );
}

function FooterFlexLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const formattedHref = href.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className='flex items-center space-x-4'>
      {children ? children : null}
      <Link href={formattedHref} className='hover:scale-105 transition'>
        <Text variant={"p"} className='capitalize'>
          {href}
        </Text>
      </Link>
    </div>
  );
}

