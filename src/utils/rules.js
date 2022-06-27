/**
   * Decides who won the between two players
   * @param  {String} choice_1  Choice of player 1.
   * @param  {String} choice_2  Choice of player 2.

   */
const rules = async (choice_1, choice_2) => {
  //If both the choices of the player are equal
  if (choice_1 === choice_2) {
    return 0;
  }
  if (choice_1 === 'rock') {
    switch (choice_2) {
      case 'paper':
        return 2;
      case 'scissors':
        return 1;
    }
  }
  if (choice_1 === 'paper') {
    switch (choice_2) {
      case 'rock':
        return 1;
      case 'scissors':
        return 2;
    }
  }
  if (choice_1 === 'scissors') {
    switch (choice_2) {
      case 'rock':
        return 2;
      case 'paper':
        return 1;
    }
  }
};

module.exports.game = rules;
