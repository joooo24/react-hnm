import React, { useState } from "react";
import "./Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isAuthenticated, setIsAuthenticated }) => {
    const [keyword, setKeyword] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const categories = ["아우터", "상의", "하의"];
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const q = keyword.trim();
        navigate(q ? `/?q=${encodeURIComponent(q)}` : "/");
        setIsMenuOpen(false);
    };

    const goToLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        if (setIsAuthenticated) {
            setIsAuthenticated(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="top-wrap">
                <button
                    type="button"
                    className="btn-menu mobile-only"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label="open menu"
                >
                    <FontAwesomeIcon icon={faBars} color="#ffffff" size="lg" />
                </button>
                <h2 className="logo-wrap" onClick={() => navigate("/")}>
                    <img
                        src="https://image.msscdn.net/display/images/2025/10/22/d9647c20f3cb47f8af1b7d4a360b936b.png"
                        alt=""
                    />
                </h2>
                <div className="btn-wrap">
                    {isAuthenticated ? (
                        <button className="btn-login" onClick={handleLogout}>
                            <span>로그아웃</span>
                        </button>
                    ) : (
                        <button className="btn-login" onClick={goToLogin}>
                            <span>로그인</span>
                        </button>
                    )}
                </div>
            </div>
            <div className="nav-container pc-only">
                {/* PC 메뉴 */}
                <ul className="nav-menu">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link to="/">{category}</Link>
                        </li>
                    ))}
                </ul>

                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="상품을 검색하세요"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            {/* 모바일 메뉴 */}
            {isMenuOpen && <div className="backdrop" onClick={() => setIsMenuOpen(false)}></div>}
            <aside className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
                <div className="drawer-head">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="close menu"
                    >
                        <FontAwesomeIcon icon={faXmark} color="#ffffff" size="lg" />
                    </button>
                </div>
                <ul className="nav-menu mobile-list">
                    {categories.map((category, index) => (
                        <li key={index} onClick={() => setIsMenuOpen(false)}>
                            <Link to="/">{category}</Link>
                        </li>
                    ))}
                </ul>
                <form className="search-box mobile-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="상품을 검색하세요"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </aside>
        </nav>
    );
};

export default Nav;
