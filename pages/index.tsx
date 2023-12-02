import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

function evnet() {
  console.log("clicked");
}

export default function Home() {
  const test = "Hello TEST";
  return (
    <>
      <Button text={"BUTTON"} event={evnet} />
      {test}
    </>
  );
}
