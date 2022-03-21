import React from 'react';
import { multiply } from '../Calculator';

const Shoes = () => {
    const first = 10;
    const second = 12;
    const result = multiply(first, second);
    return (
        <div>
            <h1>This is shoe Compo</h1>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;