import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import rules from "../images/image-rules.svg";
import questionMark from "../images/question.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function Choose() {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rockClicked, setRockClicked] = useState(false);
  const [paperClicked, setPaperClicked] = useState(false);
  const [scissorsClicked, setScissorsClicked] = useState(false);
  const [playerPick, setPlayerPick] = useState();
  const [housePick, setHousePick] = useState();
  const [house, setHouse] = useState(null);
  const [winMessage, setWinMessage] = useState(null);
  const [winner, setWinner] = useState(null);

  function playerChose(e) {
    if (e.target.id === "rock") {
      setPlayerPick("rock");
      setRockClicked(true);
    } else if (e.target.id === "paper") {
      setPlayerPick("paper");
      setPaperClicked(true);
    } else if (e.target.id === "scissors") {
      setPlayerPick("scissors");
      setScissorsClicked(true);
    }
  }

  useEffect(() => {
    setHousePick(questionMark)
    const timer = setTimeout(() => {
      let pick = Math.floor(Math.random() * 3) + 1;
      if (pick === 1) {
        setHousePick(paper);
        setHouse("paper");
      }
      if (pick === 2) {
        setHousePick(rock);
        setHouse("rock");
      }
      if (pick === 3) {
        setHousePick(scissors);
        setHouse("scissors");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [playerPick]);
 

  useEffect(() => {
    if (house === playerPick) {
      setWinMessage("Tie");
      setWinner("tie");
    }
    if (house === "paper" && playerPick === "rock") {
      setWinMessage("YOU LOST");
      setWinner("house");
    }
    if (house === "paper" && playerPick === "scissors") {
      setWinMessage("YOU WON");
      setWinner("player");
    }
    if (house === "rock" && playerPick === "paper") {
      setWinMessage("YOU WON");
      setWinner("player");
    }
    if (house === "rock" && playerPick === "scissors") {
      setWinMessage("YOU LOST");
      setWinner("house");
    }
    if (house === "scissors" && playerPick === "rock") {
      setWinMessage("YOU WON");
      setWinner("player");
    }
    if (house === "scissors" && playerPick === "paper") {
      setWinMessage("YOU LOST");
      setWinner("house");
    }
  }, [house]);

  function nextRound() {
    setRockClicked(false);
    setPaperClicked(false);
    setScissorsClicked(false);
    setPlayerPick();
    setHousePick(questionMark);
    setHouse("");
    setWinner("");
    setWinMessage("");
  }

  useEffect(() => {
    if (winner === "tie") {
      setScore(score);
    } else if (winner === "player") {
      setScore((score) => score + 1);
    } else if (winner === "house") {
      setScore((score) => score - 1);
    }
  }, [winner]);

  return (
    <div className="App">
      <section id="container">
        <div>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div id="score">
          <p style={{ fontSize: "20px" }}>SCORE</p>
          <p
            style={{
              color: "hsl(229, 25%, 31%)",
              fontSize: "60px",
              marginTop: "30px",
            }}
          >
            {score}
          </p>
        </div>
      </section>
      {rockClicked || paperClicked || scissorsClicked ? (
        <div className="gamePlayContainer">
          <div id='playerPickContainer'>
            <h3>YOU PICKED</h3>
            {rockClicked ? (
              <button className="gameButton rock" style={{margin:'0px'}}>
                <img  src={rock} className='choiceImg' />
              </button>
            ) : null}
            {paperClicked ? (
              <button className="gameButton paper" style={{margin:'0px'}}>
                <img className="choiceImg" src={paper} />
              </button>
            ) : null}
            {scissorsClicked ? (
              <button className="gameButton scissors" style={{margin:'0px'}}>
                <img className="choiceImg" src={scissors} />
              </button>
            ) : null}
          </div>
          <div id='housePickContainer'>
            <h3>THE HOUSE PICKED</h3>
            <button className="gameButton house">
              <img width="100px" height="100px" src={housePick} className="choiceImg" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <section id="choices">
            <div>
              <button
                onClick={playerChose}
                className="gameButton paper"
                id="paper"
              >
                <img
                  id="paper"
                  className='choiceImg'
                  style={{ cursor: "pointer" }}
                  src={paper}
                  width="100px"
                  height="100px"
                  onClick={playerChose}
                />
              </button>
              <button
                onClick={playerChose}
                className="gameButton scissors"
                id="scissors"
              >
                <img
                  id="scissors"
                  className='choiceImg'
                  style={{ cursor: "pointer" }}
                  src={scissors}
                  width="100px"
                  height="100px"
                  onClick={playerChose}
                />
              </button>
            </div>
            <button onClick={playerChose} className="gameButton rock" id="rock">
              <img
                id="rock"
                className='choiceImg'
                onClick={playerChose}
                style={{ cursor: "pointer" }}
                src={rock}
                width="100px"
                height="100px"
              />
            </button>
          </section>
          <div >
            <div id='btn'>
            <Button id="rulesBtn" onClick={handleOpen}>
              RULES
            </Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} id='modal'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  RULES
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <button type="button" onClick={handleClose} id="closeModal">
                    X
                  </button>
                  <img src={rules} id='rulesImg' />
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      )}
      {winner ? (
        <div id='winMsgContainer'>
          <h1 id="winMsg">{winMessage}</h1>
          <button id='nextRndBtn' onClick={nextRound}>Play Again?</button>{" "}
        </div>
      ) : null}
    </div>
  );
}
