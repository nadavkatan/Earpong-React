import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styles/style";
import { AppContext } from "../../context/Context";
import React, { useContext } from "react";

const ChooseSoundsAmount = () => {
  const { settingSoundsAmount } = useContext(AppContext);

  const classes = useStyles();
  const buttonText = [3, 4, 5, 6, 7];

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
        How many sounds would you like your practice to consist?
      </Typography>
      <div className={classes.btnsContainer}>
        {buttonText.map((button, i) => {
          return (
            <Button
              key={button}
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={() => settingSoundsAmount(i + 3)}
            >
              {button}
            </Button>
          );
        })}
        <Button
          variant="contained"
          className={classes.btn}
          color="primary"
          onClick={() => settingSoundsAmount(12)}
        >
          Chromatic
        </Button>
      </div>
    </div>
  );
};

export default ChooseSoundsAmount;
