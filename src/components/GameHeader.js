import React, {Component} from 'react';
import './stylesheet/GameHeader.scss';
import {connect} from 'react-redux';
import {gameStart} from "../actions/actionCreater";

class GameHeader extends Component {
    render() {
        const {started, gameStart} = this.props;
        return (
            <div className='game-header'>
                <span className='title'>KIMDONG BINGO</span>
                <button className='start-btn' onClick={() => {
                    gameStart();
                }}>{!started ? '게임 시작' : '게임 재시작'}</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    started: state.gameStart
});

const mapDispatchToProps = dispatch => ({
    gameStart: () => dispatch(gameStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);