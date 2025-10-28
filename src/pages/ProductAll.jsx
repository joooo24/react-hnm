import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const url = `${baseUrl}/products`;
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className="product-card-container">
            <Row>
                {productList.map((item) => (
                    <Col key={item.id} xs={6} md={4} lg={3}>
                        <ProductCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;
