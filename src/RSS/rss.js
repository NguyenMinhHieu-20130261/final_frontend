import React, { useState, useEffect } from 'react';
import axios from "axios";
import {parseString} from 'xml2js';
export const RssPage = (page) => {
    const [rssItems, setRssItems] = useState([]);
    useEffect(() => {
        // const urltest = '/api/tin-moi-nhat.rss';
        const url = `/api/${page}.rss`;
        // const url = `https://api.allorigins.win/raw?url=https://nld.com.vn/${page}.rss`;
        axios.get(url)
            .then(res => {
                const xml = res.data;
                parseString(xml,(err, feed) => {
                    if(err === true){
                        console.log(err);
                    } else {
                        const content = feed.rss.channel[0].item.map(item =>{
                            const desc = item.description[0];
                            const cleanedDesc = desc.replace(/<\/?(a|img)[^>]*>/g, '');
                            const imgUrlRegex = /<img.*?src="(.*?)"/;
                            const imgUrlMatch = desc.match(imgUrlRegex);
                            const imgLink = imgUrlMatch ? imgUrlMatch[1] : null;
                            return{
                                title : item.title[0],
                                desc : cleanedDesc,
                                pubDate : item.pubDate[0],
                                guid : item.guid[0],
                                link : item.link[0],
                                img : imgLink
                            }
                        });
                        setRssItems(content);
                    }
                })
            })
            .catch(error => console.log(error));
    }, [page]);
    return rssItems;
}

export const RssDetails = (titleUrl) => {
    const [newsDetail, setNewsDetail] = useState(null);
    const cheerio = require('cheerio');

    useEffect(() => {
        async function getPost() {
            // await axios.get(`https://api.allorigins.win/raw?url=https://nld.com.vn/` + titleUrl.substring(5)).then(response => {
            await axios.get(titleUrl).then(response => {
                const $ = cheerio.load(response.data);
                const title = $(".title-content h1").text();
                const date = $(".clearfix .dateandcat p").text();
                const sapo = $(".sapo-detail h2").text();
                const contents = $(".content-news-detail div").contents()
                const range = document.createRange();
                const entryBodyFragment = range.createContextualFragment(contents);
                const result = {title: title, date: date, sapo: sapo, contents: entryBodyFragment}
                setNewsDetail(result)
            }).catch(error => {
                console.log(error);
            });
        }

        getPost();
    }, [titleUrl, cheerio]);
    return newsDetail;
}

