import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {cateData} from "../category-data/cateData";
import Speech from "./Speech/Speech";

function NewContent(props) {
    const content = props.post;
    const contentRef = useRef(null);
    const datacontent = content.contents
    const [speakContent, setSpeak] = useState("");
    useEffect(() => {
        if (contentRef.current && datacontent instanceof Node) {
            const contentElement = contentRef.current;
            while (contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            contentRef.current.appendChild(datacontent)
            const paragraphs = contentElement.querySelectorAll('p');
            let speakData = content.sapo + ", " + Array.from(paragraphs).map((p) => p.textContent).join(", ");
            setSpeak(speakData)
        }
    }, [datacontent]);
    return (<div className="p-b-70" style={{marginRight:"56px"}}>
        <Link to={`/${props.cate}`} className="text-uppercase" style={{fontSize:"13px"}}>
            {cateData.find(item => item.cate === props.cate).name}
        </Link>
        <h3 className="respon2" style={{marginTop:"20px", marginBottom:"20px"}}>
            {content.title}
        </h3>
        <div style={{alignItems: "center"}}>
								<span className="f1-s-3 cl8 m-r-15">
									<span>
										{content.date}
									</span>
								</span>
            <Speech text={speakContent}/>
        </div>
        <h5 className={"sapo"} style={{marginTop:"10px"}}>{content.sapo}</h5>

        <div className={"main-content"} ref={contentRef}/>


        <div className="flex-s-s" style={{display:"flex"}}>
            <span style={{paddingTop: "12px", marginRight: "20px"}}>
                Chia sẻ:
            </span>
            <div style={{cursor:"pointer"}}>
                <FacebookShare/>
                <TwitterShare/>
            </div>
        </div>
    </div>)
}

function FacebookShare() {
    const handleFbShare = () => {
        // Lấy url của tin tức muốn chia sẻ
        const urlToShare = "https://nld.com.vn" + sessionStorage.getItem("link");
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, '_blank');
    };

    return (
        <a onClick={handleFbShare}
           className="f1-s-13 cl0 bg-facebook hov-btn1"
           style={{color: "white", marginRight:"30px"}}>
            <i className="fab fa-facebook-f m-r-7" style={{margin:"10px"}}></i>
            Facebook
        </a>
    );
}

function TwitterShare() {
    const ShareTwitterButton = () => {
        // Lấy URL của tin tức muốn chia sẻ
        const urlToShare = "https://nld.com.vn" + sessionStorage.getItem("link");
        const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(urlToShare)}`;
        window.open(twitterShareUrl, '_blank');
    };

    return (
        <a onClick={ShareTwitterButton}
           className="f1-s-13 cl0 bg-twitter hov-btn1"
           style={{color: "white"}}>
            <i className="fab fa-twitter m-r-7" style={{margin:"10px"}}></i>
            Twitter
        </a>
    );
}


export default NewContent