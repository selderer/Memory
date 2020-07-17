const FLIP_THE_CARD = 'flip-the-card';

let initialState = {
    flipped: false
}

const cardFlipReducer = (state = initialState, action) => {
    switch(action.type) {
        case FLIP_THE_CARD: 
            return {
                ...state,
                flipped: true
            } 
        default: 
            return state;
    }
}

export const flipCard = (card) => ({type: FLIP_THE_CARD, card});

export default cardFlipReducer;