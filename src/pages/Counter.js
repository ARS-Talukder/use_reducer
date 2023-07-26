import { useReducer } from "react";

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === "Decrement") {
            return state - action.payload.count;

        }
        else if (action.type === "Increment") {
            return state + action.payload.count;
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='w-1/4 mx-auto h-52 flex items-center border-2'>
            <button onClick={() => dispatch({ type: "Decrement", payload: { count: 5 } })} className='btn btn-sm btn-primary mx-4'>decrease</button>
            <h3 className='mx-4'>{state}</h3>
            <button onClick={() => dispatch({ type: "Increment", payload: { count: 5 } })} className='btn btn-sm btn-primary mx-4'>increase</button>
        </div>
    );
};

export default Counter;