import { Text } from "@/modules/common/ui/text";
import { link } from "fs";
import Link from "next/link";
import React from "react";

const DummyLinks = [
  {
    title: "Department",
    links: [
      "Fashion",
      "groceries",
      "beverages",
      "office supplies",
      "books",
      "stationery",
      "clothing",
      "shoes",
      "electronics & gadgets",
      "home & kitchen",
      "beauty & personal care",
      "sports & outdoors",
      "pets",
      "accessories",
      "jewelry",
    ],
  },
  {
    title: "About Us",
    links: ["about luma", "careers", "contact us", "blog", "fAQ"],
  },
  {
    title: "Services",
    links: [
      "gift Cards",
      "shipping & delivery",
      "order pickup",
      "account SignUp",
    ],
  },
  {
    title: "Help",
    links: [
      "Help Center",
      "Returns",
      "Track orders",
      "Shipping Policy",
      "Feedback",
      "Privacy Policy",
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className='col-span-2 w-full'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {DummyLinks.map((link) => (
          <FooterMenu key={link.title} title={link.title} links={link.links} />
        ))}
      </div>
    </div>
  );
}

function FooterMenu({ title, links }: { title: string; links: string[] }) {
  return (
    <div className='flex flex-col space-y-6'>
      <Text variant={"h3"} className='capitalize'>
        {title}
      </Text>
      <div className='flex flex-col space-y-2'>
        {links.map((link) => {
          const formattedLink = link.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              href={`/category/${formattedLink}`}
              key={link}
              className='hover:scale-105 transition'>
              <Text variant={"p"} className='capitalize'>
                {link}
              </Text>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
