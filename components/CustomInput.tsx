import { ChangeEvent } from "react";
import { useState } from "react";

export type CustomInputProps = {
  labelText?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  maxLength?: number;
  placeholder: string;
  required?: boolean;
};

export default function CustomInput({
  labelText,
  type,
  placeholder,
  onChange,
  value,
  maxLength,
  required = false,
}: CustomInputProps) {
  const [showPassword, setShowpassword] = useState(false);
  const isPassword = type === "password" ? true : false;

  return (
    <>
      <div>
        <input
          placeholder={placeholder}
          name={labelText}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          maxLength={maxLength ? maxLength : 50}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  );
}
