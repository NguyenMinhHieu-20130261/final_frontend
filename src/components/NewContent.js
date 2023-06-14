import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {cateData} from "../category-data/cateData";

function NewContent(props) {
    const content = props.post;
    const contentRef = useRef(null);
    const datacontent = content.contents
    useEffect(() => {
        if (contentRef.current && datacontent instanceof Node) {
            const contentElement = contentRef.current;
            while (contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            contentRef.current.appendChild(datacontent)
        }
    }, [datacontent]);
    return (<div className="p-b-70">
        <Link to={`/${props.cate}`} className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
            {cateData.find(item => item.cate === props.cate).name}
        </Link>
        <h3 className="f1-l-3 cl2 p-b-20 p-t-33 respon2">
            {content.title}
        </h3>
        <div className="flex-wr-s-s p-b-17" style={{alignItems: "center"}}>
								<span className="f1-s-3 cl8 m-r-15">
									<span>
										{content.date}
									</span>
								</span>
        </div>
        <h5 className={"sapo p-b-15"}>{content.sapo}</h5>

        <div className={"main-content"} ref={contentRef}/>


        <div className="flex-s-s" style={{display:"flex"}}>
            <span className="f1-s-12 cl5 p-t-1 m-r-15" style={{paddingTop: "12px", marginRight: "20px"}}>
                Share:
            </span>
            <div className="flex-wr-s-s size-w-0" style={{cursor:"pointer"}}>
                <ShareFbButton/>
            </div>
        </div>
    </div>)
}

function ShareFbButton() {
    const handleFbShare = () => {
        const urlToShare = "https://nld.com.vn" + sessionStorage.getItem("link"); // URL của tin tức muốn chia sẻ
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, '_blank');
    };

    return (
        <a onClick={handleFbShare}
           className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
           style={{color: "white"}}>
            <i className="fab fa-facebook-f m-r-7" style={{margin:"10px"}}></i>
            Facebook
        </a>
    );
}


export default NewContent