import React from "react";
import {RssDetails} from "../RSS/rss";
import {Link, useLoaderData} from "react-router-dom";
import {useMemo} from "react";
import {cateData} from "../category-data/cateData";
import NewContent from "./NewContent";


export const Breadcrumb = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="trending-tittle">
                    <div className="trending-animated" style={{display: "flex"}}>
                        <Link to={'/home'} className="item home" style={{color: "black"}}>Trang chủ/ </Link>
                        <Link to={`/${props.cate}`}
                              className="item cate" style={{color: "black"}}> {cateData.find(item => item.cate === props.cate).name}</Link>
                        <span className="item title" > / {props.title}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export const MainContent = (props) => {
    return (<div className="col-lg-8">
            <NewContent post={props.post} cate={props.cate}/>
    </div>)
}

export const PopularPosts = () => {
    return (<div className="p-b-30">
        <div className="how2 how2-cl4 flex-s-c">
            <h3 className="f1-m-2 cl3 tab01-title">
                Popular Post
            </h3>
        </div>

        <ul className="p-t-35">
            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-04.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Music
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 18
											</span>
										</span>
                </div>
            </li>

            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-05.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Game
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 16
											</span>
										</span>
                </div>
            </li>

            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-06.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Celebrity
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 12
											</span>
										</span>
                </div>
            </li>
        </ul>
    </div>)
}

export const FollowTitle = () => {
    return (
        <div className="section-tittle mb-40">
            <h3>Follow Us</h3>
        </div>
    )
}
export const FollowSocial = () => {
    return (
        <div className="single-follow mb-45">
            <div className="single-box">
                <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                        <a href="#"><img src="src/components/assets/img/news/icon-fb.png" alt=""/></a>
                    </div>
                    <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                    </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                        <a href="#"><img src="src/components/assets/img/news/icon-tw.png" alt=""/></a>
                    </div>
                    <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                    </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                        <a href="#"><img src="src/components/assets/img/news/icon-ins.png" alt=""/></a>
                    </div>
                    <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                    </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                        <a href="#"><img src="src/components/assets/img/news/icon-yo.png" alt=""/></a>
                    </div>
                    <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Banner = () => {
    return (
        <div className="news-poster d-none d-lg-block">
            <img src="assets/img/news/news_card.jpg" alt=""/>
        </div>
    )
}
export const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <FollowTitle></FollowTitle>
            <FollowSocial></FollowSocial>
            <Banner></Banner>
            <PopularPosts></PopularPosts>
        </div>
    )
}

export const Content = (props) => {
    return (
            <div className="row">
                <MainContent post={props.post} cate={props.cate}></MainContent>
                <Sidebar></Sidebar>
            </div>
    )
}

export function Detail() {
    const data = useLoaderData();
    const memoizedUrl = useMemo(() => data.link, [data]);
    const post = RssDetails(memoizedUrl);
    return (
        <div className="about-area">
            <div className="container">
                <div key={data.link}>
                    {post ? (
                        <div><Breadcrumb key={data} cate={data.cate} title={post.title}/>
                            <Content key={post} post={post} cate={data.cate}/></div>
                    ) : (
                        <h4 style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}> Đang hiển thị chi
                            tiết... </h4>)}
                </div>
            </div>
        </div>

    )
}

export function loadDetail({params}) {
    const link = `/api/` + params.cate + "/" + params.title + ".htm";
    sessionStorage.setItem("link", `/` + params.cate + "/" + params.title + ".htm");
    return {link: link, cate: params.cate, title: params.title};
}