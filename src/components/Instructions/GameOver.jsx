import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styles/style";
import { AppContext } from "../../context/Context";
import React, { useContext } from "react";

const GameOver = () => {
  const { score, setScore, reset } = useContext(AppContext);
  const classes = useStyles();

  const handleClick = () => {
    setScore(0);
  };

  return (
    <div className={classes.instructions}>
      <Typography variant="h4" className={classes.title}>
        Game over!
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.subtitle}
        sx={{
          fontSize: {
            xs: "0.6em",
            sm: "1em",
            lg: "1.3em",
          },
        }}
      >
        {score < 5
          ? `Your score is ${score}. Keep practicing!`
          : score < 10
          ? `Not bad! your score is ${score}. Keep practicing!`
          : `Well done! your score is ${score}! you're a real pro!`}
      </Typography>
      <div style={{ display: "flex" }}>
        <Button
          style={{ margin: "1em" }}
          variant="contained"
          color="primary"
          onClick={() => reset(4)}
        >
          Play again
        </Button>
        <Button
          style={{ margin: "1em" }}
          variant="contained"
          color="primary"
          onClick={() => reset(3)}
        >
          Change amount of sounds
        </Button>
      </div>
    </div>
  );
};

export default GameOver;

export const gameOverText = (score) => {
  let text;
  score < 5
    ? (text = `Game over! you score if ${score}. Keep practicing!`)
    : score < 10
    ? (text = `Game over, not bad! Your score is ${score}. Keep practicing!`)
    : (text = `Game over! Well done! Your score is ${score}! You're a pro!`);

  return text;
};
