import { CartItemType, ProductType } from "@/types";
import { create } from "zustand";

interface CartStoreType {
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
  cartItems: CartItemType[];
  setCartItems: (items: CartItemType[]) => void;
  addToCart: (item: CartItemType) => void;
}

const useCartStore = create<CartStoreType>((set) => ({
  isSelected: false,
  cartItems: [],
  setIsSelected: (value) =>
    set(() => ({
      isSelected: value,
    })),
  setCartItems: (items) =>
    set(() => ({
      cartItems: items,
    })),
    addToCart: (item) =>
      set((state) => ({
        cartItems: [...state.cartItems, item],
      })),
}));

export default useCartStore;
