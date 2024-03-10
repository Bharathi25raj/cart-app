
export default function ProductCard({products, handleAddToCart}){    

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