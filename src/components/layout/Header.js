import React from 'react';
import '../../assets/css/layout/header.css'
import '../../assets/css/main.css'
const Header = () => {
    return (
        <div id="header">
            <div className="right" id="toolbar"> Text size <a href="#"><img src="img/icon-plus.gif" width="20"
                                                                            height="20"
                                                                            alt=""/></a> <a href="#"><img
                src="img/icon-minus.gif" width="20" height="20" alt=""/></a></div>
            <div className="clearer">&nbsp;</div>
            <div id="site-title">
                <h1><a href="#">Simple Magazine</a> <span> / News</span></h1>
            </div>
            <div id="navigation">
                <div id="main-nav">
                    <ul className="tabbed">
                        <li className="current-tab"><a href="#">News</a></li>
                        <li><a href="#">Politics</a></li>
                        <li><a href="#">Culture</a></li>
                        <li><a href="#">Sport</a></li>
                        <li><a href="#">Debate</a></li>
                        <li><a href="#">Entertainment</a></li>
                    </ul>
                    <div className="clearer">&nbsp;</div>
                </div>
                <div id="sub-nav">
                    <ul className="tabbed">
                        <li className="current-tab"><a href="#">Frontpage</a></li>
                        <li><a href="style-demo.html">Style Demo</a></li>
                        <li><a href="two-columns.html">Two Columns</a></li>
                        <li><a href="single-column.html">Single Column</a></li>
                        <li><a href="archives.html">Archives</a></li>
                        <li><a href="empty-page.html">Empty Page</a></li>
                    </ul>
                    <div className="clearer">&nbsp;</div>
                </div>
            </div>
        </div>
    );
};

export default Header;