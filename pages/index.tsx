import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState('');
  const test = "Hello Jest";
  const onChange = (event:any) => {
    setValue(event.target.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={onChange} placeholder={"Type something..."} />
      <div data-testid="test-val">{value}</div>
      <div data-testid="my-element">{test}</div>
    </>
  );
}
