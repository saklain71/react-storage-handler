// use local storage to manage cart data
const addToDb = _id =>{
    const quantity = localStorage.getItem(_id);
    if(quantity){
        console.log('alreay exist');
        //const newQuantity = +quantity+ 1;
        const newQuantity = parseInt(quantity)+ 1;
        localStorage.setItem(_id, newQuantity);

        
    }else{
        console.log('New Item')
        localStorage.setItem(_id,1);
    }
    
}

export {addToDb}