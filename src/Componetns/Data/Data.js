import React from 'react';
import { add, multiply } from '../Calculator';
//import add from '../Calculator';

const Data = () => {
    const first = 49;
    const second = 51;
    const addNum = add(first,second);
    const mult = multiply(first, second);
    return (
        <div>
            <h1>Total : {addNum}</h1>
            <h1>Multiply: {mult}</h1>
        </div>
    );
};

export default Data;