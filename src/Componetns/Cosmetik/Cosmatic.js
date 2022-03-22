import React, { useEffect, useState } from 'react';
import CosmaticSingle from '../CosmeticSingle/CosmaticSingle';
import './Cosmatic.css'
const Cosmatic = () => {

const [cosmetics, setCosmetic] = useState([]);

useEffect(()=>{
    fetch('https://cosmeticss.free.beeceptor.com/')
    .then(res=> res.json())
    .then(data => setCosmetic(data))
},[])

    return (
        
        <div className='product'>
            <h1>welcome to my cosmetic Store</h1>
            {
                cosmetics.map(cosmetic=> <CosmaticSingle 
                    key ={cosmetic._id}
                    cosmetic={cosmetic}
                ></CosmaticSingle>)
            }
        </div>
    );
};

export default Cosmatic;