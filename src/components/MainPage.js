import React from 'react';

const PostColumn = () => {
    return (
        <div className="post">
            <a href="#">
                {/*<img src="news-image-small-1.jpg" alt="" className="left bordered"/>*/}
                <div id="picture" class="left bordered"></div>
            </a>
            <h3>
                <a href="#">Tiêu đề</a>
            </h3>
            <p>Integer diam elit, condimentum ac semper ut, tincidunt non diam. Ut congue rutrum justo at commodo.
                Aenean euismod tincidunt lorem scelerisque euismod.</p>
            <a href="#" className="more">Đọc thêm &#187;</a>
            <div className="clearer">&nbsp;</div>
        </div>
    );
};
const LatestList = () => {
    return(
        <li>
            <div className="left"><a href="#">Tin tức list...</a></div>
            <div className="right">20.49</div>
            <div className="clearer">&nbsp;</div>
        </li>
    )
}
const MostViewedList = () => {
    return(
        <li>
            <div className="left"><a href="#">Tin tức list...</a></div>
            <div className="right">20.49</div>
            <div className="clearer">&nbsp;</div>
        </li>
    )
}
const ColumnContent = () => {
    return(
        <div className="column-content">
            <div className="post">
                <p><a href="#">
                    <img src="news-image-med-1.jpg" alt="" className="bordered"/>
                </a></p>
                <h4><a href="#">Curabitur justo arcu</a></h4>
                Bibendum at bibendum in, semper nec ibh.
            </div>
        </div>
    )
}
const LeftSideContent = () =>{
    return(
        <div className="post">
            <p><a href="#"><img src="news-image-small-1.jpg" alt="" className="bordered"/></a></p>
            <h3><a href="#">Tiêu đề</a></h3>
            <p>Integer diam elit, condimentum ac semper ut, tincidunt non diam. Ut congue rutrum justo at commodo.
                Aenean euismod tincidunt lorem scelerisque euismod.</p>
            <a href="#" className="more">Xem thêm &#187;</a>
        </div>
    )
}
const MainPost = () => {
    return (
        <div className="post">
            <div className="post-title">
                <h2><a href="#">Template Information</a></h2>
            </div>
            <div className="post-date">18:11, Sunday, August 2, 2009 by Viktor Persson</div>
            <div className="post-body">
                <p><a href="#"><img src="news-image-big.jpg" alt="" className="bordered"/></a></p>
                <p className="large">This is a free website template by Arcsin, built using tableless XHTML and CSS.</p>
                <p>This template is distributed under a Creative Commons Attribution 2.5 License, which allows you to
                    use and modify it for any purpose (personal and commercial), under the condition that you keep the
                    provided credit links in the footer.</p>
                <p>The latest template version and CMS conversions for platforms such as WordPress and Blogger can be
                    found at the official Simple Magazine website template page.</p>
                <p>For more templates, questions and comments please visit Arcsin Web Templates.</p>
                <a href="#" className="more">Xem thêm &#187;</a></div>
        </div>
    )
}
const Latest = () => {
    return (
        <div className="section latest">
            <div className="section-title">
                <div className="left">Tin tức mới nhất</div>
                <div className="right"><img src="img/icon-time.gif" width="14" height="14" alt=""/></div>
                <div className="clearer">&nbsp;</div>
            </div>
            <div className="section-content">
                <ul className="nice-list">
                    <LatestList></LatestList>

                    <LatestList></LatestList>

                    <LatestList></LatestList>

                    <LatestList></LatestList>

                    <LatestList></LatestList>

                    <LatestList></LatestList>

                    <li><a href="#" className="more">Xem thêm &#187;</a></li>
                </ul>
            </div>
        </div>
    )
}
const MostViewed = () => {
    return (
        <div className="section most-viewed">
            <div className="section-title">Tin được theo dõi nhiều nhất</div>
            <div className="section-content">
                <ul className="nice-list">
                    <MostViewedList></MostViewedList>

                    <MostViewedList></MostViewedList>

                    <MostViewedList></MostViewedList>

                    <MostViewedList></MostViewedList>

                    <MostViewedList></MostViewedList>

                    <li><a href="#" className="more">Xem thêm...&#187;</a></li>
                </ul>
            </div>
        </div>
    )
}
export const Home = () => {
    return (
        <div className="main" id="main-three-columns">
            <div className="left" id="main-left">
                <MainPost></MainPost>
                <div className="content-separator"></div>
                <PostColumn></PostColumn>
                <div className="col3 left">
                    <ColumnContent></ColumnContent>
                </div>
                <div className="col3 col3-mid left">
                    <ColumnContent></ColumnContent>
                </div>
                <div className="col3 right">
                    <ColumnContent></ColumnContent>
                </div>
                <div className="clearer">&nbsp;</div>
            </div>
            <div className="left sidebar" id="sidebar-1">
                <LeftSideContent></LeftSideContent>
                <LeftSideContent></LeftSideContent>
                <LeftSideContent></LeftSideContent>
            </div>
            <div className="right sidebar" id="sidebar-2">
                <Latest></Latest>
                <MostViewed></MostViewed>
                <div className="section network-section">
                    <div className="section-title">Tin tức Network</div>
                    <div className="section-content">
                        <ul className="nice-list">
                            <li><a href="#">Nullam eros</a></li>
                            <li><a href="#">Eleifend nec tortor</a></li>
                            <li><a href="#">Duis mi lectus</a></li>
                            <li><a href="#">Integer diam elit</a></li>
                            <li><a href="#">Enim dapibus venenatis</a></li>
                            <li><a href="#" className="more">Visit Network Site &#187;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="clearer">&nbsp;</div>
        </div>
    )
}