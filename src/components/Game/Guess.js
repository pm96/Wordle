import { checkGuess } from "../../game-helpers";
import { range } from "../../utils.js";
export const Guess = ({ guess, answer, setHasWon }) => {
  if (guess) {
    const checkedArr = checkGuess(guess, answer);
    if (checkedArr.filter((g) => g.status === "correct").length === 5)
      () => setHasWon(true);

    return (
      <p className="guess">
        {range(0, 5).map((index) => {
          const style = "cell " + checkedArr[index].status;
          return (
            <span className={style} key={Math.random()}>
              {guess[index]}
            </span>
          );
        })}
      </p>
    );
  }
  return (
    <p className="guess" key={Math.random()}>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
};
