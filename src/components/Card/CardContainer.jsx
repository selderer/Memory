import { connect } from 'react-redux';
const { default: Card } = require("./Card");


let mapStateToProps = (state) => {
    return {
        images: state.cardFlip
    }
};

let mapDispatchToProps = (dispatch) => {
   
}

export default connect(mapStateToProps, null)(Card);