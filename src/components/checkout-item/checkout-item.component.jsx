import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'



const CheckoutItem = ({cartItem})=> {
const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)
const{name, imageUrl, price, quantity}= cartItem;
const clearItemFromCartHandler = ()=> clearItemFromCart(cartItem);
const addItemToCartHandler = ()=> addItemToCart(cartItem);
const removeItemFromCartHandler = ()=> removeItemToCart(cartItem);
return (

<div className='checkout-item-container'>
    <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
    </div>

<span className='name'>{name}</span>

<span className='quantity'>
    <div className='arrow'onClick={removeItemFromCartHandler}>
    &#10094;
    </div>
<span className='value'>{quantity}</span>
<div className='arrow' onClick={addItemToCartHandler}>
    &#10095;
    </div>
</span>

<span className='price'>{price}</span>
<div className='remove-button' onClick={clearItemFromCartHandler}>&#10005;</div>

</div>

)

};

export default CheckoutItem;