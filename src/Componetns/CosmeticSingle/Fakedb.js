// use local storage to manage cart data
const addToDb = _id =>{

    let cart = {};
    let storeCart = localStorage.getItem('Cart');
   if(storeCart){ 
    cart = JSON.parse(storeCart);
   }
   else{
       storeCart = {};
   }

    const quantity = cart[_id];
    if(quantity){
        const newQuantity = quantity+1;
        cart[_id] = newQuantity;
    }else{
       cart[_id] = 1;
    }
    localStorage.setItem('Cart', JSON.stringify(cart));
}


const removeFromDb =(_id)=>{
    const data = localStorage.getItem('Cart');
    if(data){
        const shoppingCart = JSON.parse(data);
        if(_id in shoppingCart){
           delete shoppingCart[_id];
           localStorage.setItem('Cart', JSON.stringify(shoppingCart));
        }

    }
}

const deleteShoppingCart =()=>{
    localStorage.removeItem('Cart');
}
export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart
}