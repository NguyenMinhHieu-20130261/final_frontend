import React, {useEffect, useState} from "react";
import {cateData} from "../category-data/cateData";
import {useLoaderData} from "react-router";
import {Link} from "react-router-dom";
import {RssPage} from "../RSS/rss.js";

const SearchLeft = (params) => {
    const searchIndex = params.link.substring(34,params.link.indexOf(".htm"));
    const list = RssPage(params.cate)
    console.log(searchIndex)
    const [currentPage, setCurrentPage] = useState(1)
    const [listSearch, setListSearch] = useState(null)
    let numberPage = []
    let postNumber = 4
    let pageTotal = Math.ceil(list.length / postNumber)
    useEffect(() => {
        if (list && searchIndex.trim() !== "") {
            let filteredResult = list.filter(item => item.title.toUpperCase().indexOf(searchIndex.toUpperCase()) !== -1);
            let start = (currentPage - 1) * postNumber;
            let end = start + postNumber;
            let post = filteredResult.slice(start, end)
            setListSearch(post);
        } else {
            setListSearch(null);
        }
    }, [list,setListSearch,currentPage]);

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
            <ListSearchCate name={params.name}/>
            {listSearch ? <ListSearch list={listSearch} key={listSearch}/> : <div></div>}
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
const ListSearchCate = (params) => {
    return (
        <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-3">
                <div className="section-tittle mb-30">
                    <h3>{params.name}</h3>
                </div>
            </div>
        </div>
    )
}
const ListSearch = (params) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {params.list.map(item => <SearchItem title={item.title} desc={item.desc}
                                                                   link={item.link} img={item.img}
                                                                   pubDate={item.pubDate}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const SearchItem = (params) => {
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
const Tag = (data) => {
    return(
        <div className="tag-container">
            <Link to={`${data.cate}`} style={{
                margin:"0 !important"
            }}><p className="tag-item">
                {data.name}</p></Link>
        </div>
    )
}
const SearchRight = () => {
    return (
        <div className="col-lg-4">
            <div className="section-tittle mb-15">
                <h3>Danh mục</h3>
            </div>
            <div className="mb-20 d-flex"
                 style={{flexWrap :"wrap"}}
            >
                {cateData.slice(5, cateData.length).map(cate =>
                    <Tag cate={cate.cate} name={cate.name}/>
                )}
            </div>
            <div className="news-poster d-none d-lg-block">
                <img src="assets/img/news/news_card.jpg" alt=""/>
            </div>
        </div>
    )
}
export const Search = () => {
    const cate = useLoaderData();
    return (cate ?
        <div>
            <section className="whats-news-area pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <SearchLeft cate={cate.cate} name={cate.name}/>
                        <SearchRight/>
                    </div>
                </div>
            </section>
        </div> : <div></div>)
}

export async function loadSearch({params}) {
    const cate = cateData.find(item => item.cate === params.cate);
    return (typeof cate === 'undefined' ? null : cate);
}