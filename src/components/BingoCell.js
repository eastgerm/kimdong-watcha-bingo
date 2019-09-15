import React, {Component} from 'react';
import './stylesheet/BingoCell.scss';
import {turnOver, addSelections, addPlayer1Bingos, addPlayer2Bingos} from "../actions/actionCreater";
import {connect} from "react-redux";
import _ from 'lodash';

class BingoCell extends Component {
    render() {
        const {idx, num, player} = this.props;
        const {turnOver, addSelections, addPlayer1Bingos, addPlayer2Bingos, gameTurn, selections, player1Nums, player2Nums, gameSet} = this.props;
        const selected = _.includes(selections, num);
        const active = !gameSet && player === gameTurn && !selected;

        const clickHandler = () => {
            if (active) {
                turnOver();
                addSelections(num);
                player === '1P' ? addPlayer1Bingos(idx) : addPlayer2Bingos(idx);
                const enemyNums = player === '1P' ? player2Nums : player1Nums;
                _.forEach(enemyNums, (enemyNum, enemyIdx) => {
                    if (enemyNum === num) player === '1P' ? addPlayer2Bingos(enemyIdx) : addPlayer1Bingos(enemyIdx);
                })
            }
        };

        return (
            <div className={`bingo-cell ${active ? 'active' : null} ${selected ? 'selected' : null}`} onClick={clickHandler}>
                {num}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gameTurn: state.gameTurn,
    selections: state.selections,
    player1Nums: state.player1Nums,
    player2Nums: state.player2Nums,
    gameSet: state.gameSet
});
const mapDispatchToProps = dispatch => ({
    turnOver: () => dispatch(turnOver()),
    addSelections: num => dispatch(addSelections(num)),
    addPlayer1Bingos: idx => dispatch(addPlayer1Bingos(idx)),
    addPlayer2Bingos: idx => dispatch(addPlayer2Bingos(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(BingoCell);