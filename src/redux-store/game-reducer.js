import { levelMapping } from "../assets/constants";
import { shuffle } from "../helpers/indes";

const NEXT_LEVEL = 'next-level';
const SET_STEP = 'set-step';
const SET_POINT = 'set-point';
const SET_CARDS = 'set-cards';
// const SET_IMAGE = 'set-image';

let initialState = {
    cards: [],
    level: 1,
    steps: 0,
    point: 0,
    // image: ''
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_LEVEL:
            if (state.level < 4) {
                return {
                    ...state,
                    level: state.level + 1
                }
            }
            return {
                ...state,
                level: 4
            }
        case SET_STEP:
            return {
                ...state,
                steps: state.steps + 1
            }
        case SET_POINT:
            return {
                ...state,
                point: state.point + 1
            }
        case SET_CARDS:
            let arr = [];
            for (let i = 1; i <= levelMapping[state.level].cards / 2; i++) {
                arr.push(i)
            }
            const shuffledArr = shuffle([...arr, ...arr]);
            return {
                ...state,
                cards: shuffledArr
            }
        // case SET_IMAGE: {
        //     const loadImage = async () => {
        //         const data = await import(`../assets/images/${action.payload.image}.png`);
        //         const { default: cardImage } = data;

        //         return {
        //             ...state,
        //             image: cardImage
        //         }
        //     }
        //     return loadImage()
        // }
        default:
            return state
    }
}

export const nextLevel = (level) => ({ type: NEXT_LEVEL, level });
export const setStep = (step) => ({ type: SET_STEP, step });
export const setPoint = (point) => ({ type: SET_POINT, point });
export const setCards = (cards) => ({ type: SET_CARDS, cards });
// export const setImage = (image) => ({ type: SET_IMAGE, payload: {image} });

export default gameReducer;