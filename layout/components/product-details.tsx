import StarRating from "@/modules/common/components/star-rating";
import { Text } from "@/modules/common/ui/text";
import Image from "next/image";
import { Dot, Minus, Plus } from "lucide-react";
import { Button } from "@/modules/common/ui/button";
import { useRouter } from "next/navigation";
import useCheckoutStore from "@/modules/store/checkout-store";
import { CartItemType, ProductCheckoutType, ProductType } from "@/types";
import { useState } from "react";
import { cn } from "@/utils/cn";
import useCartStore from "@/modules/store/cart-store";
import { toast } from "sonner";

export const product: ProductType = {
  id: 1,
  title: "Shoes Reebook",
  price: "299",
  image: ["item1.jpg", "open.jpg", "shop.jpg"],
  description: "",
  rating: 4.5,
  color: ["white", "black", "blue"],
  sizes: ["9", "10", "11", "12", "13"],
  inventoryId: "HJYU-230HU",
  quantity: 12,
  category: "Shoes",
};

export default function ProductDetails() {
  const [productColor, setProductColor] = useState(product.color[0]);
  const [productSize, setProductSize] = useState(product.sizes[0]);
  const [itemCount, setItemCount] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  const onAddItemCount = () => {
    setItemCount(itemCount + 1);
  };

  const onRemoveItemCount = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };

  const checkoutItem: ProductCheckoutType = {
    title: product.title,
    price: product.price,
    image: product.image[0],
    quantity: itemCount,
    color: productColor,
    id: product.id,
    size: productSize,
  };

  const addToCartItem: CartItemType = {
    category: product.category,
    image: product.image[0],
    title: product.title,
    type: product.type,
    color: productColor,
    price: product.price,
    quantity: itemCount,
    itemId: product.id,
    size: productSize,
  };

  return (
    <div className='w-full flex flex-col space-y-4 lg:space-y-2 '>
      <div className='flex items-center justify-between'>
        <div className='w-6 aspect-square rounded-full relative overflow-hidden'>
          <Image
            src={"/images/item1.jpg"}
            alt=''
            priority
            fill
            className='object-cover cursor-pointer'
          />
        </div>

        <Text
          variant={"p"}
          className='font-medium text-background/40 uppercase'>
          {product.inventoryId}
        </Text>
      </div>

      <div className='flex flex-col space-y-1'>
        <Text variant={"h2"} className='text-center lg:text-start'>
          {product.title}
        </Text>
        <div className='flex space-x-2 items-center'>
          <StarRating rating={product.rating} />
          <Text variant={"p"}>({product.rating})</Text>
        </div>
      </div>

      <div className='w-full flex justify-end'>
        <Text variant={"h3"} className=''>
          ${product.price}
        </Text>
      </div>

      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center'>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Color
          </Text>
          <Dot size={34} className='text-background/60' />
          <Text
            variant={"p"}
            className='text-background/60 font-semibold capitalize '>
            {productColor}
          </Text>
        </div>

        <div className='flex space-x-4 '>
          {product.color.map((color, index) => (
            <ProductColor
              key={index}
              color={color}
              productColor={productColor}
              setColor={setProductColor}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-1'>
        <div className='flex items-center'>
          <Text variant={"p"} className='text-background/60 font-semibold'>
            Sizes
          </Text>
          <Dot size={34} className='text-background/60' />
          <Text variant={"p"} className='text-background/60 font-semibold'>
            {productSize}
          </Text>
        </div>

        <div className='grid grid-cols-4 gap-2'>
          {product.sizes.map((size, index) => (
            <ProductSize
              key={index}
              size={size}
              productSize={productSize}
              setProductSize={setProductSize}
            />
          ))}
        </div>
      </div>

      <div className='flex items-center space-x-6 pt-6'>
        <div className='flex justify-between w-24 items-center border rounded-md py-1 px-2 bg-background/10'>
          <Button
            onClick={onAddItemCount}
            variant={"ghost"}
            className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
            <Plus size={15} strokeWidth={1.5} />
          </Button>
          <Text variant={"p"}>{itemCount}</Text>
          <Button
            onClick={onRemoveItemCount}
            className='hover:bg-transparent hover:text-background hover:scale-110 transition p-0 max-h-0'>
            <Minus size={15} strokeWidth={1.5} />
          </Button>
        </div>

        <Text variant={"p"}>
          Only <span className='font-semibold'>12 items</span> left
        </Text>
      </div>

      <div className='flex items-center space-x-4 pt-8'>
        <BuyNowButton product={checkoutItem} />
        <AddToCartButton item={addToCartItem} />
      </div>
    </div>
  );
}

export function ProductColor({
  color,
  setColor,
  productColor,
}: {
  color: string;
  setColor: (value: string) => void;
  productColor: string;
}) {
  const isActive = color === productColor;

  return (
    <div onClick={() => setColor(color)} className='cursor-pointer group'>
      <div
        style={{ backgroundColor: color }}
        className={cn(
          isActive && "scale-110",
          "w-10 aspect-[1/1.5] rounded-sm relative border border-transparent group-hover:scale-105 transition-all overflow-hidden"
        )}
      />
    </div>
  );
}

function ProductSize({
  size,
  productSize,
  setProductSize,
}: {
  size: string;
  productSize: string;
  setProductSize: (value: string) => void;
}) {
  const isActive = size === productSize;

  return (
    <div
      onClick={() => setProductSize(size)}
      className={cn(
        isActive && "bg-background/10",
        "border rounded-md flex items-center justify-center py-1 px-2 cursor-pointer hover:bg-background/10"
      )}>
      <Text variant={"p"} className='text-[12px]'>
        {size}
      </Text>
    </div>
  );
}

function AddToCartButton({ item }: { item: CartItemType }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const isItemInCart = cartItems.find(
    (cartItem) => cartItem.itemId === item.itemId
  );

  const addItemToCartHandler = () => {
    if (isItemInCart) {
      toast.info("Item already in cart");
      return;
    }
    addToCart(item);
    toast.success("Item added to cart", {
      description: "You can view your cart from the cart icon on the top right",
    });
  };

  return (
    <Button
      onClick={addItemToCartHandler}
      className='w-[90%] py-2 rounded-md bg-transparent hover:bg-background/10 text-background border'>
      <Text variant={"p"}>Add To Cart</Text>
    </Button>
  );
}

function BuyNowButton({ product }: { product: ProductCheckoutType }) {
  const { push } = useRouter();
  const setCheckoutItems = useCheckoutStore((state) => state.setCheckoutItems);
  const setSumTotal = useCheckoutStore((state) => state.setSumTotal);

  const onSendToCheckout = () => {
    setCheckoutItems([product]);
    setSumTotal(Number(product.price));
    push("/checkout");
  };

  return (
    <Button
      onClick={onSendToCheckout}
      className='w-[90%] py-2 rounded-md bg-background hover:bg-background/90 text-foreground'>
      <Text variant={"p"}>Buy Now</Text>
    </Button>
  );
}
