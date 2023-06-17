import React, {useState} from 'react';
import {cateData} from "../category-data/cateData";
import {Link} from "react-router-dom";
import {RssPage} from "../RSS/rss.js";
import {BackToTop} from "./layout/BackToTop";

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
const Trending = (data) => {
    const [itemContent, setItem] = useState(data)
    const list = RssPage(itemContent.cate)
    if (list.length < 1) {
        return (<div
        style={{textAlign: "center", fontSize:"25px",marginTop: "150px"}}
        ><h1>Trang đang tải, xin vui lòng chờ  </h1></div>)
    }
  return(
      <div className="trending-area fix">
          <div className="container">
              <div className="trending-main">
                  <div className="row">
                      <div className=" main-trending">
                          <MainPostTrending title={list[0].title} img={list[0].img}
                                    description={list[0].description}
                                    pubDate={list[0].pubDate} link={list[0].link} cate={itemContent.cate}/>
                          <div className="trending-bottom">
                              <div className="row">
                                  {list.slice(1, 4)
                                      .map(item => <SidePostTrending
                                          title={item.title}
                                          key={item.title}
                                          img={item.img}
                                          pubDate={item.pubDate}
                                          link={item.link}
                                          cate={itemContent.cate}
                                          description={item.description}/>)}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
const MainPostTrending = (data) => {
    return(
        <div className="trending-top mb-30"
        style={{marginTop :"10px"}}
        >
            <div className="trend-top-img">
                <Link to={"/"+ data.link.substring(20,data.link.indexOf(".htm"))}>
                    <img src={data.img} alt="IMG" title={data.description}/>
                    <div className="trend-top-cap">
                        <span><p style={{margin : "0",padding: "1px 10px"}}>{data.pubDate}</p></span>
                        <h2 style={{color :"white" ,fontSize: "50px !important"}}>
                            {data.title}
                        </h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}
const SidePostTrending = (data) => {
    return(
        <div className="col-lg-4">
            <div className="single-bottom mb-20">
                    <div className="trend-bottom-img mb-15" style={{marginTop: "5px"}}>
                        <img src={data.img} alt="IMG"></img>
                    </div>
                    <div className="trend-bottom-cap">
                        <span className="color1">{data.pubDate}</span>
                        <button className={`ml-10 border-0 bg-white 
                    ${checkSavedPost({
                            title: data.title, desc: data.desc,
                            pubDate: data.pubDate, link: data.link, img: data.img
                        }) ? `text-warning` : ``}`}
                                type="reset"
                                onClick={() => {
                                    savedPost({
                                        title: data.title, desc: data.desc,
                                        pubDate: data.pubDate, link: data.link, img: data.img
                                    })
                                }}><i className="fas fa-bookmark"></i></button>
                        <h4>
                            <Link to={`/${data.link.substring(20, data.link.indexOf(".htm"))}`}
                                  key={"SidePostTrending" + data.title}
                                  onClick={() => {
                                      historyPost({
                                          title: data.title, desc: data.desc,
                                          pubDate: data.pubDate, link: data.link, img: data.img
                                      })
                                  }}>{data.title}
                            </Link>
                        </h4>
                    </div>
            </div>
        </div>
    )
}
const Tag = (data) => {
    return(
    <div className="tag-container">
        <Link to={`/${data.cate}`} style={{
            margin:"0 !important"}}
              key={"cateTag "+ data.name}><p className="tag-item">
            {data.name}</p></Link>
    </div>
    )
}
const LatestPost = (data) => {
    return(
      <div className="col-lg-6 col-md-6">
          <div className="single-what-news mb-40">
                  <div className="what-img">
                      <img src={data.img} alt={"loading ảnh"}/>
                  </div>
                  <div className="what-cap">
                      <span className="color-1">{data.pubDate}</span>
                      <button className={`ml-10 border-0 bg-white 
                    ${checkSavedPost({
                          title: data.title, desc: data.desc,
                          pubDate: data.pubDate, link: data.link, img: data.img
                      }) ? `text-warning` : ``}`}
                              type="reset"
                              onClick={() => {
                                  savedPost({
                                      title: data.title, desc: data.desc,
                                      pubDate: data.pubDate, link: data.link, img: data.img
                                  })
                              }}><i className="fas fa-bookmark"></i></button>
                      <h4>
                          <Link to={`/${data.link.substring(20, data.link.indexOf(".htm"))} `}
                                key={"latestPostItem" + data.title}
                                onClick={() => {
                                    historyPost({
                                        title: data.title, desc: data.desc,
                                        pubDate: data.pubDate, link: data.link, img: data.img
                                    })
                                }}>{data.title}
                          </Link>
                      </h4>
                  </div>
          </div>
      </div>
  )
}
const Latest = (data) => {
    const [itemContent, setItem] = useState( "tin-moi-nhat")
    const list = RssPage(itemContent.cate)
    if (list.length < 1) {
        return (<div>Error</div>)
    }
  return(
      <section className="whats-news-area pt-20 pb-20">
          <div className="container" style={{ borderBottom: "1px solid #eeeeee"}}>
              <div className="row">
                  <div className="col-lg-8">
                      <div className="row d-flex justify-content-between">
                          <div className="col-lg-3 col-md-3">
                              <div className="section-tittle mb-30">
                                  <h3>Tin mới nhất</h3>
                              </div>
                          </div>
                          <div className="col-lg-9 col-md-9">
                              <div className="see-more"
                              style={{
                                  textAlign: "end",
                                  fontSize: "17px",
                                  marginTop: "6px",
                                  marginRight: "6px",
                              }}
                              >
                                  <Link to={`/${data.cate}`}>Xem thêm</Link>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">

                              <div className="tab-content" id="nav-tabContent">

                                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                       aria-labelledby="nav-home-tab">
                                      <div className="whats-news-caption">
                                          <div className="row">
                                              {list.slice(1, 5)
                                                  .map(item => <LatestPost
                                                      title={item.title}
                                                      img={item.img}
                                                      pubDate={item.pubDate}
                                                      link={item.link}
                                                      cate={itemContent.cate}
                                                      key={item.title}
                                                      />)}
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="section-tittle mb-15">
                          <h3>Danh mục</h3>
                      </div>
                      <div className="mb-20 d-flex"
                      style={{flexWrap :"wrap"}}>
                          {cateData.slice(5, cateData.length).map(cate =>
                              <Tag key={cate.name} cate={cate.cate} name={cate.name}/>
                          )}
                      </div>
                      <div className="news-poster d-none d-lg-block">
                          <div>Banner Pic</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
const CatePostItem = (data) => {
  return (
      <div className="col-lg-4">
          <div className="single-bottom mb-35">
                  <div className="trend-bottom-img mb-30">
                      <img src={data.img} alt="IMG"/>
                  </div>
                  <div className="trend-bottom-cap">
                      <span className="color1">{data.pubDate}</span>
                      <button className={`ml-10 border-0 bg-white 
                    ${checkSavedPost({
                          title: data.title, desc: data.desc,
                          pubDate: data.pubDate, link: data.link, img: data.img
                      }) ? `text-warning` : ``}`}
                              type="reset"
                              onClick={() => {
                                  savedPost({
                                      title: data.title, desc: data.desc,
                                      pubDate: data.pubDate, link: data.link, img: data.img
                                  })
                              }}><i className="fas fa-bookmark"></i></button>
                      <h4>
                          <Link to={`/${data.link.substring(20, data.link.indexOf(".htm"))}`}
                                key={"catePostItem" + data.title}
                                onClick={() => {
                                    historyPost({
                                        title: data.title, desc: data.desc,
                                        pubDate: data.pubDate, link: data.link, img: data.img
                                    })
                                }}>
                              {data.title}
                          </Link>
                      </h4>
                  </div>
          </div>
      </div>
  )
}
const CatePost = (data) => {
    const [itemContent] = useState(data)
    const list = RssPage(itemContent.cate)
    if (list.length < 1) {
        return (<div>Lỗi cate</div>)
    }
  return(
    <div className="trending-area fix" key={"catePost" + data.cate}>
        <div className="container">
            <div className="trending-main">
                <div className="row">
                    <div className="col-lg-8 main-trending">
                        <div className="row">
                            <div className="col-lg-12" style={{marginTop: "10px"}}>
                                <div className="section-tittle mb-30">
                                    <h3>{itemContent.name}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="trending-bottom">
                            <div className="row">
                                {list.slice(1, 4)
                                    .map(item => <CatePostItem
                                        title={item.title}
                                        img={item.img}
                                        key ={item.title}
                                        pubDate={item.pubDate}
                                        link={item.link}
                                        cate={itemContent.cate}
                                        description={item.description}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export const Home = () => {
    return(
      <div id="main-page"
      style={{marginTop:"25px"}}>
          <Trending/>
          <Latest/>
          {cateData.slice(1, 4).map(item => <CatePost key={item.cate} cate={item.cate} name={item.name} />)}
          <BackToTop/>
      </div>
  )
}