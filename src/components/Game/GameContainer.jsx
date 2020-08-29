import { connect } from "react-redux";
import Game from "./Game";
import { setStep, setPoint, nextLevel, setCards, setImage } from "../../redux-store/game-reducer";

let mapStateToProps = (state) => {
    return {
        level: state.gameReducer.level,
        steps: state.gameReducer.steps,
        point: state.gameReducer.point,
        cards: state.gameReducer.cards,
        image: state.gameReducer.image
    }
}

export default connect(mapStateToProps, {nextLevel, setPoint, setCards, setStep, setImage}) (Game);