import React from 'react';
import { connect } from 'react-redux';
import { flipCard } from '../../redux-store/cardFlipReducer';
const { default: Card } = require("./Card");


let mapStateToProps = (state) => {
    return {
        flipped: state.cardFlip.flipped
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        flipCard: () => {
            dispatch(flipCard());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);