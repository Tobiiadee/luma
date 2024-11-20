import { ProductCheckoutType } from "@/types";
import { create } from "zustand";

interface CheckoutStoreType {
  checkoutItems: ProductCheckoutType[];
  sumTotal: number;
  setCheckoutItems: (value: ProductCheckoutType[]) => void;
  setSumTotal: (value: number) => void;
}

const useCheckoutStore = create<CheckoutStoreType>((set) => ({
  checkoutItems: [],
  sumTotal: 0,
  setSumTotal: (value) =>
    set(() => ({
      sumTotal: value,
    })),
  setCheckoutItems: (value) =>
    set(() => ({
      checkoutItems: value,
    })),
}));

export default useCheckoutStore;
