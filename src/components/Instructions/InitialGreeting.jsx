import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styles/style";
import { AppContext } from "../../context/Context";
import React, { useContext } from "react";

const InitialGreeting = () => {
  const classes = useStyles();
  const { setStep } = useContext(AppContext);

  return (
    <div className={classes.instructions}>
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
        I'm Nadav! your virtual ear-training teacher 🤓 Our training will work
        like this: I will play a sound, and you have to recognize which sound I
        have played. When you think you know which sound I played, simply press
        the button with the name of sound on it! Are you ready?!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setStep((prev) => prev + 1)}
      >
        Got it!
      </Button>
    </div>
  );
};

export default InitialGreeting;
