import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { Guess } from "./Guess";

export const GuessList = ({ guessList, answer, setHasWon }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess
            guess={guessList[index]}
            answer={answer}
            key={Math.random()}
            setHasWon={setHasWon}
          />
        );
      })}
    </div>
  );
};
