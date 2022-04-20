import EmptyCart from "./EmptyCart";
import ItemCart from "./ItemCart";

const Cart = ({cartItems}) => {
    return (  
        <>
  
       
      <h1>{(cartItems.length===0)? <EmptyCart/> :<ItemCart cartItems={cartItems}/>}</h1>

 </>
 );
}
 
export default Cart;