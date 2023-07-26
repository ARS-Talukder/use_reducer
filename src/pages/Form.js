import React, { useReducer } from 'react';

const Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        quantity: 0,
        feedback: "",
        term: true

    };
    const reducer = (state, action) => {
        console.log(action);
        if (action.type === "INPUT") {
            return {
                ...state,
                [action.payload.name]: action.payload.value,

            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <div>
            <form className='w-1/2 mx-auto' onSubmit={submit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor='firstName'>First Name</label>
                    <input type="text" name='firstName' className="input input-bordered w-full max-w-xs" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor='lastName'>Last Name</label>
                    <input type="text" name='lastName' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor='email'>Email</label>
                    <input type="email" name='email' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for='education'>Education</label>
                    <select name='education' className="select select-bordered">
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="underGrad">Under Graduate</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </div>
                <div className='flex max-w-xs mt-4'>
                    <label className="label">Number of PCs</label>
                    <button className='btn btn-sm btn-primary mx-4'>-</button>
                    <h3 className='mx-4'>0</h3>
                    <button className='btn btn-sm btn-primary mx-4'>+</button>
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='feedback'>Feedback</label>
                    <textarea name='feedback' className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">I agree to terms and conditions</span>
                    </label>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mx-4" />


            </form>


        </div>
    );
};

export default Form;