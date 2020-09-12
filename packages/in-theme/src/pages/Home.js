import React from "react"
import {connect} from "frontity"
import VideoPlayerCard from "../components/VideoPlayerCard"

const Home = ({state, actions}) => {
    //const videos = state.source.get("/videos")
    //const videos = state.source.video
    const video = state.source.video[16]
    return(
        <>
            <h2>Home page</h2>
            
            {
                //display video player card component if video is defined
                typeof video == "undefinded" ? <p>Loading</p> : <VideoPlayerCard href={video.acf.video_link}/>
            }
            
        </>
        
    )
}


export default connect(Home)