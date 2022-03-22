import React from 'react';
import { addToDb } from './Fakedb';

const CosmaticSingle = (props) => {
const {name, price , _id} = props.cosmetic;
const addToCart = (_id) =>{
   addToDb(_id);
}

const addWithPara =()=> addToCart(_id);
    return (
        <div style={{border:'1px solid sandybrown', margin:'15px', padding:'10px'}}>
            <h3>Buy this cosmatic: {name} </h3>
            <p>Only for: {price}</p>
            <p>Id: {_id}</p>
            <button onClick={addWithPara}>Add to Cart</button>
            <button onClick={()=>addToCart(_id)}>Add to Cart</button>
        </div>
    );
};

export default CosmaticSingle;