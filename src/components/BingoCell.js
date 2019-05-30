import React,{Component} from 'react';
import './BingoCell.scss';

class BingoCell extends Component {
  render() {
    const {num} = this.props;
    return (
      <div className='bingo-cell'>
        {num}
      </div>
    );
  }
}

export default BingoCell;