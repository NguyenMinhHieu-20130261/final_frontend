import React, {useEffect, useState} from "react";
import {RssPage} from "../../RSS/rss";
import {Link} from "react-router-dom";
import {useLoaderData} from "react-router";


const ListResult = (data) => {
    return (
        <ul className="search-list d-flex" style={{position:"absolute",flexWrap :"wrap"}}>
            {data.list.map(item => <ResultItem link={item.link} img={item.img} pubDate={item.pubDate} title={item.title}/>)}
        </ul>
    )
}
const ErrorResult = () => {
    return (
        <ul className="search-list d-flex" style={{position:"absolute",flexWrap :"nowrap", margin: "0 !important"}}>
            <li>
                <div className="search-item "style={{border:"1px solid black", backgroundColor:"white",width:"205px"}}>
                    <p style={{ textAlign: "left",margin:"10px 5px"}}>Không có tin nào trong danh mục này !</p>
                </div>
            </li>
        </ul>
    )
}
const ResultItem = (result) => {
    return (
        <li className="result-search">
            <Link to={"/"+ result.link.substring(20,result.link.indexOf(".htm"))} style={{padding: "0 !important"}}>
                <div className="search-item"
                     style={{border:"1px solid black", backgroundColor:"white",width:"205px"}}>
                    <div style={{}}><p>{result.title}</p></div>
                    <div style={{}}><p>{result.pubDate}</p></div>
                </div>
            </Link>
        </li>
    )
}
export const SearchBar = (data) => {
    const [cate, setCate] = useState(data);
    const [searchText, setSearchText] = useState("");
    const [result , setResult] =useState(null)
    const [searchList , setSearchList] =useState(null)
    const list = RssPage(cate.cate);
    useEffect(() => {
        if (list && searchText.trim() !== "") {
            let filteredResult = list.filter(item => item.title.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
            setResult(filteredResult);
            setSearchList(filteredResult);
        } else {
            setSearchList();
        }
    }, [list,searchText]);
    return(
        <div className="col-xl-2 col-lg-2 col-md-4">
            <div className="header-right-btn ">
                <Link to={"/search"}>
                    <i className="fas fa-search magnify"></i>
                </Link>
                <form>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        className="search-bar" type="text" name="search" placeholder="Tìm kiếm"/>
                    {searchList && <ListResult key={cate.cate} list={searchList}></ListResult>}
                    {searchList && searchText.trim() !== "" && searchList.length === 0 && (
                        <ErrorResult/>
                    )}
                </form>
            </div>
        </div>
    )
}
export function SearchingBar() {
    const cate = useLoaderData();
    return (cate ?
      <SearchBar key={cate.cate} cate={cate.cate}/> : <div style={{position : "relative"}}><p>Error</p></div>)
}
