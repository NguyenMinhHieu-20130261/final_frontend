import React, {useState} from "react";
import {RssDetails, RssPage} from "../RSS/rss";
import {Link, useLoaderData} from "react-router-dom";
import {useMemo} from "react";
import {cateData} from "../category-data/cateData";
import NewContent from "./NewContent";
import {Comments, FacebookProvider} from "react-facebook";
import {BackToTop} from "./layout/BackToTop";

export const Breadcrumb = (props) => {
    return (
        <div className="row" key={"Breadcrumb" + props.cate}>
            <div className="col-lg-12">
                <div className="trending-tittle">
                    <div className="trending-animated" style={{display: "flex"}}>
                        <Link to={'/'} className="item home" style={{color: "black"}}>Trang chủ</Link>
                        <span style={{margin: "0 10px 0 10px"}}> > </span>
                        <Link to={`/${props.cate}`}
                              className="item cate"
                              style={{color: "black"}}> {cateData.find(item => item.cate === props.cate).name}</Link>
                        <span style={{margin: "0 10px 0 10px"}}> > </span>
                        <span className="item title"> {props.title}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export const MainContent = (props) => {
    return (<div className="col-lg-8">
        <NewContent post={props.post} cate={props.cate}/>
        <FacebookComment link={props.link}></FacebookComment>
    </div>)
}
export const FacebookComment = (props) => {
    return (
        <FacebookProvider appId="810763943962254">
            <Comments
                href={`http://127.0.0.1:3000/` + props.link.substring(5, props.link.indexOf('.htm'))}/>
        </FacebookProvider>
    );
}
export const LatestItem = (item) => {
    return (
        <div className="row" key={"LatestItem" + item.title}>
            <div className="single-bottom mb-20" style={{marginLeft: "35px"}}>
                <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`}>
                    <div className="trend-bottom-img mb-15" style={{marginTop: "5px"}}>
                        <img src={item.img} alt="IMG" style={{height: "160px"}}></img>
                    </div>
                    <div className="trend-bottom-cap">
                        <span className="color1">{item.pubDate}</span>
                        <h4 style={{fontSize: "14px", marginRight: "75px"}}>{item.title}</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}
const latest = "tin-moi-nhat.rss";
export const LatestPost = () => {
    const [itemContent, setItem] = useState(latest)
    const list = RssPage("tin-moi-nhat")
    if (list.length < 1) {
        return (<div>Hiện chưa có tin nào"</div>)
    }
    return (
        <div className="p-b-30">
            <h3 className="f1-m-2 cl3 tab01-title">
                Tin mới nhất
            </h3>
            <ul className="row">
                {list.slice(0, 4).map(item => <LatestItem
                    title={item.title}
                    img={item.img}
                    pubDate={item.pubDate}
                    link={item.link}
                    cate={itemContent.cate}
                    description={item.description}
                    key={item.title}
                />)}
            </ul>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <LatestPost></LatestPost>
        </div>
    )
}

export const Content = (props) => {
    return (
        <div className="row">
            <MainContent link={props.link} post={props.post} cate={props.cate}></MainContent>
            <Sidebar></Sidebar>
        </div>
    )
}

export function Detail() {
    const data = useLoaderData();
    const memoizedUrl = useMemo(() => data.link, [data]);
    const post = RssDetails(memoizedUrl);
    const item = RssPage(data.cate).find(item => item.link.indexOf(data.link.substring(5)) !== -1);
    return (
        <div className="about-area">
            <div className="container">
                <div key={data.link}>
                    {post ? (
                        <div><Breadcrumb item={item} key={data.title} cate={data.cate} title={post.title}/>
                            <Content link={data.link} key={post} post={post} cate={data.cate}/></div>
                    ) : (
                        <h4 style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}> Đang hiển thị chi
                            tiết... </h4>)}
                </div>
                <BackToTop/>
            </div>
        </div>

    )
}

export function loadDetail({params}) {
    const link = `/api/` + params.cate + "/" + params.title + ".htm";
    sessionStorage.setItem("link", `/` + params.cate + "/" + params.title + ".htm");
    return {link: link, cate: params.cate, title: params.title};
}