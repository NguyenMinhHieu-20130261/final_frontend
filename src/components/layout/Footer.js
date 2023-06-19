import React, {useState} from 'react';
import icon from "./icon/newspaper.png";
import {Link} from "react-router-dom";
import {RssPage} from "../../RSS/rss";

const FooterTop = () => {
    const latest = "tin-moi-nhat.rss";
    const [itemContent, setItem] = useState(latest)
    const list = RssPage("tin-moi-nhat")
    if (list.length < 1) {
        return (<div>Hiện chưa có tin nào"</div>)
    }
    return (
        <div className="footer-area footer-padding fix">
            <div className="container" style={{marginTop:"-50px"}}>
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-5  col-sm-7">
                        <div className="single-footer-caption">
                            <div className="single-footer-caption">
                                <div className="footer-tittle">
                                    <div className="footer-pera ">
                                        <p class="footer-1" style={{fontWeight:"bold", color:"white", fontSize:"20px"}}>BÁO NGƯỜI LAO ĐỘNG ĐIỆN TỬ</p>
                                        <p className="certification" style={{color:"white", fontSize:"13px", marginTop:"-28px", marginBottom: "15px"}}>
                                            © Giấy phép số 115/GP- BTTTT cấp ngày 09 tháng 02 năm 2021 của Bộ Thông tin
                                            và Truyền thông
                                        </p>
                                        <div className="manager" style={{marginBottom:"10px"}}>
                                            <p style={{marginBottom:"1px", color:"white", fontSize:"13px"}}>Tổng Biên tập: TÔ ĐÌNH TUÂN</p>
                                            <p style={{marginBottom:"1px", color:"white", fontSize:"13px"}}>Phó Tổng Biên tập: DƯƠNG QUANG, BÙI THANH LIÊM</p>
                                            <p style={{marginBottom:"1px", color:"white", fontSize:"13px"}}>Tổng Thư ký Tòa soạn: LÊ CƯỜNG</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-social">
                                    <a href="#"><i className="fab fa-twitter" style={{color:"white", fontSize:"30px"}}></i></a>
                                    <a href="#"><i className="fab fa-instagram" style={{color:"white", fontSize:"30px"}}></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p" style={{color:"white", fontSize:"30px"}}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                        <div className="single-footer-caption">
                            <div className="footer-tittle">
                                <h4 style={{marginLeft:"-17px"}}>Tin Mới Nhất</h4>
                                <div className="footer-form">
                                    <div id="mc_embed_signup">
                                        <ul>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Trụ sở chính</h4>
                            </div>
                            <div className="instagram-gellay">
                                <div className="address" style={{color:"white"}}>
                                    <p style={{color:"white"}}>
                                        127 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3 - TPHCM
                                    </p>
                                    <p style={{color:"white"}}>
                                        Điện thoại: 028-3930.6262 / 028-3930.5376
                                    </p>
                                    <p style={{color:"white"}}>
                                        Fax: 028-3930.4707
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const LatestItem = (item) => {
    return (
        <div className="row" key={"LatestItem" + item.title} style={{display:"flex"}}>
            <div className="single-bottom mb-20" style={{marginLeft: "0px"}}>
                <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`}>
                    <div className="trend-bottom-img mb-15" style={{marginTop: "5px", float:"left"}}>
                        <img src={item.img} alt="IMG" style={{height: "64px"}}></img>
                    </div>
                    <div className="trend-bottom-cap" style={{marginLeft:"143px"}}>
                        <h4 style={{fontSize: "14px"}}>{item.title}</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}
const FooterBottom = () => {
    return (
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="footer-copy-right">

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-menu f-right">
                                <ul>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Footer = () => {
    return (
        <footer>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </footer>
    );
};
