import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from './Fakedb';
import './CosmaticSingle.css'

const CosmaticSingle = (props) => {
const {name, price , _id} = props.cosmetic;
const addToCart = (_id) =>{
   addToDb(_id);
}
const removeFromCart= _id=>{
    removeFromDb(_id);
}
const DeleteAllCart =()=>{
    deleteShoppingCart();
}
const addWithPara =()=> addToCart(_id);
    return (
        <div style={{border:'1px solid sandybrown', margin:'15px', padding:'10px'}}>
            <h3>Buy this cosmatic: {name} </h3>
            <p>Only for: {price}</p>
            <p>Id: {_id}</p>
            {/* <button onClick={addWithPara}>Add to Cart</button> */}
            <button className='button1'  onClick={()=>addToCart(_id)}>Add to Cart</button>
            <button className='button2' onClick={()=>{removeFromCart(_id)}}>Remove</button>
            <button className='button3' onClick={DeleteAllCart} >Delete All Cart</button>
        </div>
    );
};

export default CosmaticSingle;