import React from 'react';
import icon from "./icon/newspaper.png"
import {cateData} from "../../category-data/cateData";
import {Link} from "react-router-dom";
const OtherCates = (data) => {
    return (
        <li><Link to={`${data.cate}`}>{data.name}</Link></li>
    )
}
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
                    <Link to={"/home"} className="title-link">
                        <img src={icon}></img>
                        <h2>
                            Báo BaHắt
                        </h2>
                    </Link>
                </div>
                <div className="wrap-main-nav">
                    <div className="main-nav">
                        <nav className="menu-desktop">
                            <div className="nav-container">
                                <ul className="main-menu">
                                    <li className="main-menu-active">
                                        <Link to={"home"}>Trang chủ</Link>
                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to={"thoi-su"}>Trong Nước</Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={"thoi-su-quoc-te"}>Quốc Tế</Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={"kinh-te"}>Kinh Tế</Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={"suc-khoe"}>Sức Khỏe</Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={"giao-duc-khoa-hoc"}>Giáo dục</Link>
                                    </li>
                                    <li>
                                        <a href="#">Features</a>
                                        <ul className="sub-menu">
                                            {cateData.slice(5, cateData.length).map(cate =>
                                                <OtherCates cate={cate.cate} name={cate.name}/>
                                            )}
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