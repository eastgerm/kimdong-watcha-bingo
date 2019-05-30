import React,{Component} from 'react';
import './BingoPlayer.scss';
import _ from 'lodash';
import BingoRow from "./BingoRow";
import {connect} from 'react-redux';

class BingoPlayer extends Component {
  render() {
    const {player,bingo,result} = this.props;
    const {started,player1Nums,player2Nums,gameTurn,gameSet} = this.props;

    return (
      <div className='bingo-player'>
        <div className='player-header'>
          <div className={`player number${player}`}>{player}</div>
        </div>
        <div className='player-body'>
          {
            started &&
            <div className='bingo-board'>
              {console.log(gameSet)}
              <div className={`bingo-rows ${gameSet ? 'inactive' : gameTurn===player ? null : 'inactive'}`}>
                <BingoRow row={0} player={player} nums={_.slice(player === '1P' ? player1Nums : player2Nums,0,5)}/>
                <BingoRow row={1} player={player} nums={_.slice(player === '1P' ? player1Nums : player2Nums,5,10)}/>
                <BingoRow row={2} player={player} nums={_.slice(player === '1P' ? player1Nums : player2Nums,10,15)}/>
                <BingoRow row={3} player={player} nums={_.slice(player === '1P' ? player1Nums : player2Nums,15,20)}/>
                <BingoRow row={4} player={player} nums={_.slice(player === '1P' ? player1Nums : player2Nums,20,25)}/>
              </div>
              {
                result === 'DRAW' || result === 'WIN' || result === 'LOSE' ?
                  <div className={`result ${result}`}>
                    {result}
                  </div> :
                  <div className='current-bingo'>
                    {`${bingo} bingo!`}
                  </div>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    started: state.gameStart,
    player1Nums: state.player1Nums,
    player2Nums: state.player2Nums,
    gameTurn: state.gameTurn,
    gameSet: state.gameSet
  };
};

export default connect(mapStateToProps)(BingoPlayer);