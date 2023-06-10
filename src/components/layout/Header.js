import React from 'react';
import '../../assets/css/layout/header.css'
const Header = () => {
    return (
    <header>
        <div id="header">
            <div className="right" id="toolbar"> Tin tức <a href=""><img src="" width="20" height="20" alt=""/></a> <a href="#"><img src="img/icon-minus.gif" width="20" height="20" alt=""/></a></div>
            <div className="title-bar"><div id="site-title">
                    <h1><a href="#">Báo mới </a> <span> / Tin tức dành cho bạn</span></h1>
                </div>
            </div>
            <div id="navigation">
                <div id="main-nav">
                    <ul className="tabbed">
                        <li className="current-tab tab"><a href="#">TRANG CHỦ</a></li>
                        <li className="tab"><a href="#">THỜI SỰ</a></li>
                        <li className="tab"><a href="#">THẾ GIỚI</a></li>
                        <li className="tab"><a href="#">KINH DOANH</a></li>
                        <li className="tab"><a href="#">CÔNG NGHỆ</a></li>
                        <li className="tab"><a href="#">DU LỊCH</a></li>
                        <li className="tab"><a href="#">VĂN HÓA</a></li>
                        <li className="tab"><a href="#">THỂ THAO</a></li>
                    </ul>
                    <div className="clearer">&nbsp;</div>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;