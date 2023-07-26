import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <div className='w-1/4 mx-auto h-52 flex items-center border-2'>
                <button className='btn btn-sm btn-primary mx-4' onClick={() => { setCount(count - 1) }}>decrease</button>
                <h3 className='mx-4'>{count}</h3>
                <button className='btn btn-sm btn-primary mx-4' onClick={() => { setCount(count + 1) }}>increase</button>
            </div>
        </div>
    );
};

export default Child;