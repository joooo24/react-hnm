import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    // const [keyword, setKeyword] = useState('')
    const categories = ['아우터', '상의', '하의']
    return (
        <nav className="navbar">
            <h2 className='logo-wrap'>
                <img src="" alt="" />
            </h2>
            <div className="btn-wrap">
                <button className="btn-login" onClick={() => console.log('로그인 클릭')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </button>

                <button className="btn-logout">
                    <FontAwesomeIcon icon={faUser} />
                    로그아웃
                </button>
            </div>
            <div className="nav-container">
                <ul className="nav-menu">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link to="/">{category}</Link>
                        </li>
                    ))}
                </ul>

                <form className="search-box" >
                    <input
                        type="text"
                        className="search-input"
                        placeholder="상품을 검색하세요"
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                        <span style={{ marginLeft: 6 }}>검색</span>
                    </button>
                </form>

            </div>
        </nav>
    )
}

export default Nav