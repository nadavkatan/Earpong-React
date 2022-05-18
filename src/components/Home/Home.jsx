import React, { useContext } from "react";
import Board from "../Board/Board";
import { AppContext } from "../../context/Context";
import { useStyles } from "./styles/styles";
import background from "../../assets/images/background.jpg";
import neutral from "../../assets/images/neutral.png";
import "./home.css";
import { Typography } from "@mui/material";

const Home = () => {
  const { score } = useContext(AppContext);
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography className={classes.scoreDisplay} variant="h4">
            score: {score}
          </Typography>
          <Board />
        </div>
        <img className="avatar" src={neutral} alt="avatar" />
      </div>
    </>
  );
};

export default Home;
