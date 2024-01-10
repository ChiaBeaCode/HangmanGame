"use client";
import { useCallback, useEffect, useState } from "react";
import words from "./static/wordList.json";
import { TileRack } from "./components/TileRack";
import { HangmanArt } from "./components/HangmanArt";
import { WordRack } from "./components/WordRack";
import { Win, Lose } from "./components/WinLoseBanner";
import { Hint } from "./components/Hint";
import RefreshButton from "./components/RefreshButton";
// import Header from "./components/Header";

export default function Hangman() {
  //Function that grabs a random word category
  const randomCategory = (): Object => {
    return words[Math.floor(Math.random() * words.length)];
  };

  //Stores the category object for 'hint' and 'word' to access
  const [category, setCategory] = useState<Object>(randomCategory);
  const [hint, setHint] = useState<string>(""); //Title of the category as a hint
  const [word, setWord] = useState<string>(""); //Random word from 'hint' array

  //Stores all the letters guessed by user
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    setHint(Object.keys(category)[0]);
    setWord(
      Object.values(category)[0][
        Math.floor(Math.random() * Object.values(category)[0].length)
      ]
    );
  }, [category]);

  //Stores the incorrect letters guessed by user
  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );
  //Stores the correct letters guessed by user
  const correctLetters = guessedLetters.filter((letter) =>
    word.includes(letter)
  );
  //Tracks if the user lost the game
  const lose: boolean = incorrectLetters.length >= 6;
  //Tracks if the user won the game
  const win: boolean = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  //Function that handles the letters guessed user
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) {
        return;
      } else {
        setGuessedLetters((prevLetters) => [...prevLetters, letter]);
      }
    },
    [guessedLetters]
  );

  //Handles the users keyboard strokes, if they are alphabetical, else ignored
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zA-Z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  // function handleReset() {
  //   TODO: remove reload for
  //   refresh using vvvv
  //   setWord(choseWord);
  // }

  return (
    <main className="hangmanpage h-[calc(100vh+50px)] lg:h-[calc(100vh-80px)] bg-white bg-gradient-to-t from-[#1fad55]">
      {/* <Header /> */}
      {win || lose ? (
        <RefreshButton saying={"Play Again"} />
      ) : (
        <RefreshButton saying={"New Game"} />
      )}
      {win ? <Win /> : lose ? <Lose /> : null}

      <div className=" w-fit m-auto p-6 md:pt-0 flex flex-wrap flex-col md:flex-row">
        <HangmanArt numOfGuess={incorrectLetters.length} />

        <div className=" flex flex-col justify-evenly h-auto md:ml-8 pt-3">
          <Hint hint={hint} />

          <WordRack guessedLetters={guessedLetters} word={word} lose={lose} />
        </div>
      </div>

      <TileRack
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </main>
  );
}
