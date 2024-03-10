import ProductCard from "../components/ProductCard";

function Home({products, handleAddToCart}){

    return (
        <>
            <ProductCard products={products}
                         handleAddToCart={handleAddToCart} />
        </>
    )
}

export default Home;