import React,{Component} from 'react';
import './BingoRow.scss';
import _ from 'lodash';
import BingoCell from "./BingoCell";

class BingoRow extends Component {
  render() {
    const {nums} = this.props;
    return (
      <div className='bingo-row'>
        {_.map(nums,(num,i)=><BingoCell key={i} num={num}/>)}
      </div>
    );
  }
}

export default BingoRow;