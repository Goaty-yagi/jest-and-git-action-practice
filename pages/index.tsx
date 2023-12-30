import { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(true);
  const test = "Hello Jest";
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const onClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      setIsClicked(true);
      setTimeout(() => {
        setValue("");
      }, 3000);
      console.log("Submited");
    } else {
      console.log("Input is empty");
    }
  };
  return (
    <>
      <form onSubmit={onClick}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          maxLength={10}
          placeholder={"Type something..."}
        />
        <div data-testid="test-val">{value}</div>
        <button type={"submit"} disabled={isClicked}>
          Submit
        </button>
        <div data-testid="my-element">{test}</div>
      </form>
    </>
  );
}
