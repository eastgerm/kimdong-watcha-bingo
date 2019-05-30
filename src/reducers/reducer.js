import {actions} from "../actions/actionCreater";
import _ from 'lodash';

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const initialState = {
  gameStart: false,
  player1Nums: null,
  player2Nums: null,
  gameTurn: '1P',
  selections: [],
  player1Bingos: [],
  player2Bingos: [],
  gameSet: false
};

export const bingoState = (state=initialState,action) => {
  switch (action.type) {
    case actions.GAME_START:
      return {
        ...state,
        gameStart: !state.gameStart,
        player1Nums: _.shuffle(nums),
        player2Nums: _.shuffle(nums),
        gameTurn: '1P',
        selections: [],
        player1Bingos: [],
        player2Bingos: [],
        gameSet: false
      };

    case actions.TURN_OVER:
      return {
        ...state,
        gameTurn: state.gameTurn==='1P' ? '2P' : '1P'
      };

    case actions.ADD_SELECTIONS:
      return {
        ...state,
        selections: [...state.selections,action.num]
      };

    case actions.ADD_PLAYER1_BINGOS:
      return {
        ...state,
        player1Bingos: _.sortBy([...state.player1Bingos,action.idx])
      };

    case actions.ADD_PLAYER2_BINGOS:
      return {
        ...state,
        player2Bingos: _.sortBy([...state.player2Bingos,action.idx])
      };

    case actions.GAME_SET:
      return {
        ...state,
        gameSet: true
      };

    default:
      return state;
  }
};