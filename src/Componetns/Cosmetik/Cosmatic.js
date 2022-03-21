import React from 'react';
import CosmaticSingle from '../CosmeticSingle/CosmaticSingle';

const Cosmatic = () => {
const cosmetics =[
    {id:1 , name: 'Lelpolish', price: 100},
    {id:2 , name: 'Ponds', price: 200},
    {id:3 , name: 'Cream', price: 300},
    {id:4 , name: 'Jell', price: 400},
    {id:5 , name: 'Kajol', price: 500}
];


    return (
        
        <div>
            <h1>welcome to my cosmetic Store</h1>
            {
                cosmetics.map(cosmetic=> <CosmaticSingle 
                    key ={cosmetic.id}
                    cosmetic={cosmetic}
                ></CosmaticSingle>)
            }
        </div>
    );
};

export default Cosmatic;