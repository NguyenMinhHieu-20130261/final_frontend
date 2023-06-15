import React, {useEffect, useState} from 'react';
import {cateData} from "../../category-data/cateData";
import {Link} from "react-router-dom";
import {RssPage} from "../../RSS/rss";
const OtherCates = (data) => {
    return (
        <li><Link to={`${data.cate}`}>{data.name}</Link></li>
    )
}
const SearchBar = (data) => {
    const [searchText, setSearchText] = useState("");
    const [result , setResult] =useState(null)

    const list = RssPage(data.cate);
    useEffect(() => {

    }, [data]);
    const toSearchPage = () => {

    }
    return(
            <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="header-right-btn ">
                    <i className="fas fa-search magnify"
                    onClick={toSearchPage()}
                    ></i>
                    <form>
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            className="search-bar" type="text" name="search" placeholder="Tìm kiếm"/>
                        <ul id="search-result">
                            <li>
                                <div> test</div>
                                {result.map((result) => (
                                    <li><Link to={result.link}>
                                        <div className="search-result">
                                            <p>{result.title}</p>
                                            <p>{result.pubDate}</p>
                                        </div>
                                    </Link></li>
                                ))}
                            </li>
                        </ul>

                    </form>
                </div>
            </div>
        )
    // }
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
                                        <Link to={"/home"}>
                                            <div id="img"></div>
                                            <p id="site-title"> Báo BaHawst</p>
                                        </Link>
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
                                        <Link to={"/home"}>

                                        </Link>
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
                                                        <li><Link to={"/home"}>Về chúng tôi</Link></li>
                                                        <li><Link to={"/home"}>Liên hệ chúng tôi</Link></li>
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