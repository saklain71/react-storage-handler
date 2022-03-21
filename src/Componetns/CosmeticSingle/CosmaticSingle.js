import React from 'react';

const CosmaticSingle = (props) => {
const {name, price , id} = props.cosmetic;
    return (
        <div>
            <h3>Buy this cosmatic: {name} </h3>
            <p>Only for: {price}</p>
            <p>Id: {id}</p>
        </div>
    );
};

export default CosmaticSingle;