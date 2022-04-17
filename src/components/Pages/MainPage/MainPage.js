import "./MainPage.css";
import SearchField from "../../SearchField/SearchField";
import Galery from "../../Galery/Galery";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

    

    return(
        // <>
        //     <h1>MainPage</h1>
        //     <SearchField />
        // </>

        <Container fluid className="mp-container">
            <Row className="row-customized">
                <Col>
                    <h3>Just look if we have what you need</h3>
                    <SearchField products={products} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Galery products={products} />
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage;