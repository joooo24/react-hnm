import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

const ProductDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                const response = await fetch(`${baseUrl}/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div>로딩 중…</div>;
    if (error) return <div>에러: {error}</div>;
    if (!product) return <div>상품이 없습니다.</div>;

    return (
        <div className="product-detail">
            <div className="thumbnail-wrap">
                {Array.isArray(product?.tags) && product.tags.length > 0 && (
                    <>
                        <h4>태그</h4>
                        <ul className="tags">
                            {product.tags.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </>
                )}
                <div className="img-wrap">
                    <img src={product?.img} alt={product?.title || "product"} />
                </div>
            </div>
            <div className="info-wrap">
                <div className="info">
                    <h1>{product?.title}</h1>
                    <p className="price">₩{product?.price?.toLocaleString?.()}</p>

                    <div className="flags">
                        {product?.choice && <span className="choice">MD추천</span>}
                        {product?.new && <span className="new">신제품</span>}
                    </div>

                    {Array.isArray(product?.size) && product.size.length > 0 && (
                        <>
                            <h4>사이즈</h4>
                            <ul className="sizes">
                                {product.size.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
