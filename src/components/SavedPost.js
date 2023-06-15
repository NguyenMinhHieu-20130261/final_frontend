import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PostLeft = (params) => {
    const listPost = params.list
    const [currentPage, setCurrentPage] = useState(1)
    const [listPostOnePage, setListPostOnePage] = useState(null)
    let numberPage = []
    let postNumber = 8
    let pageTotal = Math.ceil(listPost.length / postNumber)

    useEffect(() => {
        if (listPost) {
            let start = (currentPage - 1) * postNumber;
            let end = start + postNumber;
            let post = listPost.slice(start, end)
            setListPostOnePage(post);
        }
    }, [listPost, currentPage])

    function nextPage(page) {
        setCurrentPage(page)
    }

    for (let i = 0; i < pageTotal; i++) {
        let page = i + 1
        numberPage.push(<li className="page-item active">
            <a className="page-link" onClick={() => {
                nextPage(page)
            }}>{page}</a>
        </li>)
    }
    return (
        <div className="col-lg-8">
            <ListCategory/>
            {listPostOnePage ? <ListPost list={listPostOnePage}/> : <div></div>}
            <div className="pagination-area pb-45 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="single-wrap d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        {numberPage}
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
    return (
        <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-3">
                <div className="section-tittle mb-30">
                    <h3>Bài Viết Đã Lưu</h3>
                </div>
            </div>
        </div>
    )
}
const ListPost = (params) => {
    let item = []
    if (params.list) {
        for (let i = 0; i < params.list.length; i++) {
            item.push(<PostItem title={params.list[i].title}
                                desc={params.list[i].desc}
                                pubDate={params.list[i].pubDate}
                                link={params.list[i].link}
                                img={params.list[i].img}
                                />)
        }
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {item ? item : <div></div>}
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
        if (!list.find(obj => obj.title === item.title && obj.desc === item.desc
            && obj.pubDate === item.pubDate && obj.img === item.img
            && obj.link === item.link)) {
            list.push(item)
        } else {
            const filteredList = list.filter(obj => !(obj.title === item.title && obj.desc === item.desc
                && obj.pubDate === item.pubDate && obj.img === item.img
                && obj.link === item.link));
            filteredList.reverse();
            filteredList.push(item);
            list = filteredList;
        }
        list.reverse()
        localStorage.setItem("history", JSON.stringify(list))
    }

    let listSaved = JSON.parse(localStorage.getItem("saved-post"))
    if (!listSaved) {
        listSaved = []
    }
    const checkSavedPost = (item) => {
        return listSaved.find(obj => obj.title === item.title && obj.desc === item.desc
            && obj.pubDate === item.pubDate && obj.img === item.img
            && obj.link === item.link)
    }

    function savedPost(item) {
        if (!listSaved.find(obj => obj.title === item.title && obj.desc === item.desc
            && obj.pubDate === item.pubDate && obj.img === item.img
            && obj.link === item.link)) {
            listSaved.push(item)
        } else {
            const filteredList = listSaved.filter(obj => !(obj.title === item.title && obj.desc === item.desc
                && obj.pubDate === item.pubDate && obj.img === item.img
                && obj.link === item.link));
            filteredList.reverse();
            listSaved = filteredList
        }
        listSaved.reverse()
        localStorage.setItem("saved-post", JSON.stringify(listSaved))
        window.location.reload()
    }

    return (
        <div className="col-lg-6 col-md-6">
            <div className="single-what-news mb-50">
                <div className="what-img">
                    <img src={params.img} alt=""/>
                </div>
                <div className="what-cap">
                    <span className="color1">{params.pubDate}</span>
                    <button className={`ml-10 border-0 bg-white 
                    ${checkSavedPost({
                        title: params.title, desc: params.desc,
                        pubDate: params.pubDate, link: params.link, img: params.img
                    }) ? `text-warning` : ``}`}
                            type="reset"
                            onClick={() => {
                                savedPost({
                                    title: params.title, desc: params.desc,
                                    pubDate: params.pubDate, link: params.link, img: params.img
                                })
                            }}><i className="fas fa-bookmark"></i></button>
                    <h4><Link to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}
                              onClick={() => {
                                  historyPost({
                                      title: params.title, desc: params.desc,
                                      pubDate: params.pubDate, link: params.link, img: params.img
                                  })
                              }}>{params.title}</Link></h4>
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
export const SavedPost = () => {
    let listSavedPost = JSON.parse(localStorage.getItem("saved-post"))
    if (listSavedPost === null) {
        listSavedPost = []
    }
    return (
        <section className="whats-news-area pt-50 pb-20">
            <div className="container">
                <div className="row">
                    <PostLeft list={listSavedPost}/>
                    <PostRight/>
                </div>
            </div>
        </section>
    )
}