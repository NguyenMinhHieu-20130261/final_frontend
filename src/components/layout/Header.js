import React from 'react';
import logo from "./icon/logo.png"
import {cateData} from "../../category-data/cateData";
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
const OtherCates = (data) => {
    return (
        <li key={"OtherCates" + data.name}><Link to={`${data.cate}`}>{data.name}</Link></li>
    )
}
const Header = () => {
    return (
        <header key={"Header"}>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-mid d-none d-md-block">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="header-banner f-right ">
                                        <Link to={"/"}><img src={logo} alt="LOGO" style={{borderRadius:"20px"}}></img></Link>
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
                                        <Link to={"/"}></Link>
                                    </div>

                                    <div className="main-menu d-none d-md-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to={"/"}>Trang Chủ</Link></li>
                                                <li><Link to={"/tin-moi-nhat"}>Tin mới nhất</Link></li>
                                                <li><Link to={"/thoi-su"}>Trong nước</Link></li>
                                                <li><Link to={"/thoi-su-quoc-te"}>Quốc Tế</Link></li>
                                                <li><Link to={"/kinh-te"}>Kinh tế</Link></li>
                                                <li><Link to={"/suc-khoe"}>Sức Khỏe</Link></li>

                                                <li><p
                                                style={{
                                                    cursor:"pointer"
                                                }}>Khác</p>
                                                    <ul className="submenu">
                                                        {cateData.slice(5, cateData.length).map(cate =>
                                                            <OtherCates key={cate.name} cate={cate.cate} name={cate.name}/>
                                                        )}
                                                        <li><Link to={"/"}>Về chúng tôi</Link></li>
                                                        <li><Link to={"/"}>Liên hệ chúng tôi</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={"/history"}><i className="fas fa-clock"></i></Link></li>
                                                <li><Link to={"/saved-post"}><i className="fas fa-bookmark"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <SearchBar/>
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