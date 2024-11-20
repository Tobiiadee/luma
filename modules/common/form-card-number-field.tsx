import { FC, ChangeEvent } from "react";
import { Control, Controller } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

// Define the prop types
interface FormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  maxLength: number;
}

// Create the reusable component
const FormCardNumberField: FC<FormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  maxLength
}) => {
  // Function to format the card number with hyphens
  const formatCardNumber = (value: string): string => {
    return value
      .replace(/\D/g, "") // Remove all non-digit characters
      .replace(/(.{4})/g, "$1-") // Add a hyphen after every 4 digits
      .replace(/-$/, ""); // Remove trailing hyphen, if any
  };

  // Handle input change with formatting
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const rawValue = e.target.value;
    const formattedValue = formatCardNumber(rawValue);
    onChange(formattedValue); // Update the value
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormControl>
            <Input
              type="text" 
              maxLength={maxLength}// Ensure type is "text"
              placeholder={placeholder}
              {...field}
              value={field.value || ""} // Ensure the field value is never undefined
              onChange={(e) => handleChange(e, field.onChange)} // Apply formatting logic
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCardNumberField;
