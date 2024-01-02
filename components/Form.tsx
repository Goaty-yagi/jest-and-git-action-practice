import React, { useState, FormEvent } from "react";
import useForm, { UseFormProps } from "@/hooks/useForm";
import Button from "./Button";
import CustomInput from "./CustomInput";

export default function Form() {
  const {
    username,
    email,
    password,
    re_password,
    isClicked,
    onChange,
    onSubmit,
  } = useForm();
  const configs = [
    {
      labelText: "username",
      type: "text",
      placeholder: "Enter Username.",
      maxLength: 10,
      value: username,
      required: true,
    },
    {
      labelText: "email",
      type: "text",
      placeholder: "Enter Email.",
      value: email,
      required: true,
    },
    {
      labelText: "password",
      type: "password",
      placeholder: "Enter password.",
      value: password,
      required: true,
    },
    {
      labelText: "re_password",
      type: "password",
      placeholder: "Enter password again.",
      value: re_password,
      required: true,
    },
  ];

  return (
    <form onSubmit={onSubmit}>
      {configs.map((e) => (
        <div key={e.labelText}>
          <CustomInput {...e} onChange={onChange} />
        </div>
      ))}
      <Button disabled={isClicked}>Submit</Button>
    </form>
  );
}
