import React from 'react';
import icon from "./icon/newspaper.png"
const SearchBar = () => {
    return(
        <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6" id="search-bar">
            <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search"
                   placeholder="Tìm kiếm"></input>
            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                <i className="zmdi zmdi-search"></i>
            </button>
        </div>
    )
}
const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="site-title">
                    <a href="index.html" className="title-link">
                        <img src={icon}></img>
                        <h2>
                            Báo BaHắt
                        </h2>
                    </a>
                </div>

                <div className="wrap-main-nav">
                    <div className="main-nav">
                        <nav className="menu-desktop">
                            <div className="nav-container">
                                <ul className="main-menu">
                                    <li className="main-menu-active">
                                        <a href="index.html">Trang chủ</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-01.html">Tin tức</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-02.html">Giải trí</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-01.html">Kinh doanh</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-02.html">Thể thao</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-01.html">Du lịch</a>
                                    </li>

                                    <li className="mega-menu-item">
                                        <a href="category-02.html">Video</a>
                                    </li>
                                    <li>
                                        <a href="#">Features</a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">Về chúng tôi</a></li>
                                            <li><a href="contact.html">Liên hệ chúng tôi</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <SearchBar></SearchBar>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;