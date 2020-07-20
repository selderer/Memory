import ashot from '../assets/images/ashot.png';
import dogInDrugs from '../assets/images/dogInDrugs.png';
import kawai from '../assets/images/kawai.png';
import kittie from '../assets/images/kittie.png';
import koala from '../assets/images/koala.png';
import panda from '../assets/images/panda.png';

const SET_IMAGE = 'set-image';

let initialState = [
    {
        image: ashot,
        name: 'Dzyadz Ashot'
    },
    {
        image: dogInDrugs,
        name: "i'm just chillin here"
    },
    {
        image: kawai,
        name: 'Kawaii:3'
    },
    {
        image: kittie,
        name: 'just cute kittie'
    },
    {
        image: koala,
        name: 'koala'
    },
    {
        image: panda,
        name: 'panda pnada grra'
    }
];

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE: {
            return [
                ...state,
                {
                    flipped: true
                }
            ]
        }
        default:
            return state;
    }
}

export const imageFlip = (flipped) => ({type: SET_IMAGE, flipped});

export default imagesReducer;