import React from 'react';
import icon from "./icon/newspaper.png";
const Footer = () => {
    return (
        <footer>
            <div className="bg2 p-t-40 p-b-25">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <div className="site-title-footer">
                                    <a href="index.html" className="title-link">
                                        <img className="footer-icon" src={icon}></img>
                                        <h2>
                                            Báo BaHắt
                                        </h2>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="f1-s-1 cl11 p-b-16">

                                </p>

                                <p className="f1-s-1 cl11 p-b-16">
                                    Nếu bạn có thắc mắc nào xin liên hệ với chúng tôi thông qua số điện thoại (+84)909067623
                                </p>

                                <div className="p-t-15">
                                    <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span className="fab fa-facebook-f"></span>
                                    </a>

                                    <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span className="fab fa-twitter"></span>
                                    </a>

                                    <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span className="fab fa-pinterest-p"></span>
                                    </a>

                                    <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span className="fab fa-vimeo-v"></span>
                                    </a>

                                    <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span className="fab fa-youtube"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0">
                                    Bài đăng nổi bật
                                </h5>
                            </div>

                            <ul>
                                <li className="flex-wr-sb-s p-b-20 footer-link">
                                    <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                        Ảnh bài đăng
                                    </a>

                                    <div className="size-w-5">
                                        <h6 className="p-b-5">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                Tiêu đề bài đăng
                                            </a>
                                        </h6>

                                        <span className="f1-s-3 cl6">
											Feb 17
										</span>
                                    </div>
                                </li>

                                <li className="flex-wr-sb-s p-b-20 footer-link">
                                    <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                        Ảnh bài đăng
                                    </a>
                                    <div className="size-w-5">
                                        <h6 className="p-b-5">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                Tiêu đề bài đăng
                                            </a>
                                        </h6>

                                        <span className="f1-s-3 cl6">
											Feb 16
										</span>
                                    </div>
                                </li>

                                <li className="flex-wr-sb-s p-b-20 footer-link">
                                    <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                        Ảnh bài đăng
                                    </a>

                                    <div className="size-w-5">
                                        <h6 className="p-b-5">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                Tiêu đề bài đăng
                                            </a>
                                        </h6>

                                        <span className="f1-s-3 cl6">
											Feb 15
										</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0">
                                    Category
                                </h5>
                            </div>

                            <ul className="m-t--12 footer-link">
                                <li className="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Giải trí
                                    </a>
                                </li>

                                <li className="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Kinh doanh
                                    </a>
                                </li>

                                <li className="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Thể thao
                                    </a>
                                </li>

                                <li className="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Du lịch
                                    </a>
                                </li>

                                <li className="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Tin tức
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg11">
                <div className="container size-h-4 flex-c-c p-tb-15">
					<span className="f1-s-1 cl0 txt-center">
                        Bản quyền thuộc về Báo BaHắt
                        .Các website khác đã được chúng tôi đồng ý cho khai thác thông tin, khi đăng lại phải ghi rõ nguồn:
                        Theo Báo Ba Hắt.
					</span>
                </div>
            </div>
        </footer>

    );
};
const BackToTop = () => {
  return (
      <div className="btn-back-to-top" id="myBtn">
		<span className="symbol-btn-back-to-top">
			<span className="fas fa-angle-up"></span>
		</span>
      </div>
  );
}
export default Footer;