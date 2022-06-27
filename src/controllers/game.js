const Player = require('../utils/player');
const rules = require('../utils/rules');
const numOfPlayers = 4;
const generateRandomNumber = () => {
  const num = Math.random();
  if (num > 0 && num <= 0.33) return 0;
  if (num <= 0.66) return 1;
  if (num <= 0.99) return 2;
  else return generateRandomNumber();
};

module.exports.start = async (req, res) => {
  let players = {};

  let op = [];
  const possible_choices = ['rock', 'paper', 'scissors'];
  // creating players object which contains each player as a key
  for (let i = 1; i <= numOfPlayers; i++) {
    players[`Player${i}`] = new Player(numOfPlayers, i);
  }

  for (let x = 1; x <= 50; x++) {
    // selecting choice of players randomly
    for (let i = 1; i <= numOfPlayers; i++) {
      players[`Player${i}`].choice = possible_choices[generateRandomNumber()];
    }

    // updating score of players based on their choices
    //If socre is 1 player_1 won else player_2 won among 2 players
    for (let i = 1; i < numOfPlayers; i++) {
      for (let j = i + 1; j <= numOfPlayers; j++) {
        let score = await rules.game(
          players[`Player${i}`].choice,
          players[`Player${j}`].choice
        );
        if (score === 1) {
          players[`Player${i}`].score_against[`Player${j}`] += 1;
        } else if (score === 2) {
          players[`Player${j}`].score_against[`Player${i}`] += 1;
        }
      }
    }

    let choice = {},
      player_wins = {};

    for (let i = 1; i <= numOfPlayers; i++) {
      choice[`Player${i}`] = players[`Player${i}`].choice;
      player_wins[`Player${i}`] = { ...players[`Player${i}`].score_against };
    }

    op.push({ iteration: x, choice: choice, playerWins: player_wins });
  }

  return res.status(200).json({
    message: 'success',
    data: op,
  });
};
