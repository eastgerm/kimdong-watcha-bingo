import React,{Component} from 'react';
import './GameBody.scss';
import BingoPlayer from "./BingoPlayer";

class GameBody extends Component {
  render() {
    return (
      <div className='game-body'>
        <BingoPlayer player='1P'/>
        <BingoPlayer player='2P'/>
      </div>
    );
  }
}

export default GameBody;