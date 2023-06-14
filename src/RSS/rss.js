import React, { useState, useEffect } from 'react';
import axios from "axios";
import {parseString} from 'xml2js';
export const RssPage = (page) => {
    const [rssItems, setRssItems] = useState([]);
    useEffect(() => {
        // const urltest = '/api/tin-moi-nhat.rss';
        const url = `/api/${page}.rss`;
        axios.get(url)
            .then(res => {
                const xml = res.data;
                // parser.
                parseString(xml,(err, feed) => {
                    if(err === true){
                        console.log(err);
                    } else {
                        const content = feed.rss.channel[0].item.map(item =>{
                            const description = item.description[0];
                            const imageUrlRegex = /<img.*?src="(.*?)"/;
                            const imageUrlMatch = description.match(imageUrlRegex);
                            const img = imageUrlMatch ? imageUrlMatch[1] : null;
                            const cleanedDescription = description.replace(/<\/?(a|img)[^>]*>/g, '').replace(/&#\d+;/g, '');
                            return{
                                title : item.title[0],
                                desc : cleanedDescription,
                                pubDate : item.pubDate[0],
                                guid : item.guid[0],
                                link : item.link[0],
                                img: img
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
            await axios.get(titleUrl).then(response => {
                const $ = cheerio.load(response.data);
                const title = $("h1.title-content").text();
                const date = $("p.dateandcat.clearfix").text();
                const sapo = $("h2.sapo-detail").text();
                const contents = $("div.content-news-detail").contents()
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

