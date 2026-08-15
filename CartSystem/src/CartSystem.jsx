import { useState } from "react";

const products= [
        {name:"Nike Shoes", price:5000},
        {name:"Shirt", price:300},
        {name:"Watch", price:6000},

    ]
function CartSystem(){
    const [productCart, productinfo]  = useState([]);

    // console.log(productCart);

    function displayCart(items){
       return items.map((everyItem)=>{
        const itemcheck = productCart.find(cartItem=> cartItem.name === everyItem.name)
            return <div>
                <p>{everyItem.name}</p>
                <p>{everyItem.price}</p>
                {
                    itemcheck ? 
                    (<div style={{
                        display : "flex"
                    }
                    }>
                        <button onClick={()=>{decreaseQuantity(itemcheck)}}>-</button>
                        <p>{itemcheck.quantity}</p>
                        <button onClick={()=>{increaseQuantity(itemcheck)}}>+</button>
                    </div>)
                    :
                    (
                        <button onClick={()=>{addToCart(everyItem)}}>Add to Cart</button>
                    )
                }
               
            </div>
        })

    }

    function addToCart(fullItem){
        const quantityObject = {
            ...fullItem,
            quantity:1
        }
        const newCartArray = [...productCart, quantityObject]
        console.log(newCartArray)
        productinfo(newCartArray)
    }


    function increaseQuantity(itemsObject){
        const quantityForCart = productCart.map((innerObject)=>{
            if (innerObject.name===itemsObject.name) {
                const increasedQuantityObject = {
                    ...innerObject,
                    quantity: innerObject.quantity+1
                }
                return increasedQuantityObject;
            }
            else{
                return innerObject;
            }
        })
        productinfo(quantityForCart);
    }

    function decreaseQuantity(itemsObject){
       const newProductCart =  productCart.map((innerObject)=>{
            if (itemsObject.name === innerObject.name && innerObject.quantity>1) {
                const decreasedQuantityObject = {
                    ...innerObject,
                    quantity: innerObject.quantity-1,
                }


                return decreasedQuantityObject
            }

            return innerObject;
        })
        return productinfo(newProductCart.filter((innerObject)=>{
            if (innerObject.name === itemsObject.name && innerObject.quantity==1) {
                return false;
            }
            return true;
        }));
    }

    return(
        <>
        
        {displayCart(products)}

        </>
    );
}
export default CartSystem;