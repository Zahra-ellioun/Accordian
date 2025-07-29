import { useState } from "react";

const RandomColor = () => {
  const [bgcolor, setBgColor] = useState("white");
  const [hexType, setHexType] = useState("hex");

  // راه حل اول
  const randomRgbColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setBgColor(`RGB(${red},${green},${blue})`);
    setHexType("rgb");
  };

  const randomHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor("#" + ("000000" + randomColor).slice(-6));
    setHexType("hex");
  };

  const handleGenerateRandomColor = () => {
    if (hexType === "hex") {
      randomHexColor();
    } else randomRgbColor();
  };

  // راه حل دوم
  // const randomRgbColor = () => {};

  // const randomHexColor = () => {
  //   // HEX COLOR = #312123
  //   const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  //   let hexcolor = "#";
  //   const hexLenght = Hex.length;
  //   for (let i = 0; i < 6; i++) {
  //     // console.log(hexcolor);
  //     let hexRandom = Hex[Math.floor(Math.random() * hexLenght)];
  //     console.log(hexRandom);
  //     console.log(hexcolor);
  //     hexcolor += hexRandom;
  //   }
  //   console.log(hexcolor);
  //   setBgColor(hexcolor);
  // };

  return (
    <div
      className="w-full h-screen pt-2 flex flex-col"
      style={{ backgroundColor: `${bgcolor}` }}
    >
      <div className="flex space-x-5 justify-center items-center">
        <button
          onClick={randomRgbColor}
          className="px-3 py-2 rounded-2xl bg-red-400 border-1 border-red-600"
        >
          Create Random RGB
        </button>
        <button
          onClick={randomHexColor}
          className="px-3 py-2 rounded-2xl bg-red-400 border-1 border-red-600"
        >
          Create Random HEX
        </button>
        <button
          onClick={handleGenerateRandomColor}
          className="px-3 py-2 rounded-2xl bg-red-400 border-1 border-red-600"
        >
          Generate Random color
        </button>
      </div>
      <div className="flex-1 ">
        <div className="flex items-center justify-center  h-full">
          <h1 className="text-7xl">{bgcolor}</h1>
        </div>
      </div>
    </div>
  );
};
export default RandomColor;
