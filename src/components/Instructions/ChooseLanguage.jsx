import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styles/style";
import { AppContext } from "../../context/Context";
import React, { useContext } from "react";

const ChooseLanguage = () => {
  const { setStep, setLanguage } = useContext(AppContext);

  const classes = useStyles();

  const handleClick = (lang) => {
    setLanguage(lang);
    setStep((prev) => prev + 1);
  };

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
        Are you an 'A B C' or 'Do Re Mi' kind of musician?
      </Typography>
      <div style={{ display: "flex" }}>
        <Button
          style={{ margin: "1em" }}
          variant="contained"
          color="primary"
          onClick={() => handleClick("italian")}
        >
          Do Re Mi
        </Button>
        <Button
          style={{ margin: "1em" }}
          variant="contained"
          color="primary"
          onClick={() => handleClick("english")}
        >
          A B C
        </Button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
