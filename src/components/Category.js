import React from "react";
import {cateData} from "../category-data/cateData";
import {useLoaderData} from "react-router";
import {Link} from "react-router-dom";
import {RssPage} from "../RSS/rss.js";
import icon from "./layout/icon/newspaper.png"

const PostLeft = (params) => {
    return (
        <div className="col-lg-8">
            <ListCategory/>
            <ListPost cate={params.cate} name={params.name}/>
            <div className="pagination-area pb-45 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="single-wrap d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#"><span
                                            className="flaticon-arrow roted"></span></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                        <li className="page-item"><a className="page-link" href="#">02</a></li>
                                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><span
                                            className="flaticon-arrow right-arrow"></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
const ListCategory = () => {
    return(
        <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-3">
                <div className="section-tittle mb-30">
                    <h3>Whats New</h3>
                </div>
            </div>
            <div className="col-lg-9 col-md-9">
                <div className="properties__button">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <Link to={"/thoi-su"} className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                               role="tab" aria-controls="nav-profile" aria-selected="false">Trong Nước</Link>
                            <Link to={"/thoi-su-quoc-te"} className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                  role="tab" aria-controls="nav-profile" aria-selected="false">Quốc Tế</Link>
                            <Link to={"/kinh-te"} className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                  role="tab" aria-controls="nav-profile" aria-selected="false">Kinh Tế</Link>
                            <Link to={"/suc-khoe"} className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                  role="tab" aria-controls="nav-profile" aria-selected="false">Sức Khỏe</Link>
                            <Link to={"/giao-duc-khoa-hoc"} className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                  role="tab" aria-controls="nav-profile" aria-selected="false">Giáo Dục</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
const ListPost = (params) => {
    const list = RssPage(params.cate)
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {list.map(item => <PostItem cate={params.cate} title={item.title} desc={item.desc}
                                    link={item.link} img={item.img} name={params.name}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const PostItem = (params) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="single-what-news mb-100">
                <div className="what-img">
                    <img src={params.img} alt=""/>
                </div>
                <div className="what-cap">
                    <span className="color1">{params.name}</span>
                    <h4><Link to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}>{params.title}</Link></h4>
                </div>
            </div>
        </div>
    )
}
const PostRight = () => {
    return (
        <div className="col-lg-4">
            <div className="section-tittle mb-40">
                <h3>Follow Us</h3>
            </div>
            <div className="single-follow mb-45">
                <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="#"><img src="assets/img/news/icon-fb.png" alt=""/></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="#"><img src="assets/img/news/icon-tw.png" alt=""/></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="#"><img src="assets/img/news/icon-ins.png" alt=""/></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="#"><img src="assets/img/news/icon-yo.png" alt=""/></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-poster d-none d-lg-block">
                <img src="assets/img/news/news_card.jpg" alt=""/>
            </div>
        </div>
    )
}
export const Category = () => {
    const cate = useLoaderData();
    console.log(RssPage(cate.cate))
    console.log(typeof cate)
    return (cate ?
        <div>
            <section className="whats-news-area pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <PostLeft cate={cate.cate} name={cate.name}/>
                        <PostRight/>
                    </div>
                </div>
            </section>
    </div> : <div></div>)
}
export async function loadCategory({params}) {
    const cate = cateData.find(item => item.cate === params.cate);
    return (typeof cate === 'undefined' ? null : cate);
}