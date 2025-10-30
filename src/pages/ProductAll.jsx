import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./ProductAll.scss";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [searchParams] = useSearchParams();
    const keyword = (searchParams.get("q") || "").toLowerCase();

    const getProducts = async () => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const url = `${baseUrl}/products`;
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    };

    const filtered = productList.filter((item) => {
        if (!keyword) return true;
        return item?.title?.toLowerCase().includes(keyword);
    });

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className="product-card-container">
            {keyword && filtered.length === 0 ? (
                <div className="no-results">'{keyword}' 이름의 상품이 없습니다.</div>
            ) : (
                <Row>
                    {filtered.map((item) => (
                        <Col key={item.id} xs={6} md={4} lg={3}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default ProductAll;
