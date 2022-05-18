import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styles/style";
import { AppContext } from "../../context/Context";
import React, { useContext } from "react";

const ReferenceNote = () => {
  const { setStep, playC, language } = useContext(AppContext);

  const classes = useStyles();

  const handleClick = () => {
    playC();
    setStep((prev) => prev + 1);
  };

  
  return (
    <div className={classes.instructions}>
      <Typography variant="subtitle1" className={classes.subtitle} sx={{
      fontSize:{
        xs:'0.6em',
        sm:'1em',
        lg:'1.3em'
      }
    }}>
      I will now play the note {language === 'english'? 'C' : 'Do'} for you to have a reference. Then, once your ready, click 'Start training.
      </Typography>

      <Button variant="contained" color="primary" onClick={()=> handleClick()}>Play {language === 'english'? 'C' : 'Do'}</Button>
    </div>
  );
};

export default ReferenceNote;

