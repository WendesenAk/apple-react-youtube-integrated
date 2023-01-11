import React, {useState, useEffect} from 'react';
import './YouTubeStyle.css';




export default function YouTube() {
    const [value, setValue] = useState([]);

    useEffect(()=>{
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7mBjliN0XvlsaL9Tje3j8FfRanN-FNyI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8")
        .then((res)=> res.json())
        .then((data)=>{
        const videoData = data.items;
        setValue(videoData)
        })
        .catch(() => console.log('Unable to Fetch'))     
    }, [])

return (
<>
<div className="container">
<div className="row">
        <div className="col-12">
        
        <div className="title-wraper videoTitle">
            Latest Videos
        </div>

        </div>
        {value?.map((item, i) => {
            const ids = item.id.videoId;
            const links = `https://www.youtube.com/watch?v=${ids}`;
            const videos = (
                <div key={ids} className="col-sm-12 col-lg-6">
                <div className="eachVideo">
                <div className="thumbnail">
                <a href={links} target="_blank" >
                <img src={item.snippet.thumbnails.high.url} />
                </a>
                </div>
        <div className="info">
            <div className="title">
            <a href={links} target="_blank">
            {item.snippet.title}
            </a>
            </div>

            <div className="description">
            {item.snippet.description}
            </div>
            <div className="description">
            {item.snippet.publishedAt}
            </div>
        </div>
        </div>
        </div>
        );
        return videos;
        })}
        </div>
    </div>
</>
);
}











