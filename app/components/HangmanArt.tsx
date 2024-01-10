import React from "react";

const head = (
  <div className=" absolute h-12 w-12 top-10 right-[-18px] rounded-full border-solid border-8 border-black"></div>
);
const torso = (
  <div className=" absolute h-[70px] w-2.5 top-[85px] right-0 bg-black rounded"></div>
);
const armR = (
  <div className=" absolute h-2.5 w-[60px] top-[90px] right-[-52px] bg-black rotate-[150deg]"></div>
);
const armL = (
  <div className=" absolute h-2.5 w-[60px] top-[90px] right-0 bg-black rotate-[-150deg]"></div>
);
const legR = (
  <div className=" absolute h-2.5 w-[60px] bottom-[60px] -right-10 bg-black rotate-[60deg]"></div>
);
const legL = (
  <div className=" absolute h-2.5 w-[60px] bottom-[60px] -right-2.5 bg-black rotate-[-60deg]"></div>
);
const BODY = [head, torso, armR, armL, legR, legL];

type HangmanBodyProps = {
  numOfGuess: number;
};

export function HangmanArt({ numOfGuess }: HangmanBodyProps) {
  return (
    // Container
    <div className=" relative mt-0 mx-auto">
      {/* {BODY.slice(0, numOfGuess)} */}
      {BODY.slice(0, numOfGuess).map((bodyPart, index) => (
        <React.Fragment key={index}>{bodyPart}</React.Fragment>
      ))}
      {/* Top bar */}
      <div className=" h-2.5 w-28 bg-black ml-20"></div>
      {/* Rope bar */}
      <div className=" absolute h-12 w-2.5 bg-black top-0 right-0"></div>
      {/* Pole  */}
      <div className=" h-56 w-2.5 bg-black ml-20"></div>
      {/* Floor bar */}
      <div className=" h-2.5 w-44 bg-black"></div>
    </div>
  );
}
