import React, { useCallback, useState } from "react";
import Hands from "../hands";
import { PAPER, ROCK, SCISSOR } from "../../utils/component";
import Score from "../score";

const Game = () => {
  const [loading, setLoading] = useState(false);
  const [countScore, setCountScore] = useState(0);
  const [msgResult, setMsgResult] = useState("");
  const [handComputer, setHandComputer] = useState(null);

  const handleWin = useCallback(() => {
    setCountScore(countScore + 1);
    setMsgResult("YOU WIN");
  }, [countScore]);

  const handleLoose = useCallback(() => {
    setCountScore(countScore - 1);
    setMsgResult("YOU LOOSE");
  }, [countScore]);

  const calculePointer = useCallback((userPlay, computerPlay) => {
    console.log(userPlay, computerPlay)
    if (userPlay === computerPlay) {
      setMsgResult("YOU TIE");
      return;
    }

    if (userPlay === PAPER && computerPlay === ROCK) {
      handleWin();
      return;
    }

    if (userPlay === ROCK && computerPlay === SCISSOR) {
      handleWin();
      return;
    }

    if (userPlay === SCISSOR && computerPlay === PAPER) {
      handleWin();
      return;
    }
    handleLoose();
  }, [handleLoose, handleWin]);

  const playComputer = useCallback((userPlay) => {
    const plays = [PAPER, ROCK, SCISSOR];
    const computerPlay = plays[Math.floor(Math.random() * 3)];
    setHandComputer(computerPlay);
    calculePointer(userPlay, computerPlay)
    setLoading(false);
  }, [calculePointer ]);

  const handleGame = useCallback((value) => {
    if (value) {
      setLoading(true);

      setTimeout(() => {
        playComputer(value);

      }, 500);
    }
  }, [playComputer]);

  

  return (
    <>
      <Score countScore={countScore} />
      <Hands type="scissor" setType={handleGame} />
      <Hands type="paper" setType={handleGame} />
      <Hands type="rock" setType={handleGame} />
      {loading && <p> MACHINE IS CHOOSING... </p>}
      {handComputer && <Hands type={handComputer} />}
      <p> {msgResult} </p>
    </>
  );
};

export default Game;
