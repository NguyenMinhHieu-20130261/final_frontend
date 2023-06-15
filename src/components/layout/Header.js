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
        <div className="col-xl-2 col-lg-2 col-md-4">
            <div className="header-right-btn ">
                <i className="fas fa-search magnify"></i>
                <form>
                    <input  className="search-bar" type="text" name="search" placeholder="Tìm kiếm"/>
                </form>
            </div>
        </div>
    )
}
const Header = () => {
    return (
        <header>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-mid d-none d-md-block">
                        <div className="container">
                            <div className="row d-flex align-items-center">

                                <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="logo">
                                        <a href="index.html">
                                            <div id="img"></div>
                                            <p id="site-title"> Báo BaHawst</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9">
                                    <div className="header-banner f-right ">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">

                                    <div className="sticky-logo">
                                        <a href="index.html">

                                        </a>
                                    </div>

                                    <div className="main-menu d-none d-md-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to={"/home"}>Trang Chủ</Link></li>
                                                <li><Link to={"/tin-moi-nhat"}>Tin mới nhất</Link></li>
                                                <li><Link to={"/thoi-su"}>Trong nước</Link></li>
                                                <li><Link to={"/thoi-su-quoc-te"}>Quốc Tế</Link></li>
                                                <li><Link to={"/kinh-te"}>Kinh tế</Link></li>
                                                <li><Link to={"/suc-khoe"}>Sức Khỏe</Link></li>

                                                <li><a href="#">Khác</a>
                                                    <ul className="submenu">
                                                        {cateData.slice(5, cateData.length).map(cate =>
                                                            <OtherCates cate={cate.cate} name={cate.name}/>
                                                        )}
                                                        <li><a href="about.html">Về chúng tôi</a></li>
                                                        <li><a href="contact.html">Liên hệ chúng tôi</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={"/history"}><i className="fas fa-clock"></i></Link></li>
                                                <li><Link to={"/saved-post"}><i className="fas fa-bookmark"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <SearchBar></SearchBar>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-md-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;