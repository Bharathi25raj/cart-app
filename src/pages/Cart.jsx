import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";

function Cart() {

    const { items , setItems, count, setCount } = useContext(ProductContext);
   
    if(items.length === 0){
        return <></>;
    }

    const handleRemoveFromCart = (item) => {
        const filteredItems = items.filter((productItem) => {
            return item.id !== productItem.id;
        })

        localStorage.setItem('cartItems', JSON.stringify(filteredItems));
        setItems(filteredItems);
        setCount(filteredItems.length);
    }


    return (
        <div className="cart">
            {
                items.map((item) => {

                    return (
                        <div key={item.id} className="cartItem">
                            <img className="productImage" src={item.image} alt="product_image"/>
                            <p className="productTitle">{item.title}</p>
                            <p className="productPrice">{item.price}$</p>
                            <button className="btn removeFromCartBtn" onClick={() => {handleRemoveFromCart(item)}}>Remove from Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;