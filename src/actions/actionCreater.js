export const actions = {
  GAME_START: 'GAME_START',
  TURN_OVER: 'TURN_OVER',
  ADD_SELECTIONS: 'ADD_SELECTIONS',
  ADD_PLAYER1_BINGOS: 'ADD_PLAYER1_BINGOS',
  ADD_PLAYER2_BINGOS: 'ADD_PLAYER2_BINGOS',
  GAME_SET: 'GAME_SET'
};

export const gameStart = () => {
  return {
    type: actions.GAME_START
  };
};

export const turnOver = () => {
  return {
    type: actions.TURN_OVER
  };
};

export const addSelections = num => {
  return {
    type: actions.ADD_SELECTIONS,
    num
  };
};

export const addPlayer1Bingos = idx => {
  return {
    type: actions.ADD_PLAYER1_BINGOS,
    idx
  };
};

export const addPlayer2Bingos = idx => {
  return {
    type: actions.ADD_PLAYER2_BINGOS,
    idx
  };
};

export const gameSet = () => {
  return {
    type: actions.GAME_SET
  }
};