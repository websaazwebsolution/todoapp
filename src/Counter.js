import React from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { increment, decrement , incrementAsync} from './actions'

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
    <div>Counter : {counter} 
        <button onClick={() => dispatch(increment())}> Increment</button>
        <button onClick={() => dispatch(decrement())}> Decrement</button>
        <button onClick={ () => dispatch(incrementAsync())}> Increment Async</button>
    
    </div>
  )
}

export default Counter