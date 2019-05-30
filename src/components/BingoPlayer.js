import React,{Component} from 'react';
import './BingoPlayer.scss';
import _ from 'lodash';
import BingoRow from "./BingoRow";
import {connect} from 'react-redux';

class BingoPlayer extends Component {
  render() {
    const {player} = this.props;
    const {started,player1Nums,player2Nums} = this.props;

    return (
      <div className='bingo-player'>
        <div className='player-header'>
          <div className={`player number${player}`}>{player}</div>
        </div>
        <div className='player-body'>
          {
            started &&
            <div className='bingo-board'>
              <BingoRow nums={_.slice(player === '1P' ? player1Nums : player2Nums,0,5)}/>
              <BingoRow nums={_.slice(player === '1P' ? player1Nums : player2Nums,5,10)}/>
              <BingoRow nums={_.slice(player === '1P' ? player1Nums : player2Nums,10,15)}/>
              <BingoRow nums={_.slice(player === '1P' ? player1Nums : player2Nums,15,20)}/>
              <BingoRow nums={_.slice(player === '1P' ? player1Nums : player2Nums,20,25)}/>
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
    player2Nums: state.player2Nums
  };
};

export default connect(mapStateToProps)(BingoPlayer);