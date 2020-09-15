import React, {useEffect} from "react"
import {connect} from "frontity"
import VideoPlayerCard from "../components/VideoPlayerCard"

const Home = ({state, actions}) => {
    // TODO: Get video by id 
    const video = state.source.video
    return(
        <>
            <h2>Home page</h2>
            {
                //display video player card component if video is defined
                typeof video == "undefined" ? <p>Loading video...</p> : <VideoPlayerCard href={video[16].acf.video_link}/>
            }
            
        </>
        
    )
}


export default connect(Home)