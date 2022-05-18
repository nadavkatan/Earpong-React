import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import SoundButton from "../Button/SoundButton";
import { useStyles } from "./styles/styles";
import boardImg from "../../assets/images/school-board.png";
import Typography from "@mui/material/Typography";
import InitialGreeting from "../Instructions/InitialGreeting";
import ChooseLanguage from "../Instructions/ChooseLanguage";
import ChooseSoundsAmount from "../Instructions/ChooseSoundsAmount";
import ReferenceNote from "../Instructions/ReferenceNote";
import GameOver from "../Instructions/GameOver";
import Button from "@mui/material/Button";

const Board = () => {
  const {
    soundGroups,
    soundsAmount,
    activeSoundGroup,
    step,
    playRandomSound,
    setStep,
  } = useContext(AppContext);
  const classes = useStyles();

  const handleClick = () => {
    playRandomSound();
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <div className={classes.boardContainer}>
        <Typography
          sx={{
            fontSize: {
              xs: "1em",
              sm: "2em",
              md: "3em",
            },
            marginTop: {
              xs: "1em",
            },
            marginBottom: {
              xs: "2em",
              sm: "0em",
            },
          }}
          variant="h3"
          className={classes.title}
        >
          Welcome to EAR-PONG!
        </Typography>

        <img src={boardImg} className={classes.img} alt={"blackcoard"} />
        <div>
          {step === 6 || step === 5 ? (
            <Grid container spacing={5} className={classes.board}>
              {soundGroups[activeSoundGroup].text.map((sound, i) => {
                if (i < soundsAmount) {
                  return (
                    <Grid key={sound} item>
                      <SoundButton key={sound} index={i} soundName={sound} />
                    </Grid>
                  );
                } else {
                  return null;
                }
              })}
            </Grid>
          ) : null}
        </div>
        <div
          style={{
            zIndex: 30,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {step === 1 ? (
            <InitialGreeting />
          ) : step === 2 ? (
            <ChooseLanguage />
          ) : step === 3 ? (
            <ChooseSoundsAmount />
          ) : step === 4 ? (
            <ReferenceNote />
          ) : step === 5 ? (
            <Button
              onClick={() => handleClick()}
              variant="contained"
              color="secondary"
              style={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Play random sound
            </Button>
          ) : step === 6 ? null : step === 7 ? (
            <GameOver />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Board;
