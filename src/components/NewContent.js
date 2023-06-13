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


        <div className="flex-s-s">
								<span className="f1-s-12 cl5 p-t-1 m-r-15">
									Share:
								</span>

            <div className="flex-wr-s-s size-w-0">
            </div>
        </div>
    </div>)
}


export default NewContent