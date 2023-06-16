import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {RssPage} from "../RSS/rss.js";

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
                    <h4>
                        <Link to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}
                              key={"SearchItem" + params.title}
                              onClick={() => {
                                  historyPost({
                                      title: params.title, desc: params.desc,
                                      pubDate: params.pubDate, link: params.link, img: params.img
                                  })
                              }}>{params.title}
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}
const ListSearch = (params) => {
    return (
        <div className="row" key={"ListSearch" + params.title}>
            <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <div className="whats-news-caption">
                            <div className="row">
                                {params.list.map(item => <SearchItem
                                    key={item.title}
                                    title={item.title} desc={item.desc}
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
export const Search = (data) => {
    const [cate, setCate] = useState(data);
    const [searchList , setSearchList] =useState(null)
    const list = RssPage(cate.cate)
    let searchIndex =  localStorage.getItem("search");
    useEffect(() => {
        if (list && searchIndex.trim() !== "") {
            let filteredResult = list.filter(item => item.title.toUpperCase().indexOf(searchIndex.toUpperCase()) !== -1);
            setSearchList(filteredResult);
        } else {
            setSearchList(null);
        }
        }, [list,searchIndex]);
    return (
        <div>
            <section className="whats-news-area pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row d-flex justify-content-between">
                                <div className="" style={{
                                    flex: "100% !important",
                                    maxWidth: "100% !important"
                                }}>
                                    <div className="section-tittle mb-30">
                                        <h3>Kết quả tìm kiếm: {searchIndex}</h3>
                                    </div>
                                </div>
                            </div>
                            {searchList ? <ListSearch list={searchList} key={data.title} cate={cate.cate} name={cate.name}/> : <div> Lỗi</div>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
// export const Search = () => {
//     return (<div>
//             <section className="whats-news-area pt-50 pb-20">
//                 <div className="container">
//                     <div className="row">
//                         <SearchBody cate={cate.cate} name={cate.name}/>
//                     </div>
//                 </div>
//             </section>
//         </div>)
// }