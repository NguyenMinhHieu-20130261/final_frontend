import React, {useEffect, useState} from "react";
import {RssPage} from "../RSS/rss";
import {Link} from "react-router-dom";
import {useLoaderData} from "react-router";
import {cateData} from "../category-data/cateData";

const PostLeft = (params) => {
    const listPost = RssPage(params.cate)
    const [currentPage, setCurrentPage] = useState(1)
    const [listPostOnePage, setListPostOnePage] = useState(null)
    let numberPage = []
    let postNumber = 8
    let pageTotal = Math.ceil(listPost.length / postNumber)


    useEffect(() => {
        if (listPost) {
            let start = (currentPage - 1) * postNumber;
            let end = start + postNumber;
            let post = listPost.slice(start,end)
            setListPostOnePage(post);
            console.log(listPost.slice(start,end))
            console.log(listPostOnePage)
        }
    },[listPost,currentPage])
    function nextPage(page) {
        setCurrentPage(page)
    }
    for (let i = 0; i < pageTotal; i++) {
        let page = i+1
        numberPage.push(<li className="page-item active">
            <a className="page-link" onClick={() => {nextPage(page)}}>{page}</a>
        </li>)
    }
    return (
        <div className="col-lg-8">
            <ListCategory/>
            {listPostOnePage? <ListPost cate={params.cate} name={params.name} list={listPostOnePage} key={listPostOnePage}/> : <div></div>}
            <div className="pagination-area pb-45 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="single-wrap d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        {/*<li className="page-item"><a className="page-link" href="#"><span*/}
                                        {/*    className="flaticon-arrow roted"></span></a></li>*/}
                                        {numberPage}
                                        {/*<li className="page-item"><a className="page-link" href="#"><span*/}
                                        {/*    className="flaticon-arrow right-arrow"></span></a></li>*/}
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
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {params.list.map(item => <PostItem cate={params.cate} title={item.title} desc={item.desc}
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
    function historyPost(item) {
        let list = JSON.parse(localStorage.getItem("history"))
        if (!list) {
            list = []
        }
        list.push(item)
        localStorage.setItem("history", JSON.stringify(list))
    }
    return (
        <div className="col-lg-6 col-md-6">
            <div className="single-what-news mb-100">
                <div className="what-img">
                    <img src={params.img} alt=""/>
                </div>
                <div className="what-cap">
                    <span className="color1">{params.name}</span>
                    <h4><Link to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}
                              onClick={() => {historyPost({cate:params.cate, link:params.link, img:params.img})}}>{params.title}</Link></h4>
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
export const History = () => {
    const listHistory = localStorage.getItem("history")
    console.log(listHistory)
    return (listHistory ?
        <div>
            <section className="whats-news-area pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <PostLeft />
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