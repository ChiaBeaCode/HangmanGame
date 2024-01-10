import styles from "../style/tiles.module.css";

type HangmanGuesses = {
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function TileRack({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
}: HangmanGuesses) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="tileRack flex flex-wrap w-11/12 md:w-[540px] border-[1px] border-solid border-black rounded-md mx-auto py-3.5 px-2 bg-gradient-to-bl from-[#e1a95f] via-[#cc7722] to-[#cc7722] shadow-[-8px_-5px_15px_#147238]">
      {alphabet.map((letter, i) => {
        const isActive = correctLetters.includes(letter);
        const isInactive = incorrectLetters.includes(letter);
        return (
          <button
            className={` flex justify-center text-center bg-[#f0f0f0] text-2xl md:text-3xl text-black border-2 border-solid border-black rounded-[10px] md:pt-0.5 m-1 md:m-1.5 shadow-[2px_5px_0px_#996515] cursor-pointer w-9 h-9 md:w-11 md:h-11 ${
              styles.tile
            }
                    ${isActive ? styles.active : ""}
                    ${isInactive ? styles.inactive : ""}
                    `}
            key={i}
            onClick={() => addGuessedLetter(letter)}
            disabled={isActive || isInactive}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
