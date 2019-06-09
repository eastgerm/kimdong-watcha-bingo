import React,{Component} from 'react';
import './GameBody.scss';
import BingoPlayer from "./BingoPlayer";
import {connect} from "react-redux";
import _ from 'lodash';
import {gameSet} from "../actions/actionCreater";

class GameBody extends Component {
  _judgeBingo = bingos => {
    let ans = 0;
    const bingoNorms = [
      [0,1,2,3,4],
      [5,6,7,8,9],
      [10,11,12,13,14],
      [15,16,17,18,19],
      [20,21,22,23,24],
      [0,5,10,15,20],
      [1,6,11,16,21],
      [2,7,12,17,22],
      [3,8,13,18,23],
      [4,9,14,19,24],
      [0,6,12,18,24],
      [4,8,12,16,20]
    ];

    for(let i=0; i<12; i++) {
      for(let j=0; j<5; j++) {
        if(!_.includes(bingos,bingoNorms[i][j])) break;
        if(j === 4) ans++;
      }
    }
    return ans;
  };

  render() {
    const {player1Bingos,player2Bingos,gameSet} = this.props;
    const player1Score = this._judgeBingo(player1Bingos);
    const player2Score = this._judgeBingo(player2Bingos);
    const gameOver = player1Score >= 5 || player2Score >= 5;
    if(gameOver) gameSet();

    return (
      <div className='game-body'>
        <BingoPlayer player='1P' bingo={player1Score} result={player1Score >= 5 && player2Score >= 5 ? 'DRAW' : player1Score >= 5 ? 'WIN' : player2Score >= 5 ? "LOSE" : 'YET'}/>
        <BingoPlayer player='2P' bingo={player2Score} result={player1Score >= 5 && player2Score >= 5 ? 'DRAW' : player2Score >= 5 ? 'WIN' : player1Score >= 5 ? "LOSE" : 'YET'}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    player1Bingos: state.player1Bingos,
    player2Bingos: state.player2Bingos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameSet: () => dispatch(gameSet())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(GameBody);