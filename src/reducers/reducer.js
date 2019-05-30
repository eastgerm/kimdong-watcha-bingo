import {actions} from "../actions/actionCreater";
import _ from 'lodash';

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const initialState = {
  gameStart: false,
  player1Nums: null,
  player2Nums: null
};

export const bingoState = (state=initialState,action) => {
  switch (action.type) {
    case actions.GAME_START:
      return {
        gameStart: !state.gameStart,
        player1Nums: _.shuffle(nums),
        player2Nums: _.shuffle(nums)
      };
    default:
      return state;
  }
};