import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div className="product-card" onClick={showDetail}>
            <div className="img-wrap">
                <img src={item?.img} alt="thumbnail" />
            </div>
            <div className="info">
                <h3 className="name">{item?.title}</h3>
                <p className="price">₩{item?.price}</p>
            </div>
            {(item?.choice || item?.new || item?.tags.length > 0) && (
                <ul className="tag-wrap">
                    {item?.choice ? <li className="choice">MD추천</li> : null}
                    {item?.new ? <li className="new">신제품</li> : null}
                    {(item?.tags || []).map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductCard;
