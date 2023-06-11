import React from 'react';
import {Link} from "react-router-dom";

const PostItem = () => {
    return (
        <div className="flex-wr-sb-s m-b-30">
            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                Pic
                </a>
            <div className="size-w-2">
                <h5 className="p-b-5">
                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                        Donec metus orci, malesuada et lectus vitae
                    </a>
                </h5>
                <span className="cl8">
                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                        Music
                    </a>

                    <span className="f1-s-3 m-rl-3">
                        -
                    </span>

                    <span className="f1-s-3">
                        Feb 17
                    </span>
                </span>
            </div>
        </div>
    )
}
const PostMain = () => {
    return (
        <div className="col-sm-6 p-r-25 p-r-15-sr991">
            <div className="m-b-30">
                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                    MainPostPic
                </a>
                <div className="p-t-20">
                    <h5 className="p-b-5">
                        <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            American live music lorem ipsum dolor sit amet consectetur
                        </a>
                    </h5>

                    <span className="cl8">
                        <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
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
            </div>
        </div>
    )
}
const PostBody = () => {
    return(
        <div className="col-md-10 col-lg-8">
            <div className="p-b-20">
                <div className="tab01 p-b-20">
                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                        <h3 className="f1-m-2 cl12 tab01-title">
                            Title
                        </h3>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tab1-1" role="tab"></a>
                            </li>
                        </ul>
                        <a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                            Xem thêm
                            <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                        </a>
                    </div>

                    <div className="tab-content p-t-35">
                        <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                            <div className="row">
                                <PostMain></PostMain>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    <PostItem></PostItem>
                                    <PostItem></PostItem>
                                    <PostItem></PostItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const LeftMostViewed = () => {
  return (
      <div>
          <div className="how2 how2-cl4 flex-s-c">
              <h3 className="f1-m-2 cl3 tab01-title">
                  Tin tức nổi bật nhất
              </h3>
          </div>

          <ul className="p-t-35">
              <li className="flex-wr-sb-s p-b-22">
                  <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                      1
                  </div>

                  <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
              </li>

              <li className="flex-wr-sb-s p-b-22">
                  <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                      2
                  </div>

                  <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                      Proin velit consectetur non neque
                  </a>
              </li>

              <li className="flex-wr-sb-s p-b-22">
                  <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                      3
                  </div>

                  <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                      Nunc vestibulum, enim vitae condimentum volutpat lobortis ante
                  </a>
              </li>

              <li className="flex-wr-sb-s p-b-22">
                  <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                      4
                  </div>

                  <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                      Proin velit justo consectetur non neque elementum
                  </a>
              </li>

              <li className="flex-wr-sb-s p-b-22">
                  <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                      5
                  </div>

                  <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                      Proin velit consectetur non neque
                  </a>
              </li>
          </ul>
      </div>

  )
}
const Post = () => {
  return(
      <section className="bg0 p-t-70">
          <div className="container">
              <div className="row justify-content-center">

                  <PostBody></PostBody>

                  <div className="col-md-10 col-lg-4">
                      <div className="p-l-10 p-rl-0-sr991 p-b-20">

                          <LeftMostViewed></LeftMostViewed>

                          <div className="flex-c-s p-t-8">
                              <a href="#">
                                  imgBanner
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
const LatestItem = () => {
  return(
      <div className="m-b-45">
          <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
              LatestPostImg
          </a>
          <div className="p-t-16">
              <h5 className="p-b-5">
                  <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                      You wish lorem ipsum dolor sit amet consectetur
                  </a>
              </h5>

              <span className="cl8">
                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                        by John Alvarado
                    </a>

                    <span className="f1-s-3 m-rl-3">
                        -
                    </span>

                    <span className="f1-s-3">
                        Feb 18
                    </span>
                </span>
          </div>
      </div>
  )
}
const Tag = () => {
  return(
      <div className="p-b-55">
          <div className="how2 how2-cl4 flex-s-c m-b-30">
              <h3 className="f1-m-2 cl3 tab01-title">
                  Tags
              </h3>
          </div>

          <div className="flex-wr-s-s m-rl--5">
              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Fashion
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Lifestyle
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Denim
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Streetstyle
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Crafts
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Magazine
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  News
              </a>

              <a href="#"
                 className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                  Blogs
              </a>
          </div>
      </div>
  )
}
const LatestPost = () => {
    return(
        <section className="bg0 p-t-60 p-b-35">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 p-b-20">
                        <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                            <h3 className="f1-m-2 cl3 tab01-title">
                                Tin tức mới nhất
                            </h3>
                        </div>
                        <div className="row p-t-35">
                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                <LatestItem></LatestItem>
                            </div>
                        </div>
                        <div className="row p-t-35">
                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                <LatestItem></LatestItem>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            <Tag></Tag>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export const Home = () => {
  return(
      <div className="main-page">
          <Post></Post>
          <LatestPost></LatestPost>
      </div>
  );
}