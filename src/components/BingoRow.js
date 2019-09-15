import React, {Component} from 'react';
import './stylesheet/BingoRow.scss';
import _ from 'lodash';
import BingoCell from "./BingoCell";

class BingoRow extends Component {
    render() {
        const {row, nums, player} = this.props;
        return (
            <div className='bingo-row'>
                {_.map(nums, (num, i) => <BingoCell key={i} idx={row * 5 + i} player={player} num={num}/>)}
            </div>
        );
    }
}

export default BingoRow;