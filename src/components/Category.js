import React, {useEffect, useState} from "react";
import {cateData} from "../category-data/cateData";
import {useLoaderData} from "react-router";
import {Link} from "react-router-dom";
import {RssPage} from "../RSS/rss.js";

const PostLeft = (params) => {
    const [selectOrder, setSelectOrder] = useState("1");
    const [filterListPost, setFilterListPost] = useState(null);
    const listPost = RssPage(params.cate)
    const [currentPage, setCurrentPage] = useState(1)
    const [listPostOnePage, setListPostOnePage] = useState(null)
    let numberPage = []
    let postNumber = 8
    let pageTotal = Math.ceil(listPost.length / postNumber)

    useEffect(() => {
        if (listPost) {
            let filter = listPost.sort((a, b) => {
                return selectOrder === "2" ? new Date(a.pubDate) - new Date(b.pubDate) : new Date(b.pubDate) - new Date(a.pubDate);
            });
            setFilterListPost(filter);
            console.log("filter: "+ filterListPost);
            let start = (currentPage - 1) * postNumber;
            let end = start + postNumber;
            let post = filter.slice(start, end)
            setListPostOnePage(post);
            console.log("result: "+ listPostOnePage)
        }
    }, [listPost, currentPage,selectOrder])

    function nextPage(page) {
        setCurrentPage(page)
    }

    for (let i = 0; i < pageTotal; i++) {
        let page = i + 1
        numberPage.push(<li className="page-item active">
            <p className="page-link" onClick={() => {
                nextPage(page)
            }}>{page}</p>
        </li>)
    }
    const changeOrder = (event) => {
        setSelectOrder(event.target.value);
    };
    return (
        <div className="col-lg-8">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4 col-md-3">
                    <div className="section-tittle mb-30">
                        <h3>{params.name}</h3>
                    </div>
                </div>
                <select className="order-select"
                        onChange={changeOrder}
                        defaultValue={"1"}
                >
                    <option className="select-option" value="1" >Mới nhất</option>
                    <option className="select-option" value="2" >Cũ nhất</option>
                </select>
            </div>
            {listPostOnePage ? <ListPost list={listPostOnePage} key={listPostOnePage}/> : <div> Loading...</div>}
            <div className="pagination-area pb-45 text-center mt-15">
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
const ListPost = (params) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {params.list.map(item => <PostItem title={item.title} desc={item.desc}
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
const Tag = (data) => {
    return(
        <div className="tag-container">
            <Link to={`/${data.cate}`} style={{
                margin:"0 !important"
            }}><p className="tag-item">
                {data.name}</p></Link>
        </div>
    )
}
const PostRight = () => {
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
export const Category = () => {
    const cate = useLoaderData();
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