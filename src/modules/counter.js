const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};

const initialState = 0;

export default function counter(state = initialState, aciton) {
    switch (aciton.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}