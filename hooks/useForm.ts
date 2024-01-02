import { useState, ChangeEvent, FormEvent } from 'react';

export interface UseFormProps {
  value: string;
  isClicked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (callback: (value: string) => void) => (event: FormEvent<HTMLFormElement>) => void;
}

export default function UseFormProps() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
  });
  const [isClicked, setIsClicked] = useState(false);
  const { username, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    console.log(formData);


  };


  return {
    username,
    email,
    password,
    re_password,
    formData,
    isClicked,
    onChange,
    onSubmit,
  };
}
