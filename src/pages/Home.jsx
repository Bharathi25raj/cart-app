import ProductCard from "../components/ProductCard";
import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";

function Home(){

    const { products, handleAddToCart } = useContext(ProductContext);

    return (
        <>
            <ProductCard />
        </>
    )
}

export default Home;