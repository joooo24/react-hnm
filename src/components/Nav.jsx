import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    // const [keyword, setKeyword] = useState('')
    const [isLogin, setLogin] = useState(false);
    const categories = ["아우터", "상의", "하의"];
    return (
        <nav className="navbar">
            <div className="top-wrap">
                <h2 className="logo-wrap">
                    <img
                        src="https://image.msscdn.net/display/images/2025/10/22/d9647c20f3cb47f8af1b7d4a360b936b.png"
                        alt=""
                    />
                </h2>
                <div className="btn-wrap">
                    {isLogin ? (
                        <button className="btn-login" onClick={() => setLogin(!isLogin)}>
                            <span>로그아웃</span>
                        </button>
                    ) : (
                        <button className="btn-login" onClick={() => setLogin(!isLogin)}>
                            <span>로그인</span>
                        </button>
                    )}
                </div>
            </div>
            <div className="nav-container">
                <ul className="nav-menu">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link to="/">{category}</Link>
                        </li>
                    ))}
                </ul>

                <form className="search-box">
                    <input type="text" className="search-input" placeholder="상품을 검색하세요" />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Nav;
