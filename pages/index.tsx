import { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const test = "Hello Jest";
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };
  return (
    <>
      <form onSubmit={onClick}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={"Type something..."}
        />
        <div data-testid="test-val">{value}</div>
        <button type={"submit"} disabled={isClicked}>Submit</button>
        <div data-testid="my-element">{test}</div>
      </form>
    </>
  );
}