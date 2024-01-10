type HangmanWordProps = {
  guessedLetters: string[];
  word: string;
  lose: boolean;
};

export function WordRack({ guessedLetters, word, lose }: HangmanWordProps) {
  return (
    <div className=" flex justify-center font-mono md:text-[40px] font-bold uppercase m-auto md:ml-24 max-w-fit flex-wrap text-3xl ">
      {word.split("").map((letter, i) => {
        return (
          <div
            key={i}
            className=" my-0 mx-2.5 border-b-[5px] border-b-black max-h-11"
          >
            {lose === true ? (
              <div
                style={{
                  visibility: "visible",
                  color: guessedLetters.includes(letter) ? "black" : "red",
                }}
              >
                {letter}
              </div>
            ) : (
              <div
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
              >
                {letter}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
