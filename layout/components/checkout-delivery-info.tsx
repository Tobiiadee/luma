import { Button } from "@/modules/common/ui/button";
import { Checkbox } from "@/modules/common/ui/checkbox";
import { Text } from "@/modules/common/ui/text";
import { DeliveryForm } from "./delivery-form";
import { useEffect, useState } from "react";
import { EditDeliveryForm } from "./edit-delivery-form";

export type DeliveryInfoType = {
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  email: string;
  city_town: string;
  zipCode: string;
};

const deliveryInfo: DeliveryInfoType = {
  firstName: "John",
  lastName: "Doe",
  address: "13 Mercyland Estate",
  mobile: "+234 567 8901",
  email: "you@example.com",
  city_town: "Port Harcourt",
  zipCode: "12345",
};

export function DeliveryInfo() {
  const [returningCustomer, setReturningCustomer] = useState(false);
  const [editDelivery, setEditDelivery] = useState(false);

  useEffect(() => {
    if (!!deliveryInfo) {
      setReturningCustomer(true);
      setEditDelivery(false);
    }
  }, []);

  const handleReturningCustomer = () => {
    setReturningCustomer(!returningCustomer);
    setEditDelivery(false); // Set state based on checkbox state
  };

  return (
    <div className='flex flex-col space-y-6 w-full'>
      <div className='flex items-center space-x-2'>
        <Checkbox onClick={handleReturningCustomer} id='delivery' />
        <label
          htmlFor='delivery'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          <Text variant={"p"}>Returning customer?</Text>
        </label>
      </div>
      <div className='lg:border lg:p-4 rounded-lg flex flex-col space-y-6 w-full'>
        <div className='flex items-center justify-between w-full'>
          <Text variant={"h3"} className=''>
            {editDelivery
              ? "Edit Delivery Information"
              : "Delivery Information"}
          </Text>

          {returningCustomer && (
            <Button
              onClick={() => setEditDelivery(true)}
              className='bg-background/10 hover:bg-background/20 font-semibold rounded-lg text-background'>
              <Text variant={"p"} className='font-medium'>
                Edit
              </Text>
            </Button>
          )}
        </div>

        {!returningCustomer ? (
          <DeliveryForm />
        ) : (
          <div>
            {editDelivery ? (
              <EditDeliveryForm deliveryInfo={deliveryInfo} />
            ) : (
              <ReturningCustomer deliveryInfo={deliveryInfo} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ReturningCustomer({
  deliveryInfo,
}: {
  deliveryInfo: DeliveryInfoType;
}) {
  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex space-x-1 items-center'>
        <Text variant={"p"} className='font-semibold text-background/60'>
          {deliveryInfo.lastName}
        </Text>
        <Text variant={"p"} className='font-semibold text-background/60'>
          {deliveryInfo.firstName}
        </Text>
      </div>

      <Text variant={"p"} className='font-semibold text-background/60'>
        {deliveryInfo.address}
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        {deliveryInfo.mobile}
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        {deliveryInfo.email}
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        {deliveryInfo.city_town}
      </Text>
      <Text variant={"p"} className='font-semibold text-background/60'>
        {deliveryInfo.zipCode}
      </Text>
    </div>
  );
}
