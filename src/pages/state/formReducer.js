import { actionType } from "./actionType";

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    education: "",
    quantity: 0,
    feedback: "",
    terms: false

}
export const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case actionType.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case actionType.TOGGLE:
            return {
                ...state,
                terms: !state.terms
            };
        case actionType.DECREMENT:
            return {
                ...state,
                quantity: state.quantity - action.payload.value
            };
        case actionType.INCREMENT:
            return {
                ...state,
                quantity: state.quantity + action.payload.value
            }
        default:
            return state;
    }

}