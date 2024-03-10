import { ProductContext } from "./ProductContext"
import { useContext } from "react"



export default function ProductCard(){    

    const {products, handleAddToCart} = useContext(ProductContext);

    if(products.length === 0){
        return (
            <div className="loading">...Loading</div>
        )
    }

    return (

        <div className="products">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="productCard">
                            <img className="productImage" src={product.image} alt="product_image"/>
                            <p className="productTitle">{product.title}</p>
                            <p className="productPrice">{product.price}$</p>
                            <button className="btn addToCartBtn" onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}