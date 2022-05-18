// import React, { useEffect, useState } from "react";
// import "../App.css";
// import paper from "../images/icon-paper.svg";
// import rock from "../images/icon-rock.svg";
// import scissors from "../images/icon-scissors.svg";
// import questionMark from "../images/question.png";

// export default function Play(props) {
//   const [housePick, setHousePick] = useState(questionMark);
//   const [house, setHouse] = useState("")
//   const [winMessage, setWinMessage] = useState("");
//   const [winner, setWinner] = useState()

//   useEffect(() => {
//     setTimeout(function () {
//       let pick = Math.floor(Math.random() * 3) + 1;
//       if (pick === 1) {
//         setHousePick(paper);
//         setHouse('paper')
//       }
//       if (pick === 2) {
//         setHousePick(rock);
//         setHouse('rock')
//       }
//       if (pick === 3) {
//         setHousePick(scissors);
//         setHouse('scissors')
//       }
//     }, 2000);
//   }, []);

//   useEffect(() => {
//       if (house === props.playerPick) {
//         setWinMessage("Tie");
//         setWinner('tie')
//       }
//         else if (house === 'paper' && props.playerPick === 'rock') {
//         setWinMessage("The house won this round");
//         setWinner('house')
//       } else if (house === 'paper'&& props.playerPick === 'scissors'){
//         setWinMessage("You won this round");
//         setWinner('player')
//       } else if (house === 'rock' && props.playerPick === 'paper'){
//           setWinMessage("You won this round")
//           setWinner('player')
//       } else if (house === 'rock' && props.playerPick === 'scissors'){
//           setWinMessage("The house won this round")
//           setWinner('house')
//       } else if (house === 'scissors' && props.playerPick === 'rock'){
//           setWinMessage("You won this round")
//           setWinner('player')
//       } else if (house === 'scissors' && props.playerPick === 'paper'){
//           setWinMessage("The house won this round")
//           setWinner('house')
//       }
//   }, [house]);

//   return (
//     <div>
//       <section id="container">
//         <div>
//           <h1>ROCK</h1>
//           <h1>PAPER</h1>
//           <h1>SCISSORS</h1>
//           <h1>{winMessage}</h1>
//         </div>
//         <div id="score">
//           <p style={{ fontSize: "20px" }}>SCORE</p>
//           <p
//             style={{
//               color: "hsl(229, 25%, 31%)",
//               fontSize: "60px",
//               marginTop: "30px",
//             }}
//           >
//             {props.score}
//           </p>
//         </div>
//       </section>
//       <div>
//         <h3>YOU PICKED</h3>
//         {props.rockClicked ? (
//           <button className="gameButton rock">
//             <img width="100px" height="100px" src={rock} />
//           </button>
//         ) : null}
//         {props.paperClicked ? (
//           <button className="gameButton paper">
//             <img width="100px" height="100px" src={paper} />
//           </button>
//         ) : null}
//         {props.scissorsClicked ? (
//           <button className="gameButton scissors">
//             <img width="100px" height="100px" src={scissors} />
//           </button>
//         ) : null}
//       </div>
//       <div>
//         <h3>THE HOUSE PICKED</h3>
//         <button className="gameButton paper">
//           <img width="100px" height="100px" src={housePick} />
//         </button>
//       </div>
//     </div>
//   );
// }
