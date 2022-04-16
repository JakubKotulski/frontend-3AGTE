import "./MainPage.css"
import { useState, useEffect } from "react";

const MainPage = () => {

    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await fetch("http://localhost:4000/product");

        const products = await data.json();
        setProducts(products);
    }

    console.log(products);

    return(
        <h1>MainPage</h1>
    )
}

export default MainPage;