import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { GuessList } from "./GuessList";
import { HappyBanner } from "./HappyBanner";
import { SadBanner } from "./SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  return (
    <>
      {hasWon && <HappyBanner attempts={guessList.length} />}
      {!hasWon && guessList.length === 6 && <SadBanner answer={answer} />}
      <GuessList guessList={guessList} answer={answer} setHasWon={setHasWon} />
      <Input guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
