import React, { useState } from "react";

export const Input = ({ guessList, setGuessList }) => {
  const [input, setInput] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuessList([...guessList, input]);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={guessList.length >= 6}
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        pattern=".{5}"
        required
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
};
