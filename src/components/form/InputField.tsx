/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
  name?: string;
  placeholder?: string;
  defaultValues?: any;
}

const InputField = ({
  type,
  label,
  register,
  name,
  placeholder,
  defaultValues,
}: IInputFieldProps) => {
  return (
    <div className="">
      <Label htmlFor={label} className="my-2">
        {label}
      </Label>
      <Input
        type={type}
        {...register}
        name={name}
        className="mt-2 mb-2 border-green-500 focus:border-red-500"
        placeholder={placeholder}
        defaultValue={defaultValues}
      />
    </div>
  );
};

export default InputField;
