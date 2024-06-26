"use client";
import "../src/assets/style.css";
import { useState, useEffect } from "react";

const loopArr = [
  "Hello World",
  "你好世界",
  "Hej, Verden",
  "สวัสดีโลก",
  "Hola mundo",
  "こんにちは、世界",
  "Ciao Mondo",
  "반갑다 세상아",
  "שלום עולם",
  "Hallo Welt",
  "Olá, mundo",
  "Привiт, свiт",
  "Kamusta mundo",
  "नमस्ते दुनिया",
  "Halo Dunia",
  "Aloha Honua",
  "Salut le Monde",
  "Hallo verden",
  "Hallå världen",
  "Здравствуй, мир",
];

export default function TextLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = loopArr[index].length * 400;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <div className="TextLoop ">
      <div class="typewriter ">
        <h1 className="text-xl" key={loopArr[index]}>
          {loopArr[index]}
        </h1>
      </div>
    </div>
  );
}
