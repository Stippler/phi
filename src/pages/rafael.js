import React from 'react';
import Foo from '../components/foo';
import BearCounter from '@/components/bear';
import Controls from '@/components/control';

function Rafael() {
    const [counter, setCounter] = React.useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <Foo />
            <button onClick={increaseCounter}>Increase Counter</button>
            <p>Counter: {counter}</p>
            <BearCounter/>
            <Controls/>
        </div>
    );
}

export default Rafael;